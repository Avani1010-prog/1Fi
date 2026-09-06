'use client';

import React from 'react';
import { useShopStore } from '@/store/useShopStore';

export const ShopTabBar: React.FC = () => {
  const { activeTab, setActiveTab } = useShopStore();

  const tabs = [
    { id: 'top_brands', label: 'Top Brands' },
    { id: 'nearby_stores', label: 'Nearby Stores' },
    { id: 'marketplace', label: 'Market Place' },
  ] as const;

  return (
    <div className="px-4 -mt-5 relative z-20">
      <div className="bg-white/95 backdrop-blur-md p-1.5 rounded-2xl shadow-md border border-slate-200/80 flex items-center justify-between gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-2 rounded-xl text-center transition-all duration-200 flex flex-col items-center justify-center relative cursor-pointer border ${
                isActive
                  ? 'bg-purple-50/90 border-purple-300 text-purple-950 font-bold shadow-sm scale-[1.02]'
                  : 'bg-slate-50/90 hover:bg-slate-100 border-slate-200 text-slate-800 hover:text-slate-950 font-semibold shadow-xs'
              }`}
            >
              <span className="text-[12.5px] tracking-tight leading-tight">{tab.label}</span>
              {isActive && (
                <span className="w-5 h-0.5 bg-[#2b00c4] rounded-full mt-1"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

