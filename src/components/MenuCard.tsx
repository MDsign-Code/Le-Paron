import React, { useState } from 'react';
import { Plus, Info, Check, Package, Utensils } from 'lucide-react';
import { MenuItem, PackagingOption } from '../data/menuData';
import { formatRupiah } from '../utils/orderUtils';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (
    item: MenuItem,
    tier: 'Reguler' | 'Premium',
    unitPrice: number,
    packaging: PackagingOption,
    drinkOption?: 'Dingin (Es)' | 'Hangat'
  ) => void;
  onOpenDetail: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  item,
  onAddToCart,
  onOpenDetail,
}) => {
  const [selectedTier, setSelectedTier] = useState<'Reguler' | 'Premium'>('Reguler');
  const [drinkOption, setDrinkOption] = useState<'Dingin (Es)' | 'Hangat'>('Dingin (Es)');
  const [addedNotice, setAddedNotice] = useState(false);

  // Price determination
  const currentPrice =
    item.altPrice && selectedTier === 'Premium'
      ? item.altPrice.price
      : item.price;

  const defaultPackaging: PackagingOption =
    item.packagingDefault === 'Box Lunch' ? 'Box Lunch' : 'Paper Bowl';

  const handleAdd = () => {
    onAddToCart(
      item,
      selectedTier,
      currentPrice,
      defaultPackaging,
      item.session === 'minuman' ? drinkOption : undefined
    );
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 1500);
  };

  // Session tag label
  const sessionLabels: Record<string, string> = {
    sarapan: 'Sarapan Pagi (06:00 - 10:00)',
    siang: 'Makan Siang (11:30 - 14:30)',
    malam: 'Santap Malam (17:30 - 21:00)',
    spesial: 'Paket Spesial 5 Orang',
    minuman: 'Minuman Khas Rempah',
  };

  return (
    <div className="group rounded-3xl bg-stone-900 border border-stone-800/90 overflow-hidden flex flex-col justify-between hover:border-amber-500/40 hover:shadow-xl hover:shadow-black/40 transition-all duration-300">
      
      {/* Top Media Area */}
      <div>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-stone-900 to-stone-950 text-stone-500">
              <Utensils className="w-12 h-12 text-amber-500/40 mb-2" />
              <span className="text-xs text-stone-400 font-medium">Resep Warisan Nusantara</span>
            </div>
          )}

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/30 opacity-80" />

          {/* Packaging & Origin Top Tag */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-stone-950/80 backdrop-blur-md text-stone-300 font-medium border border-stone-800 flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-amber-400" />
              <span>{item.packagingDefault}</span>
            </span>

            {item.regionalOrigin && (
              <span className="px-2.5 py-1 rounded-lg bg-stone-950/80 backdrop-blur-md text-amber-300 font-medium border border-stone-800">
                {item.regionalOrigin}
              </span>
            )}
          </div>

          {/* Bottom Title & Tagline on Image */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="text-[11px] text-amber-400 font-medium tracking-wide">
              {sessionLabels[item.session] || item.session}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white font-display leading-snug line-clamp-1">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 space-y-4">
          
          {/* Target Audience & Tagline */}
          <div className="text-xs text-stone-400 italic">
            "{item.tagline}"
          </div>

          {/* Description */}
          <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {/* Nutrition Balance Visualizer */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-[11px] text-stone-400 font-medium">
              <span>Rasio Gizi Seimbang:</span>
              <span className="font-mono text-stone-300">
                {item.nutrition.karbo}% K · {item.nutrition.protein}% P · {item.nutrition.sayur}% S
              </span>
            </div>
            <div className="h-2 w-full bg-stone-800 rounded-full overflow-hidden flex">
              <div
                className="bg-amber-400 h-full"
                style={{ width: `${item.nutrition.karbo}%` }}
                title={`Karbohidrat: ${item.nutrition.karbo}%`}
              />
              <div
                className="bg-rose-400 h-full"
                style={{ width: `${item.nutrition.protein}%` }}
                title={`Protein: ${item.nutrition.protein}%`}
              />
              <div
                className="bg-emerald-400 h-full"
                style={{ width: `${item.nutrition.sayur}%` }}
                title={`Sayur & Serat: ${item.nutrition.sayur}%`}
              />
            </div>
          </div>

          {/* Key Ingredient Chips as clean unboxed text */}
          <div className="text-[11px] text-stone-400 line-clamp-1">
            {item.ingredients.slice(0, 4).join(' · ')}
          </div>

          {/* Reguler / Premium Variant Toggle if available */}
          {item.altPrice && (
            <div className="p-2 rounded-xl bg-stone-950/70 border border-stone-800 text-xs space-y-1.5">
              <div className="text-stone-400 text-[11px]">Pilihan Porsi:</div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTier('Reguler')}
                  className={`py-1 px-2 rounded-lg text-center font-medium transition-colors ${
                    selectedTier === 'Reguler'
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  Reguler {formatRupiah(item.price)}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTier('Premium')}
                  className={`py-1 px-2 rounded-lg text-center font-medium transition-colors ${
                    selectedTier === 'Premium'
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  Premium {formatRupiah(item.altPrice.price)}
                </button>
              </div>
            </div>
          )}

          {/* Minuman Variant Options (Es / Hangat) */}
          {item.session === 'minuman' && (
            <div className="p-2 rounded-xl bg-stone-950/70 border border-stone-800 text-xs flex items-center justify-between">
              <span className="text-stone-400 text-[11px]">Sajian:</span>
              <div className="inline-flex p-0.5 bg-stone-900 rounded-lg">
                <button
                  type="button"
                  onClick={() => setDrinkOption('Dingin (Es)')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    drinkOption === 'Dingin (Es)'
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Es Segar
                </button>
                <button
                  type="button"
                  onClick={() => setDrinkOption('Hangat')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    drinkOption === 'Hangat'
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Hangat
                </button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Bottom Footer Action Area */}
      <div className="p-4 sm:p-5 pt-0 border-t border-stone-800/60 mt-2">
        <div className="flex items-center justify-between gap-3 pt-3">
          
          {/* Price Tag */}
          <div>
            <div className="text-[10px] uppercase tracking-wider text-stone-400">
              {item.tier === 'Paket 5 Orang' ? 'Harga Paket (5 Org)' : selectedTier}
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-amber-400">
              {formatRupiah(currentPrice)}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenDetail(item)}
              title="Lihat Rincian Resep & Gizi"
              className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
            >
              <Info className="w-4 h-4" />
            </button>

            <button
              onClick={handleAdd}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all active:scale-95 ${
                addedNotice
                  ? 'bg-emerald-500 text-stone-950'
                  : 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md shadow-amber-950/20'
              }`}
            >
              {addedNotice ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Ditambahkan</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Pesan</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
