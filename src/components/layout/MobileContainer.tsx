'use me';
'use client';

import React, { useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';

interface MobileContainerProps {
  children: React.ReactNode;
}

export const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
  const [isFrameMode, setIsFrameMode] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-[#f4f5f8] text-slate-800 flex flex-col items-center justify-start sm:py-6 sm:px-4 font-sans selection:bg-purple-500 selection:text-white">
      {/* Device Viewport Frame Mode Toggle Bar */}
      <div className="hidden sm:flex items-center justify-between w-full max-w-md mb-3 px-3 py-2 bg-white backdrop-blur border border-slate-200 rounded-full text-xs text-slate-700 shadow-sm">
        <div className="flex items-center space-x-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>1Fi Mobile Experience</span>
        </div>
        <button
          onClick={() => setIsFrameMode(!isFrameMode)}
          className="flex items-center gap-1.5 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all font-medium text-[11px]"
        >
          {isFrameMode ? (
            <>
              <Monitor className="w-3.5 h-3.5" /> Full Width
            </>
          ) : (
            <>
              <Smartphone className="w-3.5 h-3.5" /> Mobile Frame
            </>
          )}
        </button>
      </div>

      {/* Main Container */}
      <div
        className={`w-full bg-[#f7f8fa] relative transition-all duration-300 ${
          isFrameMode
            ? 'max-w-[430px] min-h-[880px] sm:rounded-[44px] shadow-2xl border-[8px] border-slate-800 sm:ring-1 sm:ring-white/10 overflow-hidden flex flex-col'
            : 'max-w-4xl min-h-screen sm:rounded-2xl shadow-xl flex flex-col'
        }`}
      >
        {/* Dynamic App Content */}
        <div className="flex-1 flex flex-col overflow-y-auto pb-24 relative">
          {children}
        </div>
      </div>
    </div>
  );
};
