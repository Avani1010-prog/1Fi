'use client';

import React from 'react';

export const HeaderBanner: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden bg-[#2b00c4]">
      <img
        src="/images/banner.jpg"
        alt="1Fi Shop today, Pay later using Mutual funds"
        className="w-full h-auto object-cover block"
      />
    </div>
  );
};
