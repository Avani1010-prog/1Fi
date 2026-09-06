'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Lock, Building, Truck, Sparkles } from 'lucide-react';
import { useShopStore } from '@/store/useShopStore';
import { MOCK_USER_MUTUAL_FUNDS } from '@/data/mockData';

export const CheckoutModal: React.FC = () => {
  const {
    selectedProduct,
    selectedVariant,
    selectedEMIPlan,
    isCheckoutOpen,
    closeCheckout,
    checkoutStep,
    setCheckoutStep,
    completeOrder,
    activeOrder
  } = useShopStore();

  // Address form state
  const [address, setAddress] = useState({
    fullName: 'Avani Sharma',
    phone: '+91 98765 43210',
    street: 'Flat 402, Magnolia Towers, Golf Course Rd',
    city: 'Gurugram',
    pincode: '122002'
  });

  const [selectedFolio, setSelectedFolio] = useState(MOCK_USER_MUTUAL_FUNDS.registeredFolios[0].folio);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen || !selectedProduct || !selectedEMIPlan) return null;

  const basePrice = selectedProduct.discountedPrice;
  const variantModifier = selectedVariant ? selectedVariant.priceModifier : 0;
  const finalPrice = basePrice + variantModifier;
  const monthlyAmount = Math.ceil(finalPrice / selectedEMIPlan.tenureMonths);
  const requiredCollateral = selectedEMIPlan.mutualFundLockRequired;

  const handleNextStep = async () => {
    if (checkoutStep === 1) {
      setCheckoutStep(2);
    } else if (checkoutStep === 2) {
      setCheckoutStep(3);
    } else if (checkoutStep === 3) {
      setIsSubmitting(true);
      try {
        // Call checkout REST API
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            productId: selectedProduct.id,
            variantId: selectedVariant?.id,
            planId: selectedEMIPlan.id,
            address
          })
        });
        const result = await response.json();

        const folioObj = MOCK_USER_MUTUAL_FUNDS.registeredFolios.find(f => f.folio === selectedFolio) || MOCK_USER_MUTUAL_FUNDS.registeredFolios[0];

        completeOrder({
          id: result.data.orderId,
          product: selectedProduct,
          selectedVariant: selectedVariant || undefined,
          selectedPlan: selectedEMIPlan,
          mutualFundCollateral: {
            folioNumber: folioObj.folio,
            fundName: folioObj.fundName,
            totalUnitsLocked: Math.ceil(requiredCollateral / folioObj.nav),
            lockedValue: requiredCollateral
          },
          deliveryAddress: address,
          mandateStatus: 'APPROVED',
          createdAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
        });
      } catch (err) {
        console.error('Checkout error:', err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-[#1e0b50] to-[#32107e] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-300" />
            <h3 className="font-extrabold text-sm tracking-wide">1Fi Application Checkout</h3>
          </div>
          {checkoutStep < 4 && (
            <button
              onClick={closeCheckout}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Step Indicator */}
        {checkoutStep < 4 && (
          <div className="bg-purple-50 px-5 py-2.5 border-b border-purple-100 flex items-center justify-between text-[11px] font-bold text-purple-900">
            <span className={checkoutStep >= 1 ? 'text-purple-700 font-extrabold' : 'text-slate-400'}>
              1. MF Lien Lock
            </span>
            <span>→</span>
            <span className={checkoutStep >= 2 ? 'text-purple-700 font-extrabold' : 'text-slate-400'}>
              2. Delivery Address
            </span>
            <span>→</span>
            <span className={checkoutStep >= 3 ? 'text-purple-700 font-extrabold' : 'text-slate-400'}>
              3. Mandate Setup
            </span>
          </div>
        )}

        {/* Step Content */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          
          {/* STEP 1: Mutual Fund Lien Selection */}
          {checkoutStep === 1 && (
            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="p-2 bg-purple-600 text-white rounded-xl">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-purple-950">Mutual Fund Collateral Authorization</div>
                  <div className="text-[11px] text-purple-700">
                    Lock ₹{requiredCollateral.toLocaleString('en-IN')} worth of MF units safely.
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800">Select Mutual Fund Folio to Pledge:</label>
                <div className="space-y-2">
                  {MOCK_USER_MUTUAL_FUNDS.registeredFolios.map((folio) => {
                    const isSelected = selectedFolio === folio.folio;
                    return (
                      <div
                        key={folio.folio}
                        onClick={() => setSelectedFolio(folio.folio)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-purple-50/70 border-purple-600 ring-2 ring-purple-600/20'
                            : 'bg-white border-slate-200 hover:border-purple-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900">{folio.fundName}</span>
                          <span className="text-[10px] text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full font-bold">
                            Folio #{folio.folio}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1 flex justify-between">
                          <span>Portfolio Value: ₹{folio.currentVal.toLocaleString('en-IN')}</span>
                          <span>Units: {folio.units}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600 leading-relaxed">
                ℹ️ <strong>1Fi Security Promise:</strong> Your mutual funds remain in your demat account under your ownership. They will be automatically released upon EMI completion.
              </div>
            </div>
          )}

          {/* STEP 2: Address Setup */}
          {checkoutStep === 2 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Truck className="w-4 h-4 text-purple-600" />
                <span>Shipping & Delivery Details</span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={address.phone}
                    onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Street Address</label>
                  <input
                    type="text"
                    value={address.street}
                    onChange={(e) => setAddress({ ...address, street: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">City</label>
                    <input
                      type="text"
                      value={address.city}
                      onChange={(e) => setAddress({ ...address, city: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Pincode</label>
                    <input
                      type="text"
                      value={address.pincode}
                      onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Auto-debit Mandate Setup */}
          {checkoutStep === 3 && (
            <div className="space-y-4 text-xs">
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-2xl flex items-center gap-3">
                <Building className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-bold text-emerald-950">E-Mandate Auto-Debit Authorization</div>
                  <div className="text-[11px] text-emerald-700">NACH / NPCI Auto-Debit setup for EMI payments</div>
                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Item:</span>
                  <span className="font-bold text-slate-900">{selectedProduct.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Monthly EMI:</span>
                  <span className="font-bold text-purple-900">₹{monthlyAmount.toLocaleString('en-IN')}/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tenure:</span>
                  <span className="font-bold text-slate-900">{selectedEMIPlan.tenureMonths} Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Interest Rate:</span>
                  <span className="font-bold text-emerald-600">0% No-Cost EMI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Pledged Collateral:</span>
                  <span className="font-bold text-purple-700">₹{requiredCollateral.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Success Screen */}
          {checkoutStep === 4 && activeOrder && (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1 bg-amber-100 text-purple-950 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-amber-500" /> 1Fi Application Approved
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-2">Order Successfully Placed!</h3>
                <p className="text-xs text-slate-500">
                  Order ID: <span className="font-bold text-purple-700">{activeOrder.id}</span>
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-2xl border border-purple-200 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-purple-200/60 pb-1.5">
                  <span className="text-slate-500">Product:</span>
                  <span className="font-bold text-slate-900">{activeOrder.product.name}</span>
                </div>
                <div className="flex justify-between border-b border-purple-200/60 pb-1.5">
                  <span className="text-slate-500">Monthly EMI:</span>
                  <span className="font-bold text-purple-900">
                    ₹{Math.ceil(activeOrder.product.discountedPrice / activeOrder.selectedPlan.tenureMonths).toLocaleString('en-IN')}/mo
                  </span>
                </div>
                <div className="flex justify-between border-b border-purple-200/60 pb-1.5">
                  <span className="text-slate-500">Mutual Fund Lien Locked:</span>
                  <span className="font-bold text-emerald-700">
                    ₹{activeOrder.mutualFundCollateral.lockedValue.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="font-extrabold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-md">
                    {activeOrder.mandateStatus}
                  </span>
                </div>
              </div>

              <button
                onClick={closeCheckout}
                className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold text-xs shadow-md transition-all"
              >
                Back to Shop Page
              </button>
            </div>
          )}

        </div>

        {/* Bottom Navigation Buttons */}
        {checkoutStep < 4 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
            {checkoutStep > 1 && (
              <button
                onClick={() => setCheckoutStep(checkoutStep - 1)}
                className="py-2.5 px-4 bg-white border border-slate-300 text-slate-700 rounded-xl font-bold text-xs hover:bg-slate-100 transition-colors"
              >
                Back
              </button>
            )}

            <button
              onClick={handleNextStep}
              disabled={isSubmitting}
              className="flex-1 py-3 px-4 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold text-xs shadow-md disabled:opacity-50 transition-all flex items-center justify-center gap-2"
            >
              <span>
                {isSubmitting
                  ? 'Processing Lien...'
                  : checkoutStep === 3
                  ? 'Authorize & Submit Order'
                  : 'Continue'}
              </span>
              {!isSubmitting && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
