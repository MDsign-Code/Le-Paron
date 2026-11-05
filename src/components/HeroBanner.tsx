import React from 'react';
import { Sparkles, Utensils, HeartHandshake, ShieldCheck, Flame, ArrowRight } from 'lucide-react';
import { formatRupiah } from '../utils/orderUtils';
import { getAssetUrl } from '../utils/assetHelper';

interface HeroBannerProps {
  onSelectDay: (dayId: string) => void;
  onExplorePack: () => void;
  todayName: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onSelectDay,
  onExplorePack,
  todayName,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 text-stone-100 border-b border-stone-800">
      {/* Subtle warm spice ambiance glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Statement & Offerings */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* National Pride Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dapur Le’Paroan Nusantara</span>
            </div>

            {/* Core Manifesto Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
                Sekarang Saatnya <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                  Budaya Tradisional Indonesia
                </span> <br />
                Membuktikan Pada Dunia
              </h1>
              <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
                Rasa otentik resep leluhur dengan <strong>Harga Kaki Lima</strong>, higienitas &amp; penyajian <strong>Bintang Lima</strong>. Dikemas higienis dengan <em>Paper Bowl</em> dan <em>Box Lunch</em> ramah lingkungan, serta panduan nutrisi gizi seimbang di setiap jam makan.
              </p>
            </div>

            {/* 3 Pillars Key Matrix */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800/80 backdrop-blur-sm">
                <div className="text-xs text-amber-400 font-medium">Menu Harian</div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white mt-0.5">20K – 30K</div>
                <div className="text-[11px] text-stone-400 mt-1">18 menu beda Senin–Sabtu</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800/80 backdrop-blur-sm">
                <div className="text-xs text-amber-400 font-medium">Paket 5 Orang</div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white mt-0.5">20K / org</div>
                <div className="text-[11px] text-stone-400 mt-1">Spesial Minggu Rame-Rame</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800/80 backdrop-blur-sm">
                <div className="text-xs text-amber-400 font-medium">Teh Rempah</div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white mt-0.5">5K / cup</div>
                <div className="text-[11px] text-stone-400 mt-1">Varian Serai &amp; Pokak</div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onSelectDay('today')}
                className="px-6 py-3 rounded-xl bg-amber-500 text-stone-950 font-bold hover:bg-amber-400 active:scale-95 transition-all shadow-lg shadow-amber-950/30 flex items-center gap-2 text-sm sm:text-base"
              >
                <span>Lihat Menu Hari Ini ({todayName})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExplorePack}
                className="px-5 py-3 rounded-xl bg-stone-800/90 hover:bg-stone-800 border border-stone-700 text-stone-200 font-semibold transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <Utensils className="w-4 h-4 text-amber-400" />
                <span>Paket Spesial Minggu (5 Orang)</span>
              </button>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Paper Bowl &amp; Box Lunch Food Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Jumat Berkah Cashback Rp500/Porsi</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Bumbu &amp; Sambal Siram Terpisah</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Featuring Official Le'Paron Emblem */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-amber-500/40 bg-black shadow-2xl shadow-stone-950/90 group">
              <div className="aspect-square w-full overflow-hidden bg-black flex items-center justify-center p-6 relative">
                <img
                  src={getAssetUrl('assets/aistudio/Le_Paron_Retro_Orange_Logo_066b3e07.png')}
                  alt="Logo Resmi Le'Paron - Budaya Tradisional Indonesia"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stone-950/90 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-4 right-4 text-left">
                  <div className="text-[11px] font-semibold tracking-wider text-amber-400 uppercase">
                    Otentisitas Tradisi Nusantara
                  </div>
                  <div className="text-sm font-bold text-white">
                    Dapur Le’Paroan: Kemasan Praktis, Higienis &amp; Sehat
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar inside badge */}
              <div className="p-4 bg-stone-900/90 border-t border-stone-800 text-xs text-stone-300 flex items-center justify-between">
                <div>
                  <span className="text-amber-400 font-bold">Prinsip Kami: </span>
                  Kaki Lima di Harga, Bintang Lima di Rasa
                </div>
                <div className="font-mono text-stone-400 text-[11px]">
                  Halal &amp; Alami
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
