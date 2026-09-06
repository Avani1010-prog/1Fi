'use client';

import React from 'react';
import { useShopStore } from '@/store/useShopStore';

export const ShopTabBar: React.FC = () => {
  const { activeTab, setActiveTab } = useShopStore();

  return (
    <div className="px-4 -mt-5 relative z-20">
      <div className="bg-white/95 backdrop-blur-md p-2 rounded-full shadow-lg border border-purple-100 flex items-center justify-between text-xs font-semibold">
        
        {/* Top Brands Tab */}
        <button
          onClick={() => setActiveTab('top_brands')}
          className={`flex-1 py-1.5 px-2 text-center transition-all duration-200 flex flex-col items-center justify-center relative ${
            activeTab === 'top_brands'
              ? 'text-purple-700 font-extrabold text-[12.5px] scale-[1.03]'
              : 'text-slate-500 hover:text-slate-800 font-medium text-[12px]'
          }`}
        >
          <span>Top Brands</span>
          {activeTab === 'top_brands' && (
            <span className="w-5 h-0.5 bg-purple-600 rounded-full mt-1"></span>
          )}
        </button>

        {/* Nearby Stores Tab */}
        <button
          onClick={() => setActiveTab('nearby_stores')}
          className={`flex-1 py-1.5 px-2 text-center transition-all duration-200 flex flex-col items-center justify-center relative ${
            activeTab === 'nearby_stores'
              ? 'text-purple-700 font-extrabold text-[12.5px] scale-[1.03]'
              : 'text-slate-500 hover:text-slate-800 font-medium text-[12px]'
          }`}
        >
          <span>Nearby Stores</span>
          {activeTab === 'nearby_stores' && (
            <span className="w-5 h-0.5 bg-purple-600 rounded-full mt-1"></span>
          )}
        </button>

        {/* Market Place Tab */}
        <button
          onClick={() => setActiveTab('marketplace')}
          className={`flex-1 py-1.5 px-2 text-center transition-all duration-200 flex flex-col items-center justify-center relative ${
            activeTab === 'marketplace'
              ? 'text-purple-700 font-extrabold text-[12.5px] scale-[1.03]'
              : 'text-slate-500 hover:text-slate-800 font-medium text-[12px]'
          }`}
        >
          <span>Market Place</span>
          {activeTab === 'marketplace' && (
            <span className="w-5 h-0.5 bg-purple-600 rounded-full mt-1"></span>
          )}
        </button>

      </div>
    </div>
  );
};
