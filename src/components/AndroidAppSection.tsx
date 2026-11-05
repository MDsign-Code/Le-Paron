import React, { useState } from 'react';
import { Smartphone, Download, Zap, WifiOff, ShieldCheck, ArrowRight, Share2, Check, ExternalLink } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const AndroidAppSection: React.FC = () => {
  const { isInstallable, isInstalled, install } = usePWAInstall();
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="android-app" className="py-16 bg-gradient-to-b from-stone-900 to-stone-950 border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-emerald-950/40 via-stone-900 to-stone-950 border border-emerald-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <Smartphone className="w-4 h-4" />
                <span>Format Aplikasi Mobile Android (WebAPK / PWA)</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display leading-tight">
                Menu Le’Paron Kini Hadir Sebagai Aplikasi Android
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Nikmati pengalaman memesan makanan khas Nusantara lebih praktis langsung dari layar utama HP Android Anda. Aplikasi ini berjalan dalam mode <strong>layar penuh (Standalone)</strong> tanpa bilah alamat browser, sangat ringan, dan hemat baterai.
              </p>

              {/* 4 Android Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-stone-900 border border-stone-800 text-center">
                  <Zap className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="font-bold text-white text-xs">&lt; 2 MB</div>
                  <div className="text-[10px] text-stone-400">Ringan di HP</div>
                </div>

                <div className="p-3 rounded-2xl bg-stone-900 border border-stone-800 text-center">
                  <WifiOff className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                  <div className="font-bold text-white text-xs">Offline Ready</div>
                  <div className="text-[10px] text-stone-400">Cache Otomatis</div>
                </div>

                <div className="p-3 rounded-2xl bg-stone-900 border border-stone-800 text-center">
                  <ShieldCheck className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <div className="font-bold text-white text-xs">WebAPK Resmi</div>
                  <div className="text-[10px] text-stone-400">Keamanan Terjamin</div>
                </div>

                <div className="p-3 rounded-2xl bg-stone-900 border border-stone-800 text-center">
                  <Smartphone className="w-5 h-5 text-rose-400 mx-auto mb-1" />
                  <div className="font-bold text-white text-xs">Full Screen</div>
                  <div className="text-[10px] text-stone-400">Tanpa URL Bar</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {isInstallable ? (
                  <button
                    onClick={install}
                    className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-950/40 active:scale-95 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Pasang di HP Android Sekarang</span>
                  </button>
                ) : (
                  <button
                    onClick={handleCopyLink}
                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 active:scale-95 transition-all"
                  >
                    {copiedLink ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                    <span>{copiedLink ? 'Link Tersalin!' : 'Buka / Bagikan Link di HP'}</span>
                  </button>
                )}

                <a
                  href="/manifest.webmanifest"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                  <span>Lihat Manifest Android</span>
                </a>
              </div>

            </div>

            {/* Right Column: Phone Mockup Simulation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-[440px] rounded-[40px] border-4 border-stone-700 bg-stone-950 p-2 shadow-2xl shadow-emerald-950/40 flex flex-col justify-between overflow-hidden">
                
                {/* Phone Notch / Camera Hole */}
                <div className="w-16 h-3.5 bg-stone-800 rounded-full mx-auto my-1" />

                {/* Simulated Screen Content */}
                <div className="flex-1 rounded-[28px] bg-stone-900 border border-stone-800/80 p-3 flex flex-col justify-between overflow-hidden relative">
                  
                  {/* Top Bar inside mockup */}
                  <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-md overflow-hidden bg-black flex items-center justify-center">
                        <img src="/assets/aistudio/Le_Paron_Retro_Orange_Logo_066b3e07.png" alt="Logo" className="w-full h-full object-contain" />
                      </div>
                      <span className="text-xs font-bold text-amber-500 font-display">Le'Paron</span>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                      Android App
                    </span>
                  </div>

                  {/* Body preview */}
                  <div className="py-4 space-y-2.5 text-left">
                    <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                      Menu Hari Ini
                    </div>
                    <div className="p-2 rounded-xl bg-stone-950 border border-stone-800 text-[10px] space-y-1">
                      <div className="font-bold text-white">Nasi Uduk Betawi</div>
                      <div className="text-stone-400 text-[9px]">Paper Bowl · Reguler 20K</div>
                    </div>
                    <div className="p-2 rounded-xl bg-stone-950 border border-stone-800 text-[10px] space-y-1">
                      <div className="font-bold text-white">Nasi Pecel Madiun + Empal</div>
                      <div className="text-stone-400 text-[9px]">Box Lunch · 20K / 25K</div>
                    </div>
                  </div>

                  {/* Bottom nav inside mockup */}
                  <div className="pt-2 border-t border-stone-800 flex justify-around text-[9px] text-stone-400">
                    <span className="text-amber-400 font-bold">Menu</span>
                    <span>Gizi</span>
                    <span>Berkah</span>
                    <span>Order</span>
                  </div>

                </div>

                {/* Home Indicator */}
                <div className="w-20 h-1 bg-stone-700 rounded-full mx-auto my-1.5" />

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
