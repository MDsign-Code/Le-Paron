import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { NutritionGuideBanner } from './components/NutritionGuideBanner';
import { DaySelector } from './components/DaySelector';
import { MenuCard } from './components/MenuCard';
import { ItemDetailModal } from './components/ItemDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { JumatBerkahSection } from './components/JumatBerkahSection';
import { PackagingPhilosophySection } from './components/PackagingPhilosophySection';
import { AndroidAppSection } from './components/AndroidAppSection';
import { AndroidInstallBanner } from './components/AndroidInstallBanner';
import { AndroidBottomNav } from './components/AndroidBottomNav';
import { OfflineIndicator } from './components/OfflineIndicator';
import { Footer } from './components/Footer';
import {
  DayId,
  DAYS_CONFIG,
  MealSession,
  MenuItem,
  MENU_ITEMS,
  PackagingOption,
} from './data/menuData';
import { CartItem } from './utils/orderUtils';
import { Sparkles, AlertCircle } from 'lucide-react';

export default function App() {
  // 1. Detect Real-Time Day of Week (0: Minggu, 1: Senin, ..., 6: Sabtu)
  const currentDayIndex = new Date().getDay();
  const dayIndexMap: DayId[] = [
    'minggu',
    'senin',
    'selasa',
    'rabu',
    'kamis',
    'jumat',
    'sabtu',
  ];
  const todayDayId: DayId = dayIndexMap[currentDayIndex] || 'senin';

  // 2. Navigation & Filter States
  const [selectedDay, setSelectedDay] = useState<DayId>(todayDayId);
  const [viewAllDays, setViewAllDays] = useState<boolean>(false);
  const [selectedSession, setSelectedSession] = useState<MealSession | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeMobileTab, setActiveMobileTab] = useState<string>('beranda');

  // 3. Modal & Drawer States
  const [detailItem, setDetailItem] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // 4. Cart State (with localStorage persistence)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('leparon_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('leparon_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // 5. Theme State (default dark to honor the official Le'Paron dark logo asset)
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // 6. Cart Handlers
  const handleAddToCart = (
    item: MenuItem,
    tier: 'Reguler' | 'Premium',
    unitPrice: number,
    packaging: PackagingOption,
    drinkOption?: 'Dingin (Es)' | 'Hangat',
    quantity: number = 1,
    spicyPreference?: 'Tidak Pedas' | 'Sedang' | 'Pedas Pisah',
    customNotes?: string
  ) => {
    setCartItems((prevItems) => {
      const uniqueId = `${item.id}-${tier}-${packaging}-${drinkOption || ''}-${spicyPreference || ''}`;
      const existingIndex = prevItems.findIndex((it) => it.id === uniqueId);

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        if (customNotes) {
          updated[existingIndex].customNotes = customNotes;
        }
        return updated;
      } else {
        const newItem: CartItem = {
          id: uniqueId,
          menuItem: item,
          selectedTier: tier,
          unitPrice,
          quantity,
          packaging,
          drinkOption,
          spicyPreference,
          customNotes,
        };
        return [...prevItems, newItem];
      }
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((it) => it.id !== id));
  };

  const handleUpdatePackaging = (id: string, packaging: PackagingOption) => {
    setCartItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, packaging } : it))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // 7. Filtered Menu Items
  const filteredMenuItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (!viewAllDays) {
        if (item.day !== 'all' && item.day !== selectedDay) {
          return false;
        }
      }

      if (selectedSession !== 'all' && item.session !== selectedSession) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesTagline = item.tagline.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesOrigin = item.regionalOrigin?.toLowerCase().includes(q) || false;
        const matchesIng = item.ingredients.some((ing) => ing.toLowerCase().includes(q));

        if (!matchesName && !matchesTagline && !matchesDesc && !matchesOrigin && !matchesIng) {
          return false;
        }
      }

      return true;
    });
  }, [selectedDay, viewAllDays, selectedSession, searchQuery]);

  // 8. Navigation handler
  const handleNavigateSection = (sectionId: string) => {
    setActiveMobileTab(sectionId);
    if (sectionId === 'beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentDayConfig = DAYS_CONFIG.find((d) => d.id === selectedDay);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans transition-colors duration-200 pb-20 md:pb-0">
      
      {/* 0. Android PWA Install Top Notification */}
      <AndroidInstallBanner />

      {/* 1. Header (Sticky Top Bar) */}
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onNavigateSection={handleNavigateSection}
      />

      {/* 2. Hero Section */}
      <div id="beranda">
        <HeroBanner
          onSelectDay={() => {
            setSelectedDay(todayDayId);
            setViewAllDays(false);
            handleNavigateSection('menu-harian');
          }}
          onExplorePack={() => {
            setSelectedDay('minggu');
            setViewAllDays(false);
            setSelectedSession('spesial');
            handleNavigateSection('menu-harian');
          }}
          todayName={DAYS_CONFIG.find((d) => d.id === todayDayId)?.name || 'Hari Ini'}
        />
      </div>

      {/* 3. Nutrition Standards Scientific Guide */}
      <NutritionGuideBanner />

      {/* 4. Main Menu Section */}
      <main id="menu-harian" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Daftar Menu Harian Dapur Le’Paron</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mt-1">
              {viewAllDays
                ? 'Semua 18 Menu Pekanan (Senin – Minggu)'
                : `Menu ${currentDayConfig?.name} (${currentDayConfig?.label})`}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
              Harga Reguler 20K · Harga Premium 23K–28K · Paket 5 Orang 100K–125K · Teh Rempah 5K.
            </p>
          </div>

          <div className="text-xs text-stone-400 font-mono">
            Menampilkan: <span className="font-bold text-amber-400">{filteredMenuItems.length}</span> menu
          </div>
        </div>

        {/* Day Selector, Search Bar & Session Tabs */}
        <DaySelector
          selectedDay={selectedDay}
          onSelectDay={(day) => {
            setSelectedDay(day);
            setViewAllDays(false);
          }}
          todayDayId={todayDayId}
          viewAllDays={viewAllDays}
          onToggleViewAllDays={setViewAllDays}
          selectedSession={selectedSession}
          onSelectSession={setSelectedSession}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Menu Grid */}
        {filteredMenuItems.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-stone-900/50 rounded-3xl border border-stone-800 p-8">
            <div className="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center mx-auto text-amber-400">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Menu Tidak Ditemukan</h3>
            <p className="text-xs text-stone-400 max-w-sm mx-auto">
              Tidak ada menu yang cocok dengan kata kunci "{searchQuery}" pada filter sesi ini. Coba hapus kata kunci atau pilih sesi "Semua Sesi".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSession('all');
              }}
              className="px-4 py-2 rounded-xl bg-stone-800 text-stone-200 text-xs font-semibold hover:bg-stone-700"
            >
              Reset Filter Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredMenuItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onAddToCart={(it, tier, price, pkg, drink) =>
                  handleAddToCart(it, tier, price, pkg, drink)
                }
                onOpenDetail={(it) => setDetailItem(it)}
              />
            ))}
          </div>
        )}

      </main>

      {/* 5. Jumat Berkah Section */}
      <JumatBerkahSection
        onSelectJumat={() => {
          setSelectedDay('jumat');
          setViewAllDays(false);
          setSelectedSession('sarapan');
          handleNavigateSection('menu-harian');
        }}
      />

      {/* 6. Packaging & Hygiene Philosophy */}
      <PackagingPhilosophySection />

      {/* 7. Dedicated Android App Feature Section */}
      <AndroidAppSection />

      {/* 8. Footer */}
      <Footer />

      {/* 9. Mobile Android Bottom Navigation Bar (Dock) */}
      <AndroidBottomNav
        activeTab={activeMobileTab}
        onSelectTab={handleNavigateSection}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 10. Offline Connectivity Toast Indicator */}
      <OfflineIndicator />

      {/* 11. Item Detail Modal */}
      <ItemDetailModal
        item={detailItem}
        onClose={() => setDetailItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 12. Shopping Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onUpdatePackaging={handleUpdatePackaging}
        onClearCart={handleClearCart}
        currentDayName={currentDayConfig?.name || 'Hari Ini'}
      />

    </div>
  );
}
