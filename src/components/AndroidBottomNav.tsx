import React from 'react';
import { Home, Utensils, Heart, Gift, ShoppingBag } from 'lucide-react';
import { formatRupiah } from '../utils/orderUtils';

interface AndroidBottomNavProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
}

export const AndroidBottomNav: React.FC<AndroidBottomNavProps> = ({
  activeTab,
  onSelectTab,
  cartCount,
  cartTotal,
  onOpenCart,
}) => {
  const triggerHaptic = () => {
    try {
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(12);
      }
    } catch {
      // ignore
    }
  };

  const handleNav = (tabId: string) => {
    triggerHaptic();
    onSelectTab(tabId);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-lg border-t border-stone-800 text-stone-400 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_24px_rgba(0,0,0,0.6)]">
      <div className="grid grid-cols-5 items-center px-1">
        
        {/* 1. Beranda */}
        <button
          onClick={() => handleNav('beranda')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activeTab === 'beranda' ? 'text-amber-400 font-bold' : 'hover:text-stone-200'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-1">Beranda</span>
        </button>

        {/* 2. Menu */}
        <button
          onClick={() => handleNav('menu-harian')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activeTab === 'menu-harian' ? 'text-amber-400 font-bold' : 'hover:text-stone-200'
          }`}
        >
          <Utensils className="w-5 h-5" />
          <span className="text-[10px] mt-1">Menu</span>
        </button>

        {/* 3. Nutrisi */}
        <button
          onClick={() => handleNav('nutrisi')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activeTab === 'nutrisi' ? 'text-amber-400 font-bold' : 'hover:text-stone-200'
          }`}
        >
          <Heart className="w-5 h-5" />
          <span className="text-[10px] mt-1">Gizi</span>
        </button>

        {/* 4. Berkah */}
        <button
          onClick={() => handleNav('jumat-berkah')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activeTab === 'jumat-berkah' ? 'text-emerald-400 font-bold' : 'hover:text-stone-200'
          }`}
        >
          <Gift className="w-5 h-5" />
          <span className="text-[10px] mt-1">Berkah</span>
        </button>

        {/* 5. Keranjang Pesanan */}
        <button
          onClick={() => {
            triggerHaptic();
            onOpenCart();
          }}
          className="relative flex flex-col items-center justify-center py-1 text-amber-500 hover:text-amber-400"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 px-1 py-0.2 min-w-[16px] h-4 rounded-full bg-amber-500 text-stone-950 text-[9px] font-extrabold flex items-center justify-center font-mono">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-1 font-bold">Pesanan</span>
        </button>

      </div>
    </nav>
  );
};
