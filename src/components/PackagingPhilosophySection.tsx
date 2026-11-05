import React from 'react';
import { Package, ShieldCheck, Flame, Droplets, Sparkles, CheckCircle2 } from 'lucide-react';

export const PackagingPhilosophySection: React.FC = () => {
  return (
    <section id="kemasan" className="py-16 bg-stone-900 border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Package className="w-3.5 h-3.5" />
            <span>Higienitas &amp; Praktis Tanpa Ribet</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Kemasan Sehat: Paper Bowl &amp; Box Lunch Food Grade
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            "Harga Kaki Lima, Penyajian Bintang Lima". Kami tidak menggunakan kantong plastik tipis yang berbahaya bagi kesehatan. Semua hidangan disajikan dalam wadah tersertifikasi food-grade yang ramah lingkungan.
          </p>
        </div>

        {/* 2 Main Packaging Types Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Paper Bowl */}
          <div className="rounded-3xl bg-stone-950/70 border border-stone-800 p-6 sm:p-8 space-y-6 hover:border-amber-500/40 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20">
                  Tipe 01
                </span>
                <span className="text-xs text-stone-400 font-mono">Anti-Bocor &amp; Praktis</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Eco Paper Bowl Praktis
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">
                  Pilihan sempurna bagi komuter cepat, sarapan di meja kantor, atau hidangan sup berkuah kaldu panas (SOP Iga, SOP Konro, Coto Makassar, Rawon).
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-3 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Lapisan Bio-Coating:</strong> Menahan kuah mendidih dan minyak tanpa meleleh atau mengubah rasa.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Tutup Kunci Presisi (Snap-Lock):</strong> Aman dibawa dengan sepeda motor atau tas tanpa risiko tumpah.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Ergonomis:</strong> Pas digenggam satu tangan, siap disantap langsung tanpa perlu piring tambahan.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-xs text-stone-400 flex items-center justify-between">
              <span>Cocok untuk: Sarapan Cepat &amp; Menu Berkuah</span>
              <span className="text-amber-400 font-bold font-mono">GRATIS</span>
            </div>
          </div>

          {/* Card 2: Box Lunch */}
          <div className="rounded-3xl bg-stone-950/70 border border-stone-800 p-6 sm:p-8 space-y-6 hover:border-amber-500/40 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                  Tipe 02
                </span>
                <span className="text-xs text-stone-400 font-mono">Sekat Higienis</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Partitioned Lunch Box
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">
                  Kotak sekat bersegel rapi yang menjaga kehangatan nasi pulen, kesegaran lalapan sayur rebus, serta kegaringan peyek dan kerupuk.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-3 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Sekat Terpisah Rapi:</strong> Nasi, empal/rendang, sayur, dan lalapan tidak saling bercampur sebelum disantap.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Bumbu Siram Terpisah:</strong> Bumbu pecel sangrai atau areh santan dikemas dalam cup siram higienis.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Presentasi Elegan:</strong> Ideal untuk makan siang kantor, rapat divisi, catering harian, dan arisan.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-xs text-stone-400 flex items-center justify-between">
              <span>Cocok untuk: Makan Siang Kantor &amp; Nasi Sekat</span>
              <span className="text-emerald-400 font-bold font-mono">GRATIS</span>
            </div>
          </div>

        </div>

        {/* Bumbu & Sambal Siram Terpisah Highlight Strip */}
        <div className="mt-8 p-6 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-white">Standar Bumbu &amp; Sambal Siram Terpisah</div>
              <div className="text-xs text-stone-400">
                Sambal tauco, sambal matah, sambal ijo, dan bumbu kacang selalu dipisah agar Anda bebas mengatur tingkat pedas dan makanan tetap tahan lama.
              </div>
            </div>
          </div>
          <div className="text-xs text-amber-400 font-semibold px-4 py-2 rounded-xl bg-stone-900 border border-stone-800 shrink-0">
            Higienis &amp; Ramah Lambung
          </div>
        </div>

      </div>
    </section>
  );
};
