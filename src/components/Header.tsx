import React from 'react';
import { ShoppingBag, Sun, Moon, UtensilsCrossed } from 'lucide-react';
import { formatRupiah } from '../utils/orderUtils';

interface HeaderProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onNavigateSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  isDark,
  onToggleTheme,
  onNavigateSection,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-stone-900/90 dark:bg-stone-950/90 border-b border-stone-800 text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Icon */}
        <div 
          onClick={() => onNavigateSection('beranda')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-black border border-amber-500/40 flex items-center justify-center p-0.5">
            <img 
              src="/assets/aistudio/Le_Paron_Retro_Orange_Logo_066b3e07.png" 
              alt="Logo Dapur Le'Paron" 
              className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform"
            />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-amber-500 font-display">
              Le’Paron
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs text-stone-400 font-medium tracking-wide">
              DAPUR NUSANTARA
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
          <button
            onClick={() => onNavigateSection('menu-harian')}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Menu Harian
          </button>
          <button
            onClick={() => onNavigateSection('nutrisi')}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Standar Gizi
          </button>
          <button
            onClick={() => onNavigateSection('jumat-berkah')}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Jumat Berkah
          </button>
          <button
            onClick={() => onNavigateSection('kemasan')}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Kemasan Sehat
          </button>
          <button
            onClick={() => onNavigateSection('filosofi')}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Tentang Kami
          </button>
        </nav>

        {/* Zone 3: Actions & Shopping Cart */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Android App Button */}
          <button
            onClick={() => onNavigateSection('android-app')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold transition-colors"
            title="Pasang Aplikasi Android"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span>App Android</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="Ganti Tema Tampilan"
            className="p-2.5 rounded-lg text-stone-300 hover:text-amber-400 hover:bg-stone-800 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary Cart Action */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-amber-500 text-stone-950 hover:bg-amber-400 active:scale-95 transition-all shadow-md shadow-amber-950/20 whitespace-nowrap shrink-0"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-stone-950 text-amber-400 text-[10px] font-bold flex items-center justify-center border border-amber-400">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">Pesanan:</span>
            <span className="font-mono font-bold">
              {cartTotal > 0 ? formatRupiah(cartTotal) : 'Kosong'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
