import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 z-50 flex items-center gap-2.5 rounded-2xl bg-amber-600/95 text-stone-950 px-4 py-2.5 text-xs font-bold shadow-xl border border-amber-400 backdrop-blur-md animate-fade-in">
      <WifiOff className="w-4 h-4 shrink-0" />
      <span>Mode Offline Aktif — Menu Le'Paron tetap bisa diakses tanpa internet.</span>
    </div>
  );
};
