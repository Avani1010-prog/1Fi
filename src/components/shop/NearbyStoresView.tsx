'use client';

import React from 'react';
import { NEARBY_STORES_DATA } from '@/data/mockData';
import { Store, Zap, Compass, Sparkles, Search, ChevronDown } from 'lucide-react';

interface BrandLogoProps {
  logo: string;
  name: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ logo, name }) => {
  const normalizedLogo = logo?.toUpperCase();

  if (normalizedLogo === 'SUZUKI') {
    return (
      <svg viewBox="0 0 100 85" className="w-12 h-12 object-contain" fill="none">
        {/* Red Suzuki S Mark */}
        <g fill="#E31B23">
          {/* Top half */}
          <path d="M22 6h56l-16 16H42l16 16h-16L22 18z" />
          {/* Bottom half */}
          <path d="M78 64H22l16-16h20l-16-16h16l20 20z" />
        </g>
        {/* Navy Blue SUZUKI text */}
        <text
          x="50"
          y="80"
          textAnchor="middle"
          fill="#002C6C"
          fontWeight="900"
          fontSize="13"
          fontFamily="Arial Black, Arial, sans-serif"
          letterSpacing="0.5"
        >
          SUZUKI
        </text>
      </svg>
    );
  }

  if (normalizedLogo === 'HONDA') {
    return (
      <svg viewBox="0 0 100 85" className="w-12 h-12 object-contain" fill="none">
        <path
          d="M26 14h48c4 0 7 3 7 7v30c0 4-3 7-7 7H26c-4 0-7-3-7-7V21c0-4 3-7 7-7z"
          stroke="#CC0000"
          strokeWidth="3.5"
          fill="none"
        />
        <path d="M33 22h7l4 18h12l4-18h7l-7 30h-6l-4-16h-8l-4 16h-6z" fill="#CC0000" />
        <text
          x="50"
          y="80"
          textAnchor="middle"
          fill="#CC0000"
          fontWeight="900"
          fontSize="12.5"
          fontFamily="Arial Black, Arial, sans-serif"
          letterSpacing="0.5"
        >
          HONDA
        </text>
      </svg>
    );
  }

  if (normalizedLogo === 'CHARGER') {
    return (
      <div className="flex flex-col items-center justify-center text-emerald-600">
        <Zap className="w-7 h-7 stroke-[2.2]" />
        <span className="text-[9px] font-black text-slate-800 tracking-wider uppercase mt-0.5">CHARGER</span>
      </div>
    );
  }

  if (normalizedLogo === 'ATELIER') {
    return (
      <div className="flex flex-col items-center justify-center text-purple-700">
        <Sparkles className="w-7 h-7 stroke-[2]" />
        <span className="text-[9px] font-black text-slate-800 tracking-wider uppercase mt-0.5">ATELIER</span>
      </div>
    );
  }

  if (normalizedLogo === 'TRIPBOUQUET') {
    return (
      <div className="flex flex-col items-center justify-center text-blue-600">
        <Compass className="w-7 h-7 stroke-[2]" />
        <span className="text-[9px] font-black text-slate-800 tracking-wider uppercase mt-0.5">TRIP</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center text-purple-600">
      <Store className="w-7 h-7 stroke-[2]" />
      <span className="text-[9px] font-bold text-slate-700 tracking-wider uppercase mt-0.5 truncate max-w-[60px]">
        {name.split(' ')[0]}
      </span>
    </div>
  );
};

export const NearbyStoresView: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedLocation, setSelectedLocation] = React.useState('Gurugram');
  const [isLocationOpen, setIsLocationOpen] = React.useState(false);

  const locations = ['Gurugram', 'Delhi NCR', 'Noida', 'Bengaluru', 'Mumbai'];

  const filteredStores = React.useMemo(() => {
    if (!searchQuery.trim()) return NEARBY_STORES_DATA;
    const query = searchQuery.toLowerCase();
    return NEARBY_STORES_DATA.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.address.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="px-4 pt-4 pb-28 space-y-3.5">
      {/* Search Bar matching screenshot */}
      <div className="relative w-full">
        <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search stores..."
          className="w-full bg-white border border-slate-200/90 rounded-full pl-11 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all shadow-2xs"
        />
      </div>

      {/* Header Row with Title + Gurugram Dropdown */}
      <div className="flex items-center justify-between pt-1">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">Nearby Stores</h2>

        <div className="relative">
          <button
            onClick={() => setIsLocationOpen(!isLocationOpen)}
            className="bg-white border border-purple-300/90 rounded-full px-3 py-1 text-[13px] font-bold text-[#3b0764] shadow-2xs flex items-center gap-1 hover:border-purple-400 transition-all cursor-pointer"
          >
            <span>{selectedLocation}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-[#3b0764] stroke-[2.4] transition-transform ${isLocationOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLocationOpen && (
            <div className="absolute right-0 top-full mt-1.5 w-36 bg-white rounded-2xl border border-purple-200/80 shadow-xl p-1.5 z-40 space-y-0.5">
              {locations.map((loc) => {
                const isSelected = selectedLocation === loc;
                return (
                  <button
                    key={loc}
                    onClick={() => {
                      setSelectedLocation(loc);
                      setIsLocationOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-purple-50 text-[#5b21b6] font-bold'
                        : 'text-slate-700 hover:bg-purple-50/60 hover:text-[#5b21b6]'
                    }`}
                  >
                    <span>{loc}</span>
                    {isSelected && <span className="text-[10px] font-bold text-[#5b21b6]">✓</span>}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Cards List */}
      <div className="space-y-3">
        {filteredStores.map((store) => (
          <div
            key={store.id}
            className="bg-white rounded-[24px] border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 flex items-start gap-3.5 transition-all duration-200 hover:border-slate-200"
          >
            {/* Store Logo Card */}
            <div className="w-[76px] h-[76px] rounded-[20px] border border-slate-200/80 bg-white flex items-center justify-center p-1.5 shrink-0 shadow-xs">
              <BrandLogo logo={store.logo} name={store.name} />
            </div>

            {/* Store Details */}
            <div className="flex-1 min-w-0 pt-0.5">
              {/* Header: Name + Distance Badge */}
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[15px] font-bold text-slate-900 truncate tracking-tight leading-tight">
                  {store.name}
                </h3>
                <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-600 tracking-wider uppercase">
                  {store.distanceKm.toFixed(1)} KM
                </span>
              </div>

              {/* Address */}
              <p className="text-[12.5px] text-slate-500 font-normal leading-relaxed mt-1.5 line-clamp-3">
                {store.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
