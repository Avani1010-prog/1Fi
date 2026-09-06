'use client';

import React from 'react';
import { TOP_BRANDS_DATA } from '@/data/mockData';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const TopBrandsView: React.FC = () => {
  return (
    <div className="px-4 pt-4 pb-28 space-y-3">
      {TOP_BRANDS_DATA.map((brand) => (
        <div
          key={brand.id}
          className="bg-white rounded-[24px] border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 flex items-center gap-3.5 transition-all duration-200 hover:border-slate-200"
        >
          {/* Brand Logo Card */}
          <div className="w-[76px] h-[76px] rounded-[20px] border border-slate-200/80 bg-white flex items-center justify-center p-2 shrink-0 shadow-xs overflow-hidden">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-full h-full object-cover rounded-[14px]"
            />
          </div>

          {/* Brand Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[15px] font-bold text-slate-900 truncate tracking-tight leading-tight">
                {brand.name}
              </h3>
              <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-purple-50 text-[10px] font-bold text-purple-700 tracking-wide uppercase">
                {brand.category.split(' ')[0]}
              </span>
            </div>

            <p className="text-[12.5px] text-slate-500 font-medium leading-relaxed mt-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 shrink-0" />
              <span>{brand.emiText}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
