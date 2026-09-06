'use client';

import React from 'react';

// Realistic SVG Icons sourced directly from Iconify (https://icon-sets.iconify.design/)
// Icons used:
// - All Products: flat-color-icons:shop
// - Smartphones: fluent-color:phone-32
// - Gold & Bullion: fluent-color:coin-multiple-32
// - Electric Vehicles: streamline-color:transfer-motorcycle
// - Laptops & Audio: fluent-color:laptop-32
// - TV & Home: flat-color-icons:display
// - Luxury Watches: fluent-color:clock-32
// - Travel & Vacations: streamline-color:airplane

export const AllProductsIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} aria-label="All Products">
    <path fill="#CFD8DC" d="M5 19h38v19H5z" />
    <path fill="#B0BEC5" d="M5 38h38v4H5z" />
    <path fill="#455A64" d="M27 24h12v18H27z" />
    <path fill="#E3F2FD" d="M9 24h14v11H9z" />
    <path fill="#1E88E5" d="M10 25h12v9H10z" />
    <path fill="#90A4AE" d="M36.5 33.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5" />
    <g fill="#558B2F">
      <circle cx="24" cy="19" r="3" />
      <circle cx="36" cy="19" r="3" />
      <circle cx="12" cy="19" r="3" />
    </g>
    <path fill="#7CB342" d="M40 6H8c-1.1 0-2 .9-2 2v3h36V8c0-1.1-.9-2-2-2m-19 5h6v8h-6zm16 0h-5l1 8h6zm-26 0h5l-1 8H9z" />
    <g fill="#FFA000">
      <circle cx="30" cy="19" r="3" />
      <path d="M45 19c0 1.7-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z" />
      <circle cx="18" cy="19" r="3" />
      <path d="M3 19c0 1.7 1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3z" />
    </g>
    <path fill="#FFC107" d="M32 11h-5v8h6zm10 0h-5l2 8h6zm-26 0h5v8h-6zM6 11h5l-2 8H3z" />
  </svg>
);

export const SmartphoneIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className} aria-label="Smartphones">
    <g fill="none">
      <path fill="url(#cat-phone-screen)" d="M10.25 2A3.25 3.25 0 0 0 7 5.25v21.5A3.25 3.25 0 0 0 10.25 30h11.5A3.25 3.25 0 0 0 25 26.75V5.25A3.25 3.25 0 0 0 21.75 2z" />
      <path fill="url(#cat-phone-bar)" d="M14 24h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2" />
      <defs>
        <radialGradient id="cat-phone-screen" cx="0" cy="0" r="1" gradientTransform="rotate(61.167 2.548 6.485) scale(36.1576 71.7141)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#cb7df8" />
          <stop offset=".412" stopColor="#9c6cfe" />
          <stop offset="1" stopColor="#4e44db" />
        </radialGradient>
        <radialGradient id="cat-phone-bar" cx="0" cy="0" r="1" gradientTransform="rotate(40.863 -26.36 28.257) scale(10.4955 12.3381)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#decbff" />
          <stop offset="1" stopColor="#d1d1ff" />
        </radialGradient>
      </defs>
    </g>
  </svg>
);

