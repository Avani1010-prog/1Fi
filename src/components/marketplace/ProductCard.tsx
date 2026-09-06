'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  // Find lowest No-cost EMI monthly amount
  const lowestEMIOption = product.emiOptions.reduce((min, plan) =>
    plan.monthlyAmount < min.monthlyAmount ? plan : min
  , product.emiOptions[0]);

  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-white rounded-2xl border-2 border-slate-200/90 p-2.5 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-row items-center gap-3 group cursor-pointer relative"
    >
      {/* Light Grey Discount Badge (Top Right) */}
      {product.discountPercentage > 0 && (
        <div
          style={{ backgroundColor: '#EFECE6' }}
          className="absolute top-2 right-2.5 z-10 text-black border border-[#A8A492]/40 text-[9px] font-bold px-2 py-0.2 rounded-full shadow-2xs"
        >
          {product.discountPercentage}% OFF
        </div>
      )}

      {/* Direct Product Image (Left Side - Compact size) */}
      <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden shrink-0 flex items-center justify-center relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Content & Details (Right Side - Compact vertical spacing) */}
      <div className="flex-1 min-w-0 flex flex-col justify-between py-0 pr-1 space-y-1">
        <div>
          {/* Brand */}
          <div className="text-[10px] text-slate-400 font-medium pr-14">
            <span>{product.brand}</span>
          </div>

          {/* Black Product Name Heading */}
          <h3 className="text-xs font-bold text-slate-900 line-clamp-1 leading-snug group-hover:text-purple-700 transition-colors">
            {product.name}
          </h3>

          {/* Simple Grey No-Cost EMI Text */}
          <div className="text-[10.5px] text-slate-500 font-medium">
            No-cost EMIs starting @ ₹{lowestEMIOption.monthlyAmount.toLocaleString('en-IN')}/mo
          </div>

          {/* Variant Chips */}
          {product.variants.length > 0 && (
            <div className="pt-0.5 flex flex-wrap gap-1">
              {product.variants.slice(0, 2).map((v) => (
                <span key={v.id} className="text-[8.5px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded-md font-medium">
                  {v.name}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Pricing & Rating Badge at Bottom Right End */}
        <div className="pt-0.5 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs sm:text-sm font-extrabold text-slate-900">
              ₹{product.discountedPrice.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.discountedPrice && (
              <span className="text-[9.5px] text-slate-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Star Rating Badge */}
          <div className="flex items-center gap-0.5 text-amber-600 bg-amber-50 border border-amber-200/80 px-1.5 py-0.2 rounded-full font-bold text-[9.5px] shrink-0">
            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
