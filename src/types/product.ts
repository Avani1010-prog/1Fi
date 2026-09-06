export interface ProductVariant {
  id: string;
  name: string;
  type: 'color' | 'storage' | 'size' | 'weight' | 'finish';
  value: string;
  priceModifier: number; // e.g. +5000 for 256GB
  inStock: boolean;
  colorHex?: string;
}

export interface EMIPlan {
  id: string;
  tenureMonths: number;
  interestRate: number; // 0 for No-Cost EMI
  isNoCost: boolean;
  monthlyAmount: number; // e.g., 4166
  totalAmount: number;
  processingFee: number;
  mutualFundLockRequired: number; // Collateral amount in INR
  interestSavingsAmount: number;
  popular?: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  brandLogo: string;
  category: 'electronics' | 'smartphones' | 'gold' | 'ev-vehicles' | 'watches' | 'appliances' | 'travel';
  categoryLabel: string;
  rating: number;
  reviewsCount: number;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  badge?: string; // "Bestseller", "No-Cost EMI", "Zero Downpayment", "Mutual Fund Special"
  featured: boolean;
  description: string;
  highlights: string[];
  specs: Record<string, string>;
  images: string[];
  variants: ProductVariant[];
  emiOptions: EMIPlan[];
  stockStatus: 'in_stock' | 'low_stock' | 'out_of_stock';
  warranty: string;
}

export interface OrderApplication {
  id: string;
  product: Product;
  selectedVariant?: ProductVariant;
  selectedPlan: EMIPlan;
  mutualFundCollateral: {
    folioNumber: string;
    fundName: string;
    totalUnitsLocked: number;
    lockedValue: number;
  };
  deliveryAddress: {
    fullName: string;
    street: string;
    city: string;
    pincode: string;
    phone: string;
  };
  mandateStatus: 'APPROVED' | 'PENDING' | 'SCHEDULED';
  createdAt: string;
}

export interface NearbyStoreItem {
  id: string;
  name: string;
  address: string;
  distanceKm: number;
  logo: string;
  category: string;
  pincode: string;
  isOpen: boolean;
}

export interface TopBrandItem {
  id: string;
  name: string;
  logo: string;
  emiText: string;
  category: string;
}
