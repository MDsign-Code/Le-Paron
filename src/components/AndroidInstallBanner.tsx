import React, { useState } from 'react';
import { Smartphone, Download, X, CheckCircle2, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const AndroidInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, isAndroid, isIOS, install } = usePWAInstall();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dismissed, setDismissed] = useState<boolean>(false);

  // If already installed or dismissed, hide the top teaser banner
  if (isInstalled || dismissed) return null;

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (!success) {
        setShowModal(true);
      }
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {/* Top Banner on Mobile & Desktop */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950/80 border-b border-emerald-500/30 text-stone-200 px-4 py-2.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          <div className="flex items-center gap-2.5 truncate">
            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Smartphone className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <span className="font-bold text-white">Aplikasi Android Le'Paron: </span>
              <span className="text-stone-300">
                Pasang di layar utama HP, hemat kuota &amp; ringan (&lt;2 MB).
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleInstallClick}
              className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-[11px] sm:text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isInstallable ? 'Instal Sekarang' : 'Pasang di Android'}</span>
            </button>

            <button
              onClick={() => setDismissed(true)}
              className="p-1 rounded-lg hover:bg-stone-800 text-stone-400 hover:text-stone-200 transition-colors"
              title="Tutup banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* Android Install Guide Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-stone-900 border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl text-stone-100 p-6 space-y-5">
            
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-white">
                  Pasang Aplikasi Android Le'Paron
                </h3>
                <div className="text-xs text-stone-400">
                  Resmi · Ringan &lt; 2MB · Mode Layar Penuh
                </div>
              </div>
            </div>

            {/* Android Instructions */}
            <div className="space-y-3 bg-stone-950/60 p-4 rounded-2xl border border-stone-800 text-xs">
              <div className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
                Panduan Pemasangan di HP Android (Chrome / Browser):
              </div>
              
              <ol className="space-y-2 text-stone-300 list-decimal list-inside leading-relaxed">
                <li>
                  Buka browser <strong>Google Chrome</strong> atau <strong>Samsung Internet</strong> di HP Anda.
                </li>
                <li>
                  Ketuk tombol menu <strong>titik tiga (⋮)</strong> di pojok kanan atas browser.
                </li>
                <li>
                  Pilih menu <strong>"Instal Aplikasi"</strong> atau <strong>"Tambahkan ke Layar Utama" (Add to Home screen)</strong>.
                </li>
                <li>
                  Tekan <strong>"Instal"</strong>. Ikon Dapur Le'Paron akan langsung muncul di menu HP Anda seperti aplikasi Play Store!
                </li>
              </ol>
            </div>

            {/* Keunggulan */}
            <div className="space-y-2 text-xs">
              <div className="font-bold text-stone-200">Keunggulan Aplikasi Android Le'Paron:</div>
              <div className="grid grid-cols-2 gap-2 text-stone-300 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Ukuran super hemat &lt;2MB</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Mendukung mode offline</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Layar penuh tanpa URL bar</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>WhatsApp order 1-klik</span>
                </div>
              </div>
            </div>

            {isInstallable && (
              <button
                onClick={async () => {
                  await install();
                  setShowModal(false);
                }}
                className="w-full py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
              >
                <Download className="w-4 h-4" />
                <span>Tekan untuk Pasang Sekarang</span>
              </button>
            )}

            <button
              onClick={() => setShowModal(false)}
              className="w-full py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold"
            >
              Tutup &amp; Lanjutkan Browsing
            </button>

          </div>
        </div>
      )}
    </>
  );
};
