import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, Copy, Check, Sparkles, MapPin, Clock, Phone, User, Package } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem, formatRupiah, generateWhatsAppMessage } from '../utils/orderUtils';
import { PackagingOption } from '../data/menuData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onUpdatePackaging: (id: string, packaging: PackagingOption) => void;
  onClearCart: () => void;
  currentDayName: string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onUpdatePackaging,
  onClearCart,
  currentDayName,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('delivery');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const jumatBerkahDonation = items.reduce((sum, item) => {
    return sum + (item.menuItem.isJumatBerkah ? 500 * item.quantity : 0);
  }, 0);

  const totalPortions = items.reduce((sum, item) => sum + item.quantity, 0);

  const orderMessage = generateWhatsAppMessage(items, {
    name: customerName,
    phone: customerPhone,
    deliveryType,
    address: deliveryAddress,
    deliveryTime,
    daySelected: currentDayName,
    notes: specialNotes,
  });

  const handleSendWhatsApp = () => {
    // Official / Demo WhatsApp Hotline for Le Paron
    const waNumber = '6281289001818'; // Standard Indonesian WhatsApp contact format
    const encoded = encodeURIComponent(orderMessage);
    const waUrl = `https://wa.me/${waNumber}?text=${encoded}`;
    
    // Trigger festive celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch (e) {
      // ignore
    }

    // Open WhatsApp
    window.open(waUrl, '_blank');
  };

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(orderMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/80 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-lg bg-stone-900 border-l border-stone-800 text-stone-100 flex flex-col h-full shadow-2xl">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-stone-800 flex items-center justify-between bg-stone-950/70">
          <div>
            <h2 className="text-lg font-bold font-display text-white">
              Keranjang Pesanan Le’Paron
            </h2>
            <div className="text-xs text-stone-400 mt-0.5">
              {totalPortions} Porsi Makanan &amp; Minuman
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-stone-800 flex items-center justify-center mx-auto text-stone-500">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-stone-300">Keranjang Masih Kosong</h3>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Silakan pilih hidangan favorit Anda dari jadwal menu harian atau paket 5 orang hari Minggu.
              </p>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-400 uppercase tracking-wider">
                  <span>Daftar Menu Dipilih:</span>
                  <button
                    onClick={onClearCart}
                    className="text-rose-400 hover:text-rose-300 flex items-center gap-1 normal-case"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Kosongkan</span>
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-stone-950/60 border border-stone-800/80 space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-bold text-sm text-white">
                          {item.menuItem.name}
                        </div>
                        <div className="text-xs text-amber-400 font-mono">
                          {formatRupiah(item.unitPrice)}
                          {item.selectedTier === 'Premium' && (
                            <span className="text-[10px] text-stone-400 ml-1.5 font-sans">(Tier Premium)</span>
                          )}
                        </div>
                        {item.drinkOption && (
                          <div className="text-[11px] text-stone-400">
                            Sajian: <strong className="text-stone-300">{item.drinkOption}</strong>
                          </div>
                        )}
                        {item.spicyPreference && (
                          <div className="text-[11px] text-stone-400">
                            Sambal: <strong className="text-stone-300">{item.spicyPreference}</strong>
                          </div>
                        )}
                        {item.customNotes && (
                          <div className="text-[11px] text-stone-400 italic">
                            Catatan: "{item.customNotes}"
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-stone-500 hover:text-rose-400 p-1"
                        title="Hapus menu ini"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Packaging Selector for this item */}
                    {item.menuItem.session !== 'minuman' && item.menuItem.tier !== 'Paket 5 Orang' && (
                      <div className="flex items-center justify-between text-xs pt-1 border-t border-stone-900">
                        <span className="text-stone-400 text-[11px]">Wadah:</span>
                        <div className="inline-flex p-0.5 bg-stone-900 rounded-lg text-[11px]">
                          <button
                            type="button"
                            onClick={() => onUpdatePackaging(item.id, 'Paper Bowl')}
                            className={`px-2 py-0.5 rounded transition-colors ${
                              item.packaging === 'Paper Bowl'
                                ? 'bg-amber-500 text-stone-950 font-bold'
                                : 'text-stone-400 hover:text-stone-200'
                            }`}
                          >
                            Paper Bowl
                          </button>
                          <button
                            type="button"
                            onClick={() => onUpdatePackaging(item.id, 'Box Lunch')}
                            className={`px-2 py-0.5 rounded transition-colors ${
                              item.packaging === 'Box Lunch'
                                ? 'bg-amber-500 text-stone-950 font-bold'
                                : 'text-stone-400 hover:text-stone-200'
                            }`}
                          >
                            Box Lunch
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Quantity Stepper & Subtotal */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2 bg-stone-900 rounded-xl p-0.5 border border-stone-800">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-lg bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-300"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-mono text-xs px-1 font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-lg bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-300"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="font-mono font-bold text-sm text-stone-200">
                        {formatRupiah(item.unitPrice * item.quantity)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Jumat Berkah Banner inside Cart if applicable */}
              {jumatBerkahDonation > 0 && (
                <div className="p-3.5 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 text-xs space-y-1">
                  <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Jumat Berkah Terkumpul: {formatRupiah(jumatBerkahDonation)}</span>
                  </div>
                  <p className="text-emerald-200/80 leading-relaxed text-[11px]">
                    Setiap porsi Nasi Liwet Solo otomatis menyumbang Rp500 ke kas program sedekah makan gratis Le'Paron untuk ojol &amp; kaum dhuafa.
                  </p>
                </div>
              )}

              {/* Order Delivery & Identity Form */}
              <div className="space-y-4 pt-2 border-t border-stone-800">
                <div className="text-xs font-semibold text-stone-300 uppercase tracking-wider">
                  Informasi Pengambilan / Pengiriman:
                </div>

                {/* Delivery Type Switcher */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('delivery')}
                    className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                      deliveryType === 'delivery'
                        ? 'border-amber-500 bg-amber-500/10 text-amber-400'
                        : 'border-stone-800 bg-stone-950 text-stone-400'
                    }`}
                  >
                    Antar (Delivery)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('pickup')}
                    className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                      deliveryType === 'pickup'
                        ? 'border-amber-500 bg-amber-500/10 text-amber-400'
                        : 'border-stone-800 bg-stone-950 text-stone-400'
                    }`}
                  >
                    Ambil Sendiri (Takeaway)
                  </button>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[11px] text-stone-400 flex items-center gap-1">
                    <User className="w-3 h-3 text-amber-400" />
                    <span>Nama Pemesan:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Bpk. Budi Santoso"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[11px] text-stone-400 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-amber-400" />
                    <span>No. WhatsApp / Telepon:</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Contoh: 0812-3456-7890"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Delivery Address (if delivery) */}
                {deliveryType === 'delivery' && (
                  <div className="space-y-1">
                    <label className="text-[11px] text-stone-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>Alamat Lengkap / Kantor / Patokan:</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Contoh: Gedung Artha Graha Lt. 4 / Jl. Bintaro Sektor 9 No. 12"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                )}

                {/* Target Time */}
                <div className="space-y-1">
                  <label className="text-[11px] text-stone-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>Target Jam Santap / Kirim:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Sarapan Pk 07:30 atau Siang Pk 12:00"
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Additional Notes */}
                <div className="space-y-1">
                  <label className="text-[11px] text-stone-400">
                    Catatan Pesanan / Pengiriman:
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Jangan dibunyikan bel, titip di resepsionis"
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

              </div>
            </>
          )}
        </div>

        {/* Footer Summary & WhatsApp Action */}
        {items.length > 0 && (
          <div className="p-4 sm:p-6 bg-stone-950 border-t border-stone-800 space-y-3">
            
            {/* Calculation rows */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-400">
                <span>Total Porsi ({totalPortions} item)</span>
                <span className="font-mono">{formatRupiah(totalAmount)}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Biaya Kemasan Paper Bowl / Box</span>
                <span className="font-mono text-emerald-400">GRATIS (Standar Le'Paron)</span>
              </div>
              <div className="flex justify-between text-stone-100 text-sm font-bold pt-1.5 border-t border-stone-800">
                <span>Total Pembayaran:</span>
                <span className="text-amber-400 font-mono text-base">
                  {formatRupiah(totalAmount)}
                </span>
              </div>
            </div>

            {/* WhatsApp Primary Order CTA */}
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pesanan Langsung ke WhatsApp</span>
            </button>

            {/* Secondary Copy Text CTA */}
            <button
              onClick={handleCopyOrder}
              className="w-full py-2.5 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-stone-700/60"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Format Pesanan Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Salin Format Teks Pesanan</span>
                </>
              )}
            </button>

            <div className="text-[11px] text-center text-stone-500">
              *Pesanan akan langsung diterima admin dapur untuk konfirmasi ketersediaan &amp; jadwal kirim.
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
