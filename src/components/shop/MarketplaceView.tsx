'use client';

import React, { useEffect, useState } from 'react';
import { Search, ChevronDown, AlertCircle, RefreshCw } from 'lucide-react';
import { useShopStore } from '@/store/useShopStore';
import { ProductCard } from '@/components/marketplace/ProductCard';
import { CategoryChips } from '@/components/marketplace/CategoryChips';
import { ProductDetailModal } from '@/components/marketplace/ProductDetailModal';
import { CheckoutModal } from '@/components/marketplace/CheckoutModal';
import { Product } from '@/types/product';

export const MarketplaceView: React.FC = () => {
  const {
    selectedCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    openProductDetail,
    resetFilters
  } = useShopStore();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from Next.js REST API route (/api/products)
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams();
      if (selectedCategory && selectedCategory !== 'all') {
        queryParams.set('category', selectedCategory);
      }
      if (searchQuery) {
        queryParams.set('q', searchQuery);
      }
      if (sortBy) {
        queryParams.set('sort', sortBy);
      }

      const res = await fetch(`/api/products?${queryParams.toString()}`);
      const json = await res.json();

      if (json.success) {
        setProducts(json.data);
      } else {
        setError('Failed to fetch marketplace products');
      }
    } catch {
      setError('Network error loading marketplace products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, searchQuery, sortBy]);

  // Custom Sort Dropdown State
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortOptions = [
    { id: 'popular', label: 'Popularity' },
    { id: 'price_low', label: 'Price: Low to High' },
    { id: 'price_high', label: 'Price: High to Low' },
    { id: 'emi_low', label: 'EMI: Low to High' }
  ];

  const currentSortLabel = sortOptions.find(o => o.id === sortBy)?.label || 'Popularity';

  return (
    <div className="px-4 pt-5 pb-6 space-y-4">
      {/* Full Width Search Bar */}
      <div className="relative w-full">
        <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products, brands or specs..."
          className="w-full bg-white border border-slate-200 rounded-full pl-11 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all shadow-sm"
        />
      </div>

      {/* Heading & Custom Rounded Sort Dropdown Row */}
      <div className="flex items-center justify-between pt-1">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">Market Place</h2>
        
        {/* Custom Rounded Dropdown Menu */}
        <div className="relative">
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="bg-white border border-slate-200 rounded-full px-3 py-1 text-[13px] font-bold text-[#3b0764] shadow-2xs flex items-center gap-1 hover:border-slate-300 transition-all cursor-pointer"
          >
            <span>{currentSortLabel}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-[#3b0764] stroke-[2.4] transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Rounded Dropdown Box Popup */}
          {isSortOpen && (
            <div className="absolute right-0 top-full mt-1.5 w-48 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-2xl p-1.5 z-40 space-y-0.5 animate-in fade-in zoom-in-95 duration-150">
              {sortOptions.map((option) => {
                const isSelected = sortBy === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSortBy(option.id as any);
                      setIsSortOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-purple-700 text-white font-bold shadow-xs'
                        : 'text-slate-700 hover:bg-purple-50 hover:text-purple-900'
                    }`}
                  >
                    <span>{option.label}</span>
                    {isSelected && <span className="text-[10px] font-extrabold">✓</span>}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Category Chips Bar */}
      <CategoryChips />

      {/* Loading Skeleton Stack */}
      {loading && (
        <div className="flex flex-col space-y-3">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="bg-white rounded-2xl p-3 border-2 border-slate-200 flex items-center gap-3 animate-pulse">
              <div className="w-28 h-28 bg-slate-200 rounded-xl shrink-0"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                <div className="h-4 bg-slate-200 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 text-center space-y-3">
          <AlertCircle className="w-8 h-8 text-rose-500 mx-auto" />
          <p className="text-xs font-bold text-rose-900">{error}</p>
          <button
            onClick={fetchProducts}
            className="px-4 py-2 bg-rose-600 text-white rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Retry Loading
          </button>
        </div>
      )}

      {/* Empty Search Results State */}
      {!loading && !error && products.length === 0 && (
        <div className="bg-white border border-slate-100 rounded-2xl p-8 text-center space-y-3 shadow-sm">
          <div className="text-3xl">🔍</div>
          <h3 className="text-sm font-bold text-slate-800">No products found</h3>
          <p className="text-xs text-slate-500">
            We couldn&apos;t find any items matching &quot;{searchQuery}&quot; in this category.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-purple-700 text-white rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-sm"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Product Cards Stack (One below another) */}
      {!loading && !error && products.length > 0 && (
        <div className="flex flex-col space-y-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={openProductDetail}
            />
          ))}
        </div>
      )}

      {/* Modals */}
      <ProductDetailModal />
      <CheckoutModal />
    </div>
  );
};