export const GoldIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className} aria-label="Gold and Bullion">
    <g fill="none">
      <path fill="url(#cat-gold-base)" d="M16 30c5.523 0 10-2.462 10-5.5v-3H6v3c0 3.038 4.477 5.5 10 5.5" />
      <ellipse cx="16" cy="21.5" fill="url(#cat-gold-ellipse1)" rx="10" ry="5.5" />
      <path fill="url(#cat-gold-mid)" d="M16 23c5.523 0 10-2.462 10-5.5v-3H6v3c0 3.038 4.477 5.5 10 5.5" />
      <ellipse cx="16" cy="14.5" fill="url(#cat-gold-ellipse2)" rx="10" ry="5.5" />
      <path fill="url(#cat-gold-top)" d="M16 16c5.523 0 10-2.462 10-5.5v-3H6v3c0 3.038 4.477 5.5 10 5.5" />
      <ellipse cx="16" cy="7.5" fill="url(#cat-gold-ellipse3)" rx="10" ry="5.5" />
      <defs>
        <linearGradient id="cat-gold-base" x1="11.305" x2="14.301" y1="23.586" y2="30.645" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffa43d" />
          <stop offset="1" stopColor="#fb5937" />
        </linearGradient>
        <linearGradient id="cat-gold-ellipse1" x1="26.029" x2="16.157" y1="26.996" y2="12.314" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff8a69" />
          <stop offset="1" stopColor="#ffcd0f" />
        </linearGradient>
        <linearGradient id="cat-gold-mid" x1="11.305" x2="14.301" y1="16.586" y2="23.645" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffa43d" />
          <stop offset="1" stopColor="#fb5937" />
        </linearGradient>
        <linearGradient id="cat-gold-ellipse2" x1="26.029" x2="16.157" y1="19.996" y2="5.314" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff8a69" />
          <stop offset="1" stopColor="#ffcd0f" />
        </linearGradient>
        <linearGradient id="cat-gold-top" x1="11.305" x2="14.301" y1="9.586" y2="16.645" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffa43d" />
          <stop offset="1" stopColor="#fb5937" />
        </linearGradient>
        <linearGradient id="cat-gold-ellipse3" x1="26.029" x2="16.157" y1="12.996" y2="-1.686" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff8a69" />
          <stop offset="1" stopColor="#ffcd0f" />
        </linearGradient>
      </defs>
    </g>
  </svg>
);

export const EVehicleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className={className} aria-label="Electric Vehicles">
    <g fill="none">
      <path fill="#fff" d="M1.5 8H4a1 1 0 0 0 1-1V4.5a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1V7a1 1 0 0 0 1 1" />
      <path stroke="#4147d5" strokeLinecap="round" d="M1.5 8H4a1 1 0 0 0 1-1V4.5a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1V7a1 1 0 0 0 1 1Z" />
      <path fill="#d7e0ff" d="M.5 10v2H8a1.5 1.5 0 0 1-1.5-1.5V10a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2m11-5.5h-1a1 1 0 0 0 0 2h1z" />
      <path stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M11.5 4.5h-1a1 1 0 0 0 0 2h1z" />
      <path fill="#d7e0ff" d="M12.5 12h-3V8h.5c1.866 0 3.077 1.278 3.408 3.006c.104.542-.356.994-.908.994" />
      <path fill="#fff" d="M10.499 13.5a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m-7 0a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002" />
      <path stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M10.499 13.5a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m-7 0a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002" />
      <path stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M2 12H.5v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.5A1.5 1.5 0 0 0 8 12h1m3 0h.5c.552 0 1.012-.452.908-.994C13.077 9.278 11.866 8 10 8h-.5" />
      <path stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M8 3.5h1.5v7.379" />
    </g>
  </svg>
);

export const LaptopIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className} aria-label="Laptops and Audio">
    <g fill="none">
      <path fill="url(#cat-laptop-base)" d="m7.5 22l8.5-.5l8.5.5h.307q.194 0 .372.072l3.893 1.557c.56.224.928.767.928 1.371H2c0-.604.368-1.147.928-1.371l3.893-1.558A1 1 0 0 1 7.193 22z" />
      <path fill="url(#cat-laptop-edge)" d="M3 24a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2z" />
      <path fill="url(#cat-laptop-screen)" d="M4 9.25A3.25 3.25 0 0 1 7.25 6h17.5A3.25 3.25 0 0 1 28 9.25v9.5A3.25 3.25 0 0 1 24.75 22H7.25A3.25 3.25 0 0 1 4 18.75z" />
      <defs>
        <linearGradient id="cat-laptop-base" x1="29.913" x2="27.617" y1="27.071" y2="16.424" gradientUnits="userSpaceOnUse">
          <stop stopColor="#63686e" />
          <stop offset="1" stopColor="#889096" />
        </linearGradient>
        <linearGradient id="cat-laptop-edge" x1="30" x2="29.736" y1="25.857" y2="22.162" gradientUnits="userSpaceOnUse">
          <stop stopColor="#889096" />
          <stop offset="1" stopColor="#aab3bd" />
        </linearGradient>
        <linearGradient id="cat-laptop-screen" x1="20.8" x2="21.689" y1="6" y2="24.307" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6ce0ff" />
          <stop offset="1" stopColor="#4894fe" />
        </linearGradient>
      </defs>
    </g>
  </svg>
);

