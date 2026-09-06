'use client';

import React from 'react';
import { useShopStore } from '@/store/useShopStore';

const CATEGORIES = [
  { id: 'all', label: 'All Products', icon: '🛍️' },
  { id: 'smartphones', label: 'Smartphones', icon: '📱' },
  { id: 'gold', label: 'Gold & Bullion', icon: '🪙' },
  { id: 'ev-vehicles', label: 'Electric Vehicles', icon: '🛵' },
  { id: 'electronics', label: 'Laptops & Audio', icon: '💻' },
  { id: 'appliances', label: 'TV & Home', icon: '📺' },
  { id: 'watches', label: 'Luxury Watches', icon: '⌚' },
  { id: 'travel', label: 'Travel & Vacations', icon: '✈️' }
];

export const CategoryChips: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useShopStore();

  return (
    <div className="overflow-x-auto no-scrollbar py-1 flex items-center gap-2">
      {CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`py-2 px-3.5 rounded-full transition-all duration-200 flex flex-col items-center justify-center whitespace-nowrap shrink-0 relative bg-white border border-slate-200/80 shadow-2xs ${
              isSelected
                ? 'text-purple-700 font-extrabold text-[12.5px] border-purple-300 scale-[1.03]'
                : 'text-slate-500 hover:text-slate-800 font-medium text-[12px]'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </div>
            {isSelected && (
              <span className="w-5 h-0.5 bg-purple-600 rounded-full mt-1"></span>
            )}
          </button>
        );
      })}
    </div>
  );
};
