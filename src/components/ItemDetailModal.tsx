import React, { useState } from 'react';
import { X, Check, Package, Utensils, Heart, ShieldCheck, Flame, Plus, Minus } from 'lucide-react';
import { MenuItem, PackagingOption } from '../data/menuData';
import { formatRupiah } from '../utils/orderUtils';

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (
    item: MenuItem,
    tier: 'Reguler' | 'Premium',
    unitPrice: number,
    packaging: PackagingOption,
    drinkOption?: 'Dingin (Es)' | 'Hangat',
    quantity?: number,
    spicyPreference?: 'Tidak Pedas' | 'Sedang' | 'Pedas Pisah',
    customNotes?: string
  ) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  const [selectedTier, setSelectedTier] = useState<'Reguler' | 'Premium'>('Reguler');
  const [packaging, setPackaging] = useState<PackagingOption>(
    item.packagingDefault === 'Box Lunch' ? 'Box Lunch' : 'Paper Bowl'
  );
  const [drinkOption, setDrinkOption] = useState<'Dingin (Es)' | 'Hangat'>('Dingin (Es)');
  const [spicyPreference, setSpicyPreference] = useState<'Tidak Pedas' | 'Sedang' | 'Pedas Pisah'>('Pedas Pisah');
  const [quantity, setQuantity] = useState(1);
  const [customNotes, setCustomNotes] = useState('');

  const currentPrice =
    item.altPrice && selectedTier === 'Premium'
      ? item.altPrice.price
      : item.price;

  const totalPrice = currentPrice * quantity;

  const handleAddAndClose = () => {
    onAddToCart(
      item,
      selectedTier,
      currentPrice,
      packaging,
      item.session === 'minuman' ? drinkOption : undefined,
      quantity,
      item.session !== 'minuman' ? spicyPreference : undefined,
      customNotes.trim() || undefined
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl text-stone-100 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-950/80 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors border border-stone-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Image if available */}
        {item.image && (
          <div className="relative aspect-video w-full overflow-hidden bg-stone-950">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              <span>{item.regionalOrigin || 'Nusantara'}</span>
              <span>·</span>
              <span>{item.session.toUpperCase()}</span>
            </div>
            <h2 className="text-2xl font-bold font-display text-white mt-1">
              {item.name}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 italic mt-1">
              "{item.tagline}"
            </p>
          </div>

          {/* Description */}
          <div className="text-sm text-stone-300 leading-relaxed bg-stone-950/40 p-4 rounded-2xl border border-stone-800/80">
            {item.description}
          </div>

          {/* Nutrition Formula */}
          <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-stone-200">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Heart className="w-4 h-4" />
                <span>Rasio Gizi Seimbang Dapur Le'Paron:</span>
              </span>
              <span className="font-mono text-stone-300">
                Karbo {item.nutrition.karbo}% · Protein {item.nutrition.protein}% · Sayur {item.nutrition.sayur}%
              </span>
            </div>
            <div className="h-2.5 w-full bg-stone-800 rounded-full overflow-hidden flex">
              <div className="bg-amber-400 h-full" style={{ width: `${item.nutrition.karbo}%` }} />
              <div className="bg-rose-400 h-full" style={{ width: `${item.nutrition.protein}%` }} />
              <div className="bg-emerald-400 h-full" style={{ width: `${item.nutrition.sayur}%` }} />
            </div>
            <div className="text-xs text-stone-400 leading-normal">
              {item.nutrition.note}
            </div>
          </div>

          {/* Bahan & Kondimen Lengkap */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-stone-300 uppercase tracking-wider">
              Komposisi &amp; Kondimen Lengkap:
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ing, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-stone-800/80 text-stone-200 text-xs border border-stone-700/60"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Saran Penyajian & Higienitas */}
          <div className="text-xs text-stone-400 bg-stone-800/30 p-3.5 rounded-xl border border-stone-800 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-200">Saran Santap: </strong>
              {item.servingAdvice}
            </div>
          </div>

          {/* Options: Tier choice if available */}
          {item.altPrice && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                Pilih Tipe Porsi:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedTier('Reguler')}
                  className={`p-3 rounded-xl border text-left transition-colors ${
                    selectedTier === 'Reguler'
                      ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                      : 'border-stone-800 bg-stone-950 text-stone-400'
                  }`}
                >
                  <div className="font-bold text-sm">Reguler</div>
                  <div className="font-mono text-xs">{formatRupiah(item.price)}</div>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTier('Premium')}
                  className={`p-3 rounded-xl border text-left transition-colors ${
                    selectedTier === 'Premium'
                      ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                      : 'border-stone-800 bg-stone-950 text-stone-400'
                  }`}
                >
                  <div className="font-bold text-sm">Premium (Porsi Ekstra)</div>
                  <div className="font-mono text-xs">{formatRupiah(item.altPrice.price)}</div>
                </button>
              </div>
            </div>
          )}

          {/* Packaging Option */}
          {item.session !== 'minuman' && item.tier !== 'Paket 5 Orang' && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-300 uppercase tracking-wider flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 text-amber-400" />
                <span>Pilih Jenis Kemasan Makanan:</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPackaging('Paper Bowl')}
                  className={`p-3 rounded-xl border text-left transition-colors ${
                    packaging === 'Paper Bowl'
                      ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                      : 'border-stone-800 bg-stone-950 text-stone-400'
                  }`}
                >
                  <div className="font-bold text-sm">Paper Bowl Praktis</div>
                  <div className="text-[11px] text-stone-400">Ringkas, food-grade, pas untuk makan cepat di jalan / kuah</div>
                </button>
                <button
                  type="button"
                  onClick={() => setPackaging('Box Lunch')}
                  className={`p-3 rounded-xl border text-left transition-colors ${
                    packaging === 'Box Lunch'
                      ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                      : 'border-stone-800 bg-stone-950 text-stone-400'
                  }`}
                >
                  <div className="font-bold text-sm">Box Lunch Sekat</div>
                  <div className="text-[11px] text-stone-400">Sekat higienis menjaga lauk, sambal &amp; nasi terpisah rapi</div>
                </button>
              </div>
            </div>
          )}

          {/* Drink Temp Options */}
          {item.session === 'minuman' && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                Suhu Teh Rempah:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDrinkOption('Dingin (Es)')}
                  className={`p-3 rounded-xl border text-center font-bold text-sm transition-colors ${
                    drinkOption === 'Dingin (Es)'
                      ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                      : 'border-stone-800 bg-stone-950 text-stone-400'
                  }`}
                >
                  Dingin Segar (Es Rempah)
                </button>
                <button
                  type="button"
                  onClick={() => setDrinkOption('Hangat')}
                  className={`p-3 rounded-xl border text-center font-bold text-sm transition-colors ${
                    drinkOption === 'Hangat'
                      ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                      : 'border-stone-800 bg-stone-950 text-stone-400'
                  }`}
                >
                  Hangat Menenangkan
                </button>
              </div>
            </div>
          )}

          {/* Sambal / Spicy Preference */}
          {item.session !== 'minuman' && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-300 uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>Pilihan Sambal &amp; Tingkat Pedas:</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Pedas Pisah', 'Sedang', 'Tidak Pedas'] as const).map((pref) => (
                  <button
                    key={pref}
                    type="button"
                    onClick={() => setSpicyPreference(pref)}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-colors ${
                      spicyPreference === pref
                        ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                        : 'border-stone-800 bg-stone-950 text-stone-400'
                    }`}
                  >
                    {pref}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Custom Notes */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-stone-300 uppercase tracking-wider">
              Catatan Khusus (Opsional):
            </label>
            <input
              type="text"
              placeholder="Contoh: Tanpa bawang goreng, kuah dipisah rapat, dll."
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              className="w-full px-4 py-2.5 text-xs bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
            />
          </div>

        </div>

        {/* Modal Footer with Quantity & Add to Cart */}
        <div className="p-4 sm:p-6 bg-stone-950 border-t border-stone-800 flex items-center justify-between gap-4">
          
          {/* Quantity Stepper */}
          <div className="flex items-center gap-3 bg-stone-900 border border-stone-800 rounded-2xl p-1">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-xl bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-300 hover:text-white"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-mono font-bold text-sm px-2 text-white">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-xl bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-300 hover:text-white"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddAndClose}
            className="flex-1 py-3 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 active:scale-98 text-stone-950 font-bold flex items-center justify-between text-sm transition-all shadow-lg shadow-amber-950/30"
          >
            <span>Tambahkan ke Pesanan</span>
            <span className="font-mono font-extrabold">{formatRupiah(totalPrice)}</span>
          </button>

        </div>

      </div>
    </div>
  );
};