export const TVIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} aria-label="TV and Home Appliances">
    <path fill="#80DEEA" d="M40 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4" />
    <path fill="#2962FF" d="M36 17h-5l-2-2l2-2h5l2 2zm0 18h-5l-2-2l2-2h5l2 2zm1-5V18l2-2l2 2v12l-2 2zm-11 0V18l2-2l2 2v12l-2 2zm-9-13h-5l-2-2l2-2h5l2 2zm0 18h-5l-2-2l2-2h5l2 2zm1-5V18l2-2l2 2v12l-2 2zM7 30V18l2-2l2 2v12l-2 2z" />
  </svg>
);

export const WatchIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className} aria-label="Luxury Watches">
    <g fill="none">
      <path fill="url(#cat-clock-dial)" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14" />
      <path fill="url(#cat-clock-hands)" d="M14 9a1 1 0 1 1 2 0v7h4a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1z" />
      <defs>
        <linearGradient id="cat-clock-dial" x1="6.667" x2="20.667" y1=".444" y2="31.556" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1ec8b0" />
          <stop offset="1" stopColor="#2764e7" />
        </linearGradient>
        <linearGradient id="cat-clock-hands" x1="14.613" x2="11.885" y1="9.531" y2="17.383" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fdfdfd" />
          <stop offset="1" stopColor="#d1d1ff" />
        </linearGradient>
      </defs>
    </g>
  </svg>
);

export const TravelIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className={className} aria-label="Travel and Vacations">
    <g fill="none">
      <path fill="#d7e0ff" d="M1.25 2.75h1.61a.49.49 0 0 1 .48.38l.51 2l5-1a3.69 3.69 0 0 1 4.4 3.59a1 1 0 0 1-1 1h-4.4l-1 1.58a2 2 0 0 1-1.68.92h-1.1a.5.5 0 0 1-.44-.73l.88-1.74H1.75a1 1 0 0 1-1-1v-4.5a.5.5 0 0 1 .5-.5" />
      <path stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M1.25 2.75h1.61a.49.49 0 0 1 .48.38l.51 2l5-1a3.69 3.69 0 0 1 4.4 3.59a1 1 0 0 1-1 1h-4.4l-1 1.58a2 2 0 0 1-1.68.92h-1.1a.5.5 0 0 1-.44-.73l.88-1.74H1.75a1 1 0 0 1-1-1v-4.5a.5.5 0 0 1 .5-.5" />
    </g>
  </svg>
);

interface CategoryIconProps {
  categoryId: string;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ categoryId, className = 'w-4 h-4' }) => {
  switch (categoryId) {
    case 'all':
      return <AllProductsIcon className={className} />;
    case 'smartphones':
      return <SmartphoneIcon className={className} />;
    case 'gold':
      return <GoldIcon className={className} />;
    case 'ev-vehicles':
      return <EVehicleIcon className={className} />;
    case 'electronics':
      return <LaptopIcon className={className} />;
    case 'appliances':
      return <TVIcon className={className} />;
    case 'watches':
      return <WatchIcon className={className} />;
    case 'travel':
      return <TravelIcon className={className} />;
    default:
      return <AllProductsIcon className={className} />;
  }
};
