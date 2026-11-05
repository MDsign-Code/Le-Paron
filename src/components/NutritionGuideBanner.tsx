import React from 'react';
import { Sunrise, SunMedium, Moon, Sparkles, CheckCircle2 } from 'lucide-react';

export const NutritionGuideBanner: React.FC = () => {
  return (
    <section id="nutrisi" className="py-12 bg-stone-900/50 dark:bg-stone-950/50 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kesehatan &amp; Produktivitas Tubuh</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Formula Komposisi Gizi Terukur Le’Paron
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            Makan enak tidak harus bikin ngantuk atau begah. Setiap sesi dirancang dengan rasio makronutrisi spesifik sesuai ritme sirkadian tubuh harian Anda.
          </p>
        </div>

        {/* 3 Meal Time Nutrition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Sarapan (Pagi) */}
          <div className="rounded-2xl bg-stone-900 border border-stone-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <Sunrise className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Sarapan Pagi</h3>
                    <div className="text-xs text-stone-400">06.00 – 10.00 WIB</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                  Reguler 20K
                </span>
              </div>

              {/* Nutrition Split Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-stone-300">
                  <span>Rasio Gizi</span>
                  <span className="font-mono text-amber-400">60 : 20 : 20</span>
                </div>
                <div className="h-3 w-full bg-stone-800 rounded-full overflow-hidden flex">
                  <div className="bg-amber-400 h-full" style={{ width: '60%' }} title="Karbohidrat 60%" />
                  <div className="bg-rose-400 h-full" style={{ width: '20%' }} title="Protein 20%" />
                  <div className="bg-emerald-400 h-full" style={{ width: '20%' }} title="Sayur & Serat 20%" />
                </div>
                <div className="flex justify-between text-[11px] text-stone-400 font-mono pt-1">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> Karbo 60%</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-400 inline-block" /> Prot 20%</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> Sayur 20%</span>
                </div>
              </div>

              <div className="text-xs text-stone-300 leading-relaxed bg-stone-800/40 p-3 rounded-xl border border-stone-800">
                <strong>Prinsip:</strong> Tidak pedas, tidak berminyak berlebih, ramah lambung kosong. Memberikan pasokan glukosa stabil untuk komuter cepat dan fokus kerja awal pekan.
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center gap-2 text-xs text-stone-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Kemasan: Paper Bowl praktis on-the-go</span>
            </div>
          </div>

          {/* 2. Makan Siang */}
          <div className="rounded-2xl bg-stone-900 border border-amber-500/30 p-6 flex flex-col justify-between relative shadow-lg shadow-amber-950/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                    <SunMedium className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Makan Siang</h3>
                    <div className="text-xs text-stone-400">11.30 – 14.30 WIB</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">
                  20K / 25K
                </span>
              </div>

              {/* Nutrition Split Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-stone-300">
                  <span>Rasio Gizi</span>
                  <span className="font-mono text-orange-400">50 : 30 : 20</span>
                </div>
                <div className="h-3 w-full bg-stone-800 rounded-full overflow-hidden flex">
                  <div className="bg-amber-400 h-full" style={{ width: '50%' }} title="Karbohidrat 50%" />
                  <div className="bg-rose-400 h-full" style={{ width: '30%' }} title="Protein 30%" />
                  <div className="bg-emerald-400 h-full" style={{ width: '20%' }} title="Sayur & Serat 20%" />
                </div>
                <div className="flex justify-between text-[11px] text-stone-400 font-mono pt-1">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> Karbo 50%</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-400 inline-block" /> Prot 30%</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> Sayur 20%</span>
                </div>
              </div>

              <div className="text-xs text-stone-300 leading-relaxed bg-stone-800/40 p-3 rounded-xl border border-stone-800">
                <strong>Prinsip:</strong> Berat dan kenyang maksimal. Asam amino protein tinggi (empal, coto, rendang) untuk ketahanan fokus sore. Sambal &amp; bumbu kacang/areh disajikan siram terpisah.
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center gap-2 text-xs text-stone-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Kemasan: Box Lunch sekat higienis &amp; rapi</span>
            </div>
          </div>

          {/* 3. Makan Malam */}
          <div className="rounded-2xl bg-stone-900 border border-stone-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <Moon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Santap Malam</h3>
                    <div className="text-xs text-stone-400">17.30 – 21.00 WIB</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                  20K – 28K
                </span>
              </div>

              {/* Nutrition Split Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-stone-300">
                  <span>Rasio Gizi</span>
                  <span className="font-mono text-indigo-400">40 : 30 : 30</span>
                </div>
                <div className="h-3 w-full bg-stone-800 rounded-full overflow-hidden flex">
                  <div className="bg-amber-400 h-full" style={{ width: '40%' }} title="Karbohidrat 40%" />
                  <div className="bg-rose-400 h-full" style={{ width: '30%' }} title="Protein 30%" />
                  <div className="bg-emerald-400 h-full" style={{ width: '30%' }} title="Sayur & Serat 30%" />
                </div>
                <div className="flex justify-between text-[11px] text-stone-400 font-mono pt-1">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> Karbo 40%</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-400 inline-block" /> Prot 30%</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> Sayur 30%</span>
                </div>
              </div>

              <div className="text-xs text-stone-300 leading-relaxed bg-stone-800/40 p-3 rounded-xl border border-stone-800">
                <strong>Prinsip:</strong> Karbohidrat terukur, tinggi serat dan protein berkuah hangat (Sop Iga, Konro, Rawon, Ketoprak). Menghangatkan badan tanpa beban cerna berat sebelum istirahat.
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center gap-2 text-xs text-stone-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Kemasan: Paper Bowl tahan panas + kantong kuah</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
