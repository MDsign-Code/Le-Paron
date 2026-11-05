import React from 'react';
import { Phone, Clock, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';

export const Footer: React.FC = () => {
  return (
    <footer id="filosofi" className="bg-stone-950 text-stone-300 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-black border border-amber-500/40 p-0.5 flex items-center justify-center">
                <img
                  src={getAssetUrl('assets/aistudio/Le_Paron_Retro_Orange_Logo_066b3e07.png')}
                  alt="Logo Le'Paron"
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <span className="text-lg font-bold text-amber-500 font-display">
                Le’Paron
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed">
              Dapur Le’Paroan: Harga Kaki Lima, Penyajian Bintang Lima. Kemasan praktis, sehat, dan higienis Paper Bowl &amp; Box Lunch.
            </p>
            <div className="text-[11px] text-amber-400/90 font-medium italic">
              "Sekarang Saatnya Budaya Tradisional Indonesia Membuktikan Pada Dunia"
            </div>
          </div>

          {/* Col 2: Jam Operasional & Sesi */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-stone-100 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Jadwal Buka &amp; Sesi Makan</span>
            </h4>
            <ul className="space-y-1.5 text-stone-400 text-xs">
              <li><strong>Sarapan:</strong> 06.00 – 10.00 WIB (Komuter Cepat)</li>
              <li><strong>Makan Siang:</strong> 11.30 – 14.30 WIB (Pekerja &amp; Kantor)</li>
              <li><strong>Santap Malam:</strong> 17.30 – 21.00 WIB (Ringan Berkuah)</li>
              <li className="pt-1 text-amber-400 font-medium">Buka Setiap Hari: Senin – Minggu</li>
            </ul>
          </div>

          {/* Col 3: Layanan & Pemesanan */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-stone-100 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Area Layanan &amp; Hotline</span>
            </h4>
            <ul className="space-y-1.5 text-stone-400 text-xs">
              <li>Wilayah: Bintaro, Tangerang Selatan &amp; Sekitarnya</li>
              <li>Layanan: Takeaway, GrabExpress, Gosend &amp; Catering Kantor</li>
              <li className="flex items-center gap-1.5 pt-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: 0812-8900-1818</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Jaminan Higienitas & Sosial */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-stone-100 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Komitmen Kualitas</span>
            </h4>
            <p className="text-stone-400 leading-relaxed">
              100% Halal, tanpa bahan pengawet kimia berbahaya. Mengutamakan rempah asli Indonesia dengan standar gizi seimbang.
            </p>
            <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-emerald-400">
              🌟 Termasuk Program Jumat Berkah Cashback Rp500/Porsi untuk sedekah makan gratis.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Dapur Le’Paron Nusantara. Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Dibuat dengan cinta untuk kuliner Nusantara</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
