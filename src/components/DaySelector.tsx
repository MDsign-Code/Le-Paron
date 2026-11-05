import React from 'react';
import { Calendar, Search, Sparkles, Filter, Check } from 'lucide-react';
import { DayId, DAYS_CONFIG, MealSession } from '../data/menuData';

interface DaySelectorProps {
  selectedDay: DayId;
  onSelectDay: (day: DayId) => void;
  todayDayId: DayId;
  viewAllDays: boolean;
  onToggleViewAllDays: (val: boolean) => void;
  selectedSession: MealSession | 'all';
  onSelectSession: (session: MealSession | 'all') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const DaySelector: React.FC<DaySelectorProps> = ({
  selectedDay,
  onSelectDay,
  todayDayId,
  viewAllDays,
  onToggleViewAllDays,
  selectedSession,
  onSelectSession,
  searchQuery,
  onSearchChange,
}) => {
  const currentDayConfig = DAYS_CONFIG.find((d) => d.id === selectedDay);

  return (
    <div className="space-y-6">
      {/* Top Bar: View Mode Switcher + Search Box */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Toggle between Single Day and All Days */}
        <div className="inline-flex p-1 bg-stone-900 border border-stone-800 rounded-xl shadow-inner">
          <button
            onClick={() => onToggleViewAllDays(false)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              !viewAllDays
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Pilih Hari Tertentu
          </button>
          <button
            onClick={() => onToggleViewAllDays(true)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
              viewAllDays
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Semua 18 Menu (Senin–Minggu)</span>
          </button>
        </div>

        {/* Live Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Cari lauk, soto, empal, rawon..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-stone-900 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-200"
            >
              Hapus
            </button>
          )}
        </div>
      </div>

      {/* Segmented Day Buttons (Senin to Minggu) */}
      {!viewAllDays && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {DAYS_CONFIG.map((day) => {
              const isSelected = selectedDay === day.id;
              const isToday = todayDayId === day.id;

              return (
                <button
                  key={day.id}
                  onClick={() => onSelectDay(day.id)}
                  className={`group relative flex-1 min-w-[100px] px-3 py-3 rounded-2xl border text-center transition-all ${
                    isSelected
                      ? 'bg-stone-900 border-amber-500 shadow-md shadow-amber-950/30'
                      : 'bg-stone-900/60 border-stone-800 hover:border-stone-700 hover:bg-stone-900'
                  }`}
                >
                  {/* Today Badge */}
                  {isToday && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold px-1.5 py-0.2 bg-emerald-500 text-stone-950 rounded-full">
                      Hari Ini
                    </span>
                  )}

                  <div className={`text-xs font-bold ${isSelected ? 'text-amber-400' : 'text-stone-300'}`}>
                    {day.name}
                  </div>
                  <div className="text-[10px] text-stone-400 truncate mt-0.5">
                    {day.id === 'minggu' ? 'Paket 5 Org' : '3 Menu'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Day Theme Ribbon */}
          {currentDayConfig && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-950 border border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold text-sm">
                    {currentDayConfig.name}: {currentDayConfig.label}
                  </span>
                  <span className="text-stone-400 text-xs font-normal">
                    · {currentDayConfig.theme}
                  </span>
                </div>
                <div className="text-xs text-stone-300 mt-0.5 italic">
                  "{currentDayConfig.quote}"
                </div>
              </div>
              {selectedDay === 'jumat' && (
                <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 shrink-0">
                  🌟 Cashback Sedekah Rp500 / porsi Aktif
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Session Filter Tabs: Sarapan, Siang, Malam, Spesial, Minuman */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => onSelectSession('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedSession === 'all'
              ? 'bg-amber-500 text-stone-950'
              : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
          }`}
        >
          Semua Sesi
        </button>

        <button
          onClick={() => onSelectSession('sarapan')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedSession === 'sarapan'
              ? 'bg-amber-500 text-stone-950'
              : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
          }`}
        >
          Sarapan (Reguler 20K)
        </button>

        <button
          onClick={() => onSelectSession('siang')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedSession === 'siang'
              ? 'bg-amber-500 text-stone-950'
              : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
          }`}
        >
          Makan Siang (20K–25K)
        </button>

        <button
          onClick={() => onSelectSession('malam')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedSession === 'malam'
              ? 'bg-amber-500 text-stone-950'
              : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
          }`}
        >
          Santap Malam (20K–28K)
        </button>

        <button
          onClick={() => onSelectSession('spesial')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedSession === 'spesial'
              ? 'bg-amber-500 text-stone-950'
              : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
          }`}
        >
          Paket 5 Orang (Minggu)
        </button>

        <button
          onClick={() => onSelectSession('minuman')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedSession === 'minuman'
              ? 'bg-amber-500 text-stone-950'
              : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
          }`}
        >
          Teh Rempah (5K)
        </button>
      </div>
    </div>
  );
};
