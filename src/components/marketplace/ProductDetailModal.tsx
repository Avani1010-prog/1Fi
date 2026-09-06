'use client';

import React from 'react';
import { X, Check, ShieldCheck, Zap, Info, Lock, ArrowRight, Star } from 'lucide-react';
import { useShopStore } from '@/store/useShopStore';

export const ProductDetailModal: React.FC = () => {
  const {
    selectedProduct,
    selectedVariant,
    selectedEMIPlan,
    isDetailOpen,
    closeProductDetail,
    selectVariant,
    selectEMIPlan,
    startCheckout,
    availableCreditLimit
  } = useShopStore();

  if (!isDetailOpen || !selectedProduct) return null;

  // Calculate final adjusted price based on selected variant
  const basePrice = selectedProduct.discountedPrice;
  const variantModifier = selectedVariant ? selectedVariant.priceModifier : 0;
  const finalPrice = basePrice + variantModifier;

  // Check if mutual fund collateral is sufficient
  const requiredCollateral = selectedEMIPlan ? selectedEMIPlan.mutualFundLockRequired : Math.ceil(finalPrice * 1.15);
  const isLimitSufficient = availableCreditLimit >= requiredCollateral;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-sm p-0 sm:p-4 overflow-y-auto">
      {/* Modal Container */}
      <div className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
        
        {/* Header Bar */}
        <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
              {selectedProduct.categoryLabel}
            </span>
          </div>

          <button
            onClick={closeProductDetail}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {/* Main Product Image Carousel */}
          <div className="w-full h-52 bg-slate-50 rounded-2xl p-4 flex items-center justify-center border border-slate-100 relative">
            <img
              src={selectedProduct.images[0]}
              alt={selectedProduct.name}
              className="max-h-full max-w-full object-contain"
            />
            
            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur border border-slate-200 px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-700 shadow-sm flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{selectedProduct.rating}</span>
            </div>
          </div>

          {/* Title & Price Header */}
          <div className="space-y-1.5">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">
              {selectedProduct.brand}
            </div>
            <h2 className="text-lg font-extrabold text-slate-900 leading-snug">
              {selectedProduct.name}
            </h2>

            {/* Pricing Summary */}
            <div className="flex items-baseline gap-3 pt-1">
              <span className="text-2xl font-black text-slate-900">
                ₹{finalPrice.toLocaleString('en-IN')}
              </span>
              {selectedProduct.originalPrice > finalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  ₹{(selectedProduct.originalPrice + variantModifier).toLocaleString('en-IN')}
                </span>
              )}
              {selectedProduct.discountPercentage > 0 && (
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  Save {selectedProduct.discountPercentage}%
                </span>
              )}
            </div>
          </div>

          {/* Variants Selector */}
          {selectedProduct.variants.length > 0 && (
            <div className="space-y-2.5">
              <div className="text-xs font-bold text-slate-800 flex items-center justify-between">
                <span>Select Variant:</span>
                {selectedVariant && (
                  <span className="text-purple-600 font-semibold">{selectedVariant.name}</span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProduct.variants.map((variant) => {
                  const isSelected = selectedVariant?.id === variant.id;
                  return (
                    <button
                      key={variant.id}
                      onClick={() => selectVariant(variant)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-purple-700 text-white border-purple-700 shadow-md'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-purple-300'
                      }`}
                    >
                      {variant.colorHex && (
                        <span
                          className="w-3 h-3 rounded-full border border-white/50"
                          style={{ backgroundColor: variant.colorHex }}
                        ></span>
                      )}
                      <span>{variant.name}</span>
                      {variant.priceModifier > 0 && (
                        <span className={`text-[10px] ${isSelected ? 'text-purple-200' : 'text-slate-400'}`}>
                          (+₹{variant.priceModifier.toLocaleString('en-IN')})
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Interactive 1Fi No-Cost EMI Plan Selector */}
          <div className="space-y-3 bg-purple-50/60 p-4 rounded-2xl border border-purple-200/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-purple-900">
                <Zap className="w-4 h-4 text-amber-500 fill-amber-400" />
                <span>Select 1Fi No-Cost EMI Plan</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                0% Interest • ₹0 Processing Fee
              </span>
            </div>

            {/* EMI Plans Grid */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {selectedProduct.emiOptions.map((plan) => {
                // Calculate monthly amount for final price
                const monthly = Math.ceil(finalPrice / plan.tenureMonths);
                const isSelected = selectedEMIPlan?.id === plan.id;

                return (
                  <div
                    key={plan.id}
                    onClick={() => selectEMIPlan(plan)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all relative ${
                      isSelected
                        ? 'bg-white border-purple-600 ring-2 ring-purple-600/30 shadow-md'
                        : 'bg-white/80 border-slate-200 hover:border-purple-300'
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-2 right-2 bg-amber-400 text-purple-950 text-[9px] font-extrabold px-2 py-0.2 rounded-full uppercase tracking-wider">
                        Most Popular
                      </span>
                    )}

                    <div className="text-[11px] font-bold text-slate-500">
                      {plan.tenureMonths} Months Plan
                    </div>
                    <div className="text-base font-black text-purple-900 mt-0.5">
                      ₹{monthly.toLocaleString('en-IN')}
                      <span className="text-[10px] font-normal text-slate-500">/mo</span>
                    </div>

                    <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Save ₹{plan.interestSavingsAmount.toLocaleString('en-IN')} Interest</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mutual Fund Collateral Information Box */}
            {selectedEMIPlan && (
              <div className="bg-white p-3 rounded-xl border border-purple-200 text-xs space-y-2 mt-2">
                <div className="flex items-center justify-between text-slate-800 font-bold">
                  <div className="flex items-center gap-1.5 text-purple-800">
                    <Lock className="w-3.5 h-3.5 text-purple-600" />
                    <span>Mutual Fund Collateral Lock</span>
                  </div>
                  <span className="font-extrabold text-purple-900">
                    ₹{requiredCollateral.toLocaleString('en-IN')}
                  </span>
                </div>

                <p className="text-[11px] text-slate-500 leading-relaxed">
                  No credit check required. This amount will be locked safely in your existing Mutual Fund portfolio. You continue earning market returns while paying easy EMIs!
                </p>

                {/* Collateral Limit Check Alert */}
                {!isLimitSufficient && (
                  <div className="p-2 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg text-[11px] font-medium flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Required collateral exceeds current available limit. Link more folios to proceed.</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Product Highlights */}
          <div className="space-y-2 pt-1">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Key Highlights</h3>
            <ul className="space-y-1.5">
              {selectedProduct.highlights.map((h, i) => (
                <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specs Table */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Specifications</h3>
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/60 divide-y divide-slate-200/60 text-xs">
              {Object.entries(selectedProduct.specs).map(([key, val]) => (
                <div key={key} className="py-1.5 flex justify-between gap-4">
                  <span className="text-slate-500 font-medium">{key}</span>
                  <span className="text-slate-800 font-semibold text-right">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="p-4 bg-white border-t border-slate-100 shrink-0 flex items-center justify-between gap-3 shadow-lg">
          <div>
            <div className="text-[10px] text-slate-400 font-medium">Selected Plan</div>
            <div className="text-sm font-bold text-purple-900">
              {selectedEMIPlan ? (
                <>
                  ₹{Math.ceil(finalPrice / selectedEMIPlan.tenureMonths).toLocaleString('en-IN')}/mo x {selectedEMIPlan.tenureMonths}m
                </>
              ) : (
                'Select a plan'
              )}
            </div>
          </div>

          <button
            onClick={() => {
              closeProductDetail();
              startCheckout();
            }}
            disabled={!selectedEMIPlan || !isLimitSufficient}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white rounded-xl font-bold text-xs shadow-lg shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            <span>Proceed with 1Fi Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
