'use client';

import React from 'react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { HeaderBanner } from '@/components/layout/HeaderBanner';
import { ShopTabBar } from '@/components/layout/ShopTabBar';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import { TopBrandsView } from '@/components/shop/TopBrandsView';
import { NearbyStoresView } from '@/components/shop/NearbyStoresView';
import { MarketplaceView } from '@/components/shop/MarketplaceView';
import { useShopStore } from '@/store/useShopStore';

export default function ShopPage() {
  const { activeTab } = useShopStore();

  return (
    <MobileContainer>
      {/* 1Fi Promotional Deep Purple Header Banner */}
      <HeaderBanner />

      {/* 3-Tab Selector: Top Brands | Nearby Stores | 1Fi Marketplace */}
      <ShopTabBar />

      {/* Tab View Content */}
      <div className="flex-1">
        {activeTab === 'top_brands' && <TopBrandsView />}
        {activeTab === 'nearby_stores' && <NearbyStoresView />}
        {activeTab === 'marketplace' && <MarketplaceView />}
      </div>

      {/* Bottom 5-Tab Navigation Bar */}
      <BottomNavigation />
    </MobileContainer>
  );
}
