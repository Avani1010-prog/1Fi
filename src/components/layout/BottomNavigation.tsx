'use client';

import React from 'react';
import { useShopStore } from '@/store/useShopStore';

export const BottomNavigation: React.FC = () => {
  const { activeTab, setActiveTab } = useShopStore();

  return (
    <div className="absolute bottom-3 left-3 right-3 z-40">
      {/* Floating White Pill Container */}
      <div className="bg-white/98 backdrop-blur-xl rounded-[32px] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.1)] px-3 py-2 flex items-center justify-around max-w-md mx-auto">
        
        {/* 1. Home (Rounded House with Door Cut-out) */}
        <button
          onClick={() => setActiveTab('top_brands')}
          className="flex flex-col items-center gap-1 py-1 px-3 text-[#8a94a6] hover:text-[#7c3aed] transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 10.5L12 3l9 7.5V19.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10.5z" />
            <rect x="9.5" y="14" width="5" height="7.5" rx="1" />
          </svg>
          <span className="text-[11px] font-semibold tracking-tight">Home</span>
        </button>

        {/* 2. Shop (Active - Store Awning with Door Cut-out & Purple Glow) */}
        <button className="flex flex-col items-center gap-1 py-1 px-3 text-[#7c3aed] font-bold relative">
          {/* Active top purple indicator line */}
          <span className="w-7 h-1 bg-[#7c3aed] rounded-full absolute -top-2"></span>
          
          {/* Store Kiosk Icon with Soft Purple Glow */}
          <div className="p-1 rounded-xl bg-[#f4ebff]/80">
            <svg className="w-6 h-6 text-[#7c3aed]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9.5l1.5-5a1 1 0 0 1 1-.5h13a1 1 0 0 1 1 .5l1.5 5" />
              <path d="M3 9.5c0 1.2 1 2 2.25 2s2.25-.8 2.25-2c0 1.2 1 2 2.25 2s2.25-.8 2.25-2c0 1.2 1 2 2.25 2s2.25-.8 2.25-2c0 1.2 1 2 2.25 2S21 10.7 21 9.5" />
              <path d="M4.5 11.5V20a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-8.5" />
              <rect x="9.5" y="15" width="5" height="6.5" rx="1" />
            </svg>
          </div>
          <span className="text-[11px] font-extrabold text-[#7c3aed] tracking-tight">Shop</span>
        </button>

        {/* 3. EMI Dues (Receipt Ticket with Rupee ₹ Symbol) */}
        <button className="flex flex-col items-center gap-1 py-1 px-3 text-[#8a94a6] hover:text-[#7c3aed] transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Receipt Ticket contour */}
            <path d="M5 2.5v19l2.5-1.5L10 21.5l2-1.5 2 1.5 2.5-1.5L19 21.5v-19l-2.5 1.5L14 2.5l-2 1.5-2-1.5L7.5 4 5 2.5z" />
            {/* Rupee ₹ Symbol */}
            <path d="M9.5 8h5" strokeWidth="1.8" />
            <path d="M9.5 11h5" strokeWidth="1.8" />
            <path d="M9.5 8v5.5c2.2 0 3.5-.8 3.5-2.2S11.7 9.2 9.5 9.2" strokeWidth="1.8" />
            <path d="M11.5 13.5L15 17.5" strokeWidth="1.8" />
          </svg>
          <span className="text-[11px] font-semibold tracking-tight">EMI Dues</span>
        </button>

        {/* 4. Limit (Bar Columns with Upward Line Graph) */}
        <button className="flex flex-col items-center gap-1 py-1 px-3 text-[#8a94a6] hover:text-[#7c3aed] transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* 4 Vertical Bar Columns */}
            <path d="M5 20v-3" strokeWidth="2.2" />
            <path d="M9 20v-6" strokeWidth="2.2" />
            <path d="M13 20v-9" strokeWidth="2.2" />
            <path d="M17 20v-12" strokeWidth="2.2" />
            {/* Upward Line Graph connecting over bars */}
            <path d="M3 16l4.5-5 4 3 8.5-9" strokeWidth="2" />
          </svg>
          <span className="text-[11px] font-semibold tracking-tight">Limit</span>
        </button>

        {/* 5. Profile (Avatar Outline) */}
        <button className="flex flex-col items-center gap-1 py-1 px-3 text-[#8a94a6] hover:text-[#7c3aed] transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text-[11px] font-semibold tracking-tight">Profile</span>
        </button>

      </div>
    </div>
  );
};
