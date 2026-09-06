'use client';

import React from 'react';
import { House, Store, ReceiptIndianRupee, ChartNoAxesCombined, User } from 'lucide-react';
import { useShopStore } from '@/store/useShopStore';

export const BottomNavigation: React.FC = () => {
  const { setActiveTab } = useShopStore();

  return (
    <div className="sticky bottom-3 left-0 right-0 z-40 px-3 mt-auto pointer-events-none">
      {/* Floating White Pill Container */}
      <div className="bg-white/98 backdrop-blur-xl rounded-[32px] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-2.5 sm:px-3 py-2 flex items-center justify-around max-w-md mx-auto pointer-events-auto">
        
        {/* 1. Home */}
        <button
          onClick={() => setActiveTab('top_brands')}
          className="flex flex-col items-center gap-1 py-1 px-3 text-[#8a94a6] hover:text-[#7c3aed] transition-colors cursor-pointer"
        >
          <House className="w-6 h-6" strokeWidth={2} />
          <span className="text-[11px] font-semibold tracking-tight">Home</span>
        </button>

        {/* 2. Shop (Active) */}
        <button className="flex flex-col items-center gap-1 py-1 px-3 text-[#7c3aed] font-bold relative cursor-pointer">
          {/* Active top purple indicator line */}
          <span className="w-8 h-1 bg-[#7c3aed] rounded-full absolute -top-2"></span>
          
          {/* Store Icon with Soft Purple Radial Glow */}
          <div className="p-0.5 rounded-xl bg-purple-50/80">
            <Store className="w-6 h-6 text-[#7c3aed]" strokeWidth={2} />
          </div>
          <span className="text-[11px] font-extrabold text-[#7c3aed] tracking-tight">Shop</span>
        </button>

        {/* 3. EMI Dues */}
        <button className="flex flex-col items-center gap-1 py-1 px-3 text-[#8a94a6] hover:text-[#7c3aed] transition-colors cursor-pointer">
          <ReceiptIndianRupee className="w-6 h-6" strokeWidth={2} />
          <span className="text-[11px] font-semibold tracking-tight">EMI Dues</span>
        </button>

        {/* 4. Limit */}
        <button className="flex flex-col items-center gap-1 py-1 px-3 text-[#8a94a6] hover:text-[#7c3aed] transition-colors cursor-pointer">
          <ChartNoAxesCombined className="w-6 h-6" strokeWidth={2} />
          <span className="text-[11px] font-semibold tracking-tight">Limit</span>
        </button>

        {/* 5. Profile */}
        <button className="flex flex-col items-center gap-1 py-1 px-3 text-[#8a94a6] hover:text-[#7c3aed] transition-colors cursor-pointer">
          <User className="w-6 h-6" strokeWidth={2} />
          <span className="text-[11px] font-semibold tracking-tight">Profile</span>
        </button>

      </div>
    </div>
  );
};

