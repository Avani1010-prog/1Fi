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
              className="flex-1 py-2 px-2 rounded-xl text-center transition-colors duration-150 flex flex-col items-center justify-center relative cursor-pointer bg-white border border-slate-200/80 shadow-xs"
            >
              <span
                className={`text-[12.5px] tracking-tight leading-tight transition-colors duration-150 ${
                  isActive
                    ? 'text-purple-900 font-bold'
                    : 'text-slate-800 hover:text-slate-950 font-semibold'
                }`}
              >
                {tab.label}
              </span>
              <span
                className={`w-6 h-0.5 rounded-full mt-1 transition-all duration-150 ${
                  isActive ? 'bg-[#2b00c4] opacity-100' : 'opacity-0'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};


