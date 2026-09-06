import { create } from 'zustand';
import { Product, ProductVariant, EMIPlan, OrderApplication } from '@/types/product';
import { MARKETPLACE_PRODUCTS, MOCK_USER_MUTUAL_FUNDS } from '@/data/mockData';

type TabType = 'top_brands' | 'nearby_stores' | 'marketplace';
type SortOption = 'popular' | 'price_low' | 'price_high' | 'emi_low';

interface ShopState {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;

  // Marketplace filter & search
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  
  // Selected product modal state
  selectedProduct: Product | null;
  selectedVariant: ProductVariant | null;
  selectedEMIPlan: EMIPlan | null;
  isDetailOpen: boolean;
  
  // Checkout flow state
  isCheckoutOpen: boolean;
  activeOrder: OrderApplication | null;
  checkoutStep: number; // 1: collateral confirm, 2: address & nominee, 3: mandate, 4: success
  
  // User Mutual Fund Credit Info
  totalPortfolioValue: number;
  availableCreditLimit: number;
  pledgedAmount: number;

  // Actions
  openProductDetail: (product: Product) => void;
  closeProductDetail: () => void;
  selectVariant: (variant: ProductVariant) => void;
  selectEMIPlan: (plan: EMIPlan) => void;
  startCheckout: () => void;
  closeCheckout: () => void;
  setCheckoutStep: (step: number) => void;
  completeOrder: (order: OrderApplication) => void;
  resetFilters: () => void;
}

export const useShopStore = create<ShopState>((set, get) => ({
  activeTab: 'marketplace', // Default to assignment target tab
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedCategory: 'all',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  sortBy: 'popular',
  setSortBy: (sort) => set({ sortBy: sort }),

  selectedProduct: null,
  selectedVariant: null,
  selectedEMIPlan: null,
  isDetailOpen: false,

  isCheckoutOpen: false,
  activeOrder: null,
  checkoutStep: 1,

  totalPortfolioValue: MOCK_USER_MUTUAL_FUNDS.totalPortfolioValue,
  availableCreditLimit: MOCK_USER_MUTUAL_FUNDS.availableCreditLimit,
  pledgedAmount: MOCK_USER_MUTUAL_FUNDS.pledgedAmount,

  openProductDetail: (product) => {
    const defaultVariant = product.variants.length > 0 ? product.variants[0] : null;
    const defaultPlan = product.emiOptions.length > 0 ? (product.emiOptions.find(p => p.popular) || product.emiOptions[0]) : null;
    set({
      selectedProduct: product,
      selectedVariant: defaultVariant,
      selectedEMIPlan: defaultPlan,
      isDetailOpen: true
    });
  },

  closeProductDetail: () => set({ isDetailOpen: false }),

  selectVariant: (variant) => set({ selectedVariant: variant }),

  selectEMIPlan: (plan) => set({ selectedEMIPlan: plan }),

  startCheckout: () => set({ isCheckoutOpen: true, checkoutStep: 1 }),

  closeCheckout: () => set({ isCheckoutOpen: false }),

  setCheckoutStep: (step) => set({ checkoutStep: step }),

  completeOrder: (order) => {
    const currentLimit = get().availableCreditLimit;
    const currentPledged = get().pledgedAmount;
    const requiredLock = order.selectedPlan.mutualFundLockRequired;

    set({
      activeOrder: order,
      checkoutStep: 4,
      availableCreditLimit: Math.max(0, currentLimit - requiredLock),
      pledgedAmount: currentPledged + requiredLock
    });
  },

  resetFilters: () => set({
    selectedCategory: 'all',
    searchQuery: '',
    sortBy: 'popular'
  })
}));
