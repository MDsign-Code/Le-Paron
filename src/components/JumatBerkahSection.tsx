import React, { useState } from 'react';
import { HeartHandshake, Sparkles, Gift, Users, ArrowRight } from 'lucide-react';
import { formatRupiah } from '../utils/orderUtils';

interface JumatBerkahSectionProps {
  onSelectJumat: () => void;
}

export const JumatBerkahSection: React.FC<JumatBerkahSectionProps> = ({ onSelectJumat }) => {
  const [portionSim, setPortionSim] = useState(10);
  const cashbackPerPortion = 500;
  const simulatedCashback = portionSim * cashbackPerPortion;
  const freePortionEquivalent = Math.floor(simulatedCashback / 20000);

  return (
    <section id="jumat-berkah" className="py-16 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-r from-emerald-950/40 via-stone-900 to-amber-950/40 border border-emerald-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle light accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Program Sosial Komunitas Le’Paron</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                Jumat Berkah: Berbagi Kebaikan Melalui Rasa
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                Di Dapur Le’Paron, setiap Jumat bukan sekadar menyajikan <strong>Nasi Liwet Solo Komplit (20K)</strong>. Melalui sistem <em>Cashback Rp500/porsi</em>, terkumpul dana hingga <strong>Rp250.000/hari</strong> yang langsung dialokasikan untuk menyediakan 12–15 porsi makan gratis berkualitas bagi saudara-saudara kita yang membutuhkan: driver ojek online, petugas kebersihan, dan kaum dhuafa.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-stone-900/80 border border-stone-800">
                  <div className="text-emerald-400 font-bold font-mono text-base sm:text-lg">Rp500 / porsi</div>
                  <div className="text-[11px] text-stone-400">Cashback sedekah otomatis</div>
                </div>
                <div className="p-3 rounded-2xl bg-stone-900/80 border border-stone-800">
                  <div className="text-amber-400 font-bold font-mono text-base sm:text-lg">Rp250.000 / hari</div>
                  <div className="text-[11px] text-stone-400">Target donasi tiap Jumat</div>
                </div>
                <div className="p-3 rounded-2xl bg-stone-900/80 border border-stone-800">
                  <div className="text-white font-bold font-mono text-base sm:text-lg">100% Amanah</div>
                  <div className="text-[11px] text-stone-400">Penyajian higienis setara</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onSelectJumat}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 active:scale-95 transition-all shadow-lg shadow-emerald-950/40"
                >
                  <Gift className="w-4 h-4" />
                  <span>Lihat Menu Nasi Liwet Jumat Berkah</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Simulator Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-stone-900/90 border border-stone-800 shadow-xl space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Simulasi Kontribusi Pesanan Anda</span>
                  </span>
                  <span className="text-xs text-emerald-400 font-mono font-bold">
                    {portionSim} Porsi
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-stone-400">
                    <span>Geser Jumlah Porsi Pesanan:</span>
                    <span className="font-mono text-white font-bold">{portionSim} Box</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={portionSim}
                    onChange={(e) => setPortionSim(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer h-2 bg-stone-800 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                    <span>1 porsi</span>
                    <span>50 porsi</span>
                    <span>100 porsi</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800/80 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-400">Total Cashback Sedekah:</span>
                    <span className="font-mono font-bold text-emerald-400 text-base">
                      {formatRupiah(simulatedCashback)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs pt-2 border-t border-stone-800">
                    <span className="text-stone-400 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-amber-400" />
                      <span>Setara Porsi Gratis Bagi Dhuafa:</span>
                    </span>
                    <span className="font-bold text-white font-mono">
                      {freePortionEquivalent > 0 ? `${freePortionEquivalent} Porsi Lengkap` : 'Bantu Kumpulkan Porsi'}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-stone-400 italic text-center">
                  *Dana cashback disalurkan langsung oleh tim Dapur Le’Paron setiap ba'da Sholat Jumat di sekitar area outlet.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
