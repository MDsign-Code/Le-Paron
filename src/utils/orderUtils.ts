import { MenuItem, PackagingOption } from '../data/menuData';

export interface CartItem {
  id: string; // unique cart entry id
  menuItem: MenuItem;
  selectedTier: 'Reguler' | 'Premium';
  unitPrice: number;
  quantity: number;
  packaging: PackagingOption;
  drinkOption?: 'Dingin (Es)' | 'Hangat';
  spicyPreference?: 'Tidak Pedas' | 'Sedang' | 'Pedas Pisah';
  customNotes?: string;
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount).replace('IDR', 'Rp');
}

export function generateWhatsAppMessage(
  items: CartItem[],
  customerInfo: {
    name: string;
    phone: string;
    deliveryType: 'pickup' | 'delivery';
    address?: string;
    deliveryTime?: string;
    daySelected: string;
    notes?: string;
  }
): string {
  const total = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const jumatBerkahDonation = items.reduce((sum, item) => {
    return sum + (item.menuItem.isJumatBerkah ? 500 * item.quantity : 0);
  }, 0);

  let message = `*HALO DAPUR LE'PARON - PESANAN MENU DIGITAL*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *Nama Pemesan:* ${customerInfo.name || '-'}\n`;
  message += `📱 *No. Telepon / WA:* ${customerInfo.phone || '-'}\n`;
  message += `📅 *Hari Menu:* ${customerInfo.daySelected}\n`;
  message += `🛵 *Metode:* ${customerInfo.deliveryType === 'delivery' ? 'Antar / Delivery' : 'Ambil Sendiri (Takeaway)'}\n`;
  if (customerInfo.deliveryType === 'delivery' && customerInfo.address) {
    message += `📍 *Alamat Pengiriman:* ${customerInfo.address}\n`;
  }
  if (customerInfo.deliveryTime) {
    message += `⏰ *Waktu Penyajian/Kirim:* ${customerInfo.deliveryTime}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*RINCIAN PESANAN:*\n`;

  items.forEach((item, index) => {
    const tierLabel = item.menuItem.session === 'minuman' ? '' : ` (${item.selectedTier})`;
    message += `${index + 1}. *${item.menuItem.name}*${tierLabel}\n`;
    message += `   • Jumlah: ${item.quantity} porsi x ${formatRupiah(item.unitPrice)}\n`;
    message += `   • Wadah: ${item.packaging}\n`;
    if (item.drinkOption) {
      message += `   • Sajian: ${item.drinkOption}\n`;
    }
    if (item.spicyPreference) {
      message += `   • Sambal: ${item.spicyPreference}\n`;
    }
    if (item.customNotes) {
      message += `   • Catatan: ${item.customNotes}\n`;
    }
    message += `   • Subtotal: ${formatRupiah(item.unitPrice * item.quantity)}\n\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *TOTAL TAGIHAN:* *${formatRupiah(total)}*\n`;
  if (jumatBerkahDonation > 0) {
    message += `🌟 *Cashback Jumat Berkah:* ${formatRupiah(jumatBerkahDonation)} dialokasikan untuk sedekah makan gratis!\n`;
  }
  if (customerInfo.notes) {
    message += `📝 *Catatan Tambahan:* ${customerInfo.notes}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `_Mohon konfirmasi ketersediaan porsi dan total ongkir (jika diantar). Terima kasih!_ 🙏\n`;
  message += `_Dapur Le'Paron: Rasa Bintang Lima, Harga Kaki Lima_`;

  return message;
}
