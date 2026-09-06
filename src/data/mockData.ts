import { Product, TopBrandItem, NearbyStoreItem } from '@/types/product';

export const TOP_BRANDS_DATA: TopBrandItem[] = [
  {
    id: 'tb-1',
    name: 'Air India',
    logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=150&auto=format&fit=crop&q=80',
    emiText: 'No-cost EMIs upto 18 months',
    category: 'Travel & Flights'
  },
  {
    id: 'tb-2',
    name: 'Apple Premium Reseller',
    logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=150&auto=format&fit=crop&q=80',
    emiText: 'No-cost EMIs upto 24 months',
    category: 'Electronics & Mobiles'
  },
  {
    id: 'tb-3',
    name: 'CaratLane',
    logo: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=150&auto=format&fit=crop&q=80',
    emiText: 'No-cost EMIs upto 6 months',
    category: 'Jewelry & Diamonds'
  },
  {
    id: 'tb-4',
    name: 'Tanishq Gold Coin',
    logo: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=150&auto=format&fit=crop&q=80',
    emiText: 'No-cost EMIs upto 6 months',
    category: 'Gold & Bullion'
  },
  {
    id: 'tb-5',
    name: 'Tanishq Studded',
    logo: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=150&auto=format&fit=crop&q=80',
    emiText: 'No-cost EMIs upto 12 months',
    category: 'Diamond Jewelry'
  },
  {
    id: 'tb-6',
    name: 'Vijay Sales',
    logo: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=150&auto=format&fit=crop&q=80',
    emiText: 'No-cost EMIs upto 6 months',
    category: 'Electronics & Appliances'
  },
  {
    id: 'tb-7',
    name: 'Wakefit',
    logo: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=150&auto=format&fit=crop&q=80',
    emiText: 'No-cost EMIs upto 12 months',
    category: 'Home & Furniture'
  },
  {
    id: 'tb-8',
    name: 'World of Titan',
    logo: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&auto=format&fit=crop&q=80',
    emiText: 'No-cost EMIs upto 24 months',
    category: 'Watches & Accessories'
  },
  {
    id: 'tb-9',
    name: 'Yatra Hotels & Holidays',
    logo: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=150&auto=format&fit=crop&q=80',
    emiText: 'No-cost EMIs upto 24 months',
    category: 'Travel & Vacations'
  }
];

export const NEARBY_STORES_DATA: NearbyStoreItem[] = [
  {
    id: 'ns-1',
    name: 'Pacholi Suzuki Railway Rd',
    address: '64/9, New Railway Rd, near DSD college, Subhash Nagar, Sector 8, Gurugram, Haryana, 122001',
    distanceKm: 1.0,
    logo: 'SUZUKI',
    category: 'Two Wheelers',
    pincode: '122001',
    isOpen: true
  },
  {
    id: 'ns-2',
    name: 'Pacholi Suzuki Rajiv Chowk',
    address: '6/38, Rajiv Chowk, Sector 33, Rajiv Chowk, Gurugram, Haryana, 122001',
    distanceKm: 1.4,
    logo: 'SUZUKI',
    category: 'Two Wheelers',
    pincode: '122001',
    isOpen: true
  },
  {
    id: 'ns-3',
    name: 'Malwa Honda Khandsa Rd',
    address: '60, Khandsa Rd, Pace City I, Sector 10A, Gurugram, Haryana, 122001',
    distanceKm: 2.1,
    logo: 'HONDA',
    category: 'Two Wheelers',
    pincode: '122001',
    isOpen: true
  },
  {
    id: 'ns-4',
    name: 'Atelier Forbidden Journey',
    address: 'Sector 40, Gurugram, Haryana, 122001',
    distanceKm: 3.3,
    logo: 'ATELIER',
    category: 'Boutique & Fashion',
    pincode: '122001',
    isOpen: true
  },
  {
    id: 'ns-5',
    name: 'Ashoka Suzuki',
    address: 'Khata No 271, 316, Badshahpur Sohna Rd, Gurugram, Haryana, 122001',
    distanceKm: 3.6,
    logo: 'SUZUKI',
    category: 'Two Wheelers',
    pincode: '122001',
    isOpen: true
  },
  {
    id: 'ns-6',
    name: 'Charger On Wheels',
    address: 'Orchid Business Park, Near Subhash Chowk, Gurugram, Haryana, 122101',
    distanceKm: 4.1,
    logo: 'CHARGER',
    category: 'EV Charging & Bikes',
    pincode: '122101',
    isOpen: true
  },
  {
    id: 'ns-7',
    name: 'TripBouquet',
    address: '241, Tower B, Spazedge, near Dmart, Gurugram, Haryana, 122018',
    distanceKm: 4.9,
    logo: 'TRIPBOUQUET',
    category: 'Travel Agency',
    pincode: '122018',
    isOpen: true
  }
];

export const MARKETPLACE_PRODUCTS: Product[] = [
  {
    id: 'prod-iphone-16-pro',
    name: 'Apple iPhone 16 Pro',
    brand: 'Apple',
    brandLogo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=100&auto=format&fit=crop&q=80',
    category: 'smartphones',
    categoryLabel: 'Smartphones & Mobile',
    rating: 4.9,
    reviewsCount: 1420,
    originalPrice: 129900,
    discountedPrice: 119900,
    discountPercentage: 8,
    badge: 'No-Cost EMI',
    featured: true,
    description: 'iPhone 16 Pro features a strong and light Grade 5 titanium design with a larger 6.3-inch Super Retina XDR display, Camera Control button, and A18 Pro chip. Buy with 0% interest backed by your Mutual Funds.',
    highlights: [
      'Grade 5 Titanium finish with textured matte glass back',
      'A18 Pro chip with 6-core GPU for console-level gaming',
      '48MP Fusion camera with 5x Telephoto optical zoom',
      'Zero credit score impact - collateralized by your MF folio'
    ],
    specs: {
      'Display': '6.3-inch Super Retina XDR OLED',
      'Processor': 'Apple A18 Pro Chip',
      'Camera': '48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto',
      'Battery': 'Up to 27 hours video playback',
      'OS': 'iOS 18',
      'Weight': '199g'
    },
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v1', name: '128GB', type: 'storage', value: '128GB', priceModifier: 0, inStock: true },
      { id: 'v2', name: '256GB', type: 'storage', value: '256GB', priceModifier: 10000, inStock: true },
      { id: 'v3', name: '512GB', type: 'storage', value: '512GB', priceModifier: 30000, inStock: true },
      { id: 'v4', name: 'Natural Titanium', type: 'color', value: 'Natural Titanium', priceModifier: 0, inStock: true, colorHex: '#a8a59f' },
      { id: 'v5', name: 'Desert Titanium', type: 'color', value: 'Desert Titanium', priceModifier: 0, inStock: true, colorHex: '#c7b39a' },
      { id: 'v6', name: 'Black Titanium', type: 'color', value: 'Black Titanium', priceModifier: 0, inStock: true, colorHex: '#3b3b3c' }
    ],
    emiOptions: [
      {
        id: 'emi-3m',
        tenureMonths: 3,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 39967,
        totalAmount: 119900,
        processingFee: 0,
        mutualFundLockRequired: 135000,
        interestSavingsAmount: 4850
      },
      {
        id: 'emi-6m',
        tenureMonths: 6,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 19983,
        totalAmount: 119900,
        processingFee: 0,
        mutualFundLockRequired: 135000,
        interestSavingsAmount: 8900
      },
      {
        id: 'emi-12m',
        tenureMonths: 12,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 9991,
        totalAmount: 119900,
        processingFee: 0,
        mutualFundLockRequired: 135000,
        interestSavingsAmount: 16800,
        popular: true
      },
      {
        id: 'emi-24m',
        tenureMonths: 24,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 4995,
        totalAmount: 119900,
        processingFee: 0,
        mutualFundLockRequired: 135000,
        interestSavingsAmount: 31200
      }
    ],
    stockStatus: 'in_stock',
    warranty: '1 Year Apple Official India Warranty'
  },
  {
    id: 'prod-tanishq-gold-coin',
    name: 'Tanishq 24K 999 Pure 10g Gold Coin',
    brand: 'Tanishq',
    brandLogo: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=100&auto=format&fit=crop&q=80',
    category: 'gold',
    categoryLabel: 'Gold & Bullion',
    rating: 5.0,
    reviewsCount: 3890,
    originalPrice: 78000,
    discountedPrice: 74500,
    discountPercentage: 4,
    badge: 'Zero Downpayment',
    featured: true,
    description: 'Hallmarked 24 Karat 999 Purity 10 Grams Yellow Gold Coin from Tanishq by Tata. Comes in tamper-proof Swiss blister packaging with tamper certificate.',
    highlights: [
      '24 Karat 999 Fine Gold certified by BIS Hallmark',
      'Tamper-proof Swiss CERTICARD packaging',
      'Guaranteed buyback policy across 400+ Tanishq outlets',
      'Zero processing fee with 1Fi Mutual Fund pledge'
    ],
    specs: {
      'Purity': '24K (999.0 Fine Gold)',
      'Weight': '10 Grams',
      'Dimension': '22 mm diameter',
      'Packaging': 'Swiss CertiCard Blister',
      'Brand Owner': 'Tata Product'
    },
    images: [
      'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'vg1', name: '10 Grams', type: 'weight', value: '10g', priceModifier: 0, inStock: true },
      { id: 'vg2', name: '20 Grams', type: 'weight', value: '20g', priceModifier: 74500, inStock: true },
      { id: 'vg3', name: '50 Grams', type: 'weight', value: '50g', priceModifier: 298000, inStock: true }
    ],
    emiOptions: [
      {
        id: 'emi-gold-3m',
        tenureMonths: 3,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 24833,
        totalAmount: 74500,
        processingFee: 0,
        mutualFundLockRequired: 85000,
        interestSavingsAmount: 3100
      },
      {
        id: 'emi-gold-6m',
        tenureMonths: 6,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 12416,
        totalAmount: 74500,
        processingFee: 0,
        mutualFundLockRequired: 85000,
        interestSavingsAmount: 5800,
        popular: true
      },
      {
        id: 'emi-gold-12m',
        tenureMonths: 12,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 6208,
        totalAmount: 74500,
        processingFee: 0,
        mutualFundLockRequired: 85000,
        interestSavingsAmount: 11200
      }
    ],
    stockStatus: 'in_stock',
    warranty: 'Lifetime Purity & Buyback Guarantee by Tanishq'
  },
  {
    id: 'prod-ather-450x',
    name: 'Ather 450X Gen 3.7 Electric Scooter',
    brand: 'Ather Energy',
    brandLogo: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=100&auto=format&fit=crop&q=80',
    category: 'ev-vehicles',
    categoryLabel: 'Electric Vehicles',
    rating: 4.8,
    reviewsCount: 840,
    originalPrice: 159999,
    discountedPrice: 144999,
    discountPercentage: 9,
    badge: 'Mutual Fund Special',
    featured: true,
    description: 'The revolutionary Ather 450X EV scooter with Pro Pack, 150 km certified range, Warp mode (0-40 km/h in 3.3s), and Google Maps navigation touch dashboard.',
    highlights: [
      '3.7 kWh Certified IP67 Lithium-ion Battery pack',
      'True Range: 110 km (Eco mode), Top Speed: 90 km/h',
      '7-inch TFT capacitive touchscreen dashboard with LTE',
      'Zero paper downpayment using 1Fi Mutual Fund collateral'
    ],
    specs: {
      'Motor Power': '6.4 kW PMSM Motor',
      'Battery Capacity': '3.7 kWh',
      'Fast Charging': '0-80% in 4h 30m',
      'Brakes': 'CBS Dual Disc Brakes',
      'Range': '150 km certified (110 km true range)'
    },
    images: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'va1', name: 'Space Grey', type: 'color', value: 'Space Grey', priceModifier: 0, inStock: true, colorHex: '#4a4a4a' },
      { id: 'va2', name: 'Cosmic Black', type: 'color', value: 'Cosmic Black', priceModifier: 0, inStock: true, colorHex: '#1a1a1a' },
      { id: 'va3', name: 'Salt Green', type: 'color', value: 'Salt Green', priceModifier: 0, inStock: true, colorHex: '#a3b899' }
    ],
    emiOptions: [
      {
        id: 'emi-ev-6m',
        tenureMonths: 6,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 24166,
        totalAmount: 144999,
        processingFee: 0,
        mutualFundLockRequired: 165000,
        interestSavingsAmount: 11200
      },
      {
        id: 'emi-ev-12m',
        tenureMonths: 12,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 12083,
        totalAmount: 144999,
        processingFee: 0,
        mutualFundLockRequired: 165000,
        interestSavingsAmount: 21500
      },
      {
        id: 'emi-ev-24m',
        tenureMonths: 24,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 6041,
        totalAmount: 144999,
        processingFee: 0,
        mutualFundLockRequired: 165000,
        interestSavingsAmount: 39800,
        popular: true
      }
    ],
    stockStatus: 'in_stock',
    warranty: '3 Years Scooter & 5 Years Battery Warranty'
  },
  {
    id: 'prod-macbook-air-m3',
    name: 'MacBook Air M3 (15-inch, 16GB, 512GB)',
    brand: 'Apple',
    brandLogo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=100&auto=format&fit=crop&q=80',
    category: 'electronics',
    categoryLabel: 'Laptops & Computers',
    rating: 4.9,
    reviewsCount: 960,
    originalPrice: 144900,
    discountedPrice: 134900,
    discountPercentage: 7,
    badge: 'No-Cost EMI',
    featured: false,
    description: 'Supercharged by the M3 chip, the 15-inch MacBook Air combines extreme performance with up to 18 hours of battery life in an impossibly thin aluminum enclosure.',
    highlights: [
      'Apple M3 chip with 8-core CPU and 10-core GPU',
      '15.3-inch Liquid Retina display with 500 nits brightness',
      '1080p FaceTime HD camera & 6-speaker sound system with Spatial Audio',
      '16GB unified memory & 512GB superfast SSD storage'
    ],
    specs: {
      'Display': '15.3-inch Liquid Retina Display',
      'RAM': '16GB Unified Memory',
      'Storage': '512GB SSD',
      'Processor': 'Apple M3 8-core CPU / 10-core GPU',
      'Battery': 'Up to 18 Hours',
      'Weight': '1.51 kg'
    },
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'vm1', name: 'Midnight', type: 'color', value: 'Midnight', priceModifier: 0, inStock: true, colorHex: '#1d232a' },
      { id: 'vm2', name: 'Starlight', type: 'color', value: 'Starlight', priceModifier: 0, inStock: true, colorHex: '#e8e5d8' },
      { id: 'vm3', name: 'Space Grey', type: 'color', value: 'Space Grey', priceModifier: 0, inStock: true, colorHex: '#58595b' }
    ],
    emiOptions: [
      {
        id: 'emi-mac-6m',
        tenureMonths: 6,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 22483,
        totalAmount: 134900,
        processingFee: 0,
        mutualFundLockRequired: 150000,
        interestSavingsAmount: 10400
      },
      {
        id: 'emi-mac-12m',
        tenureMonths: 12,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 11241,
        totalAmount: 134900,
        processingFee: 0,
        mutualFundLockRequired: 150000,
        interestSavingsAmount: 18900,
        popular: true
      },
      {
        id: 'emi-mac-24m',
        tenureMonths: 24,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 5620,
        totalAmount: 134900,
        processingFee: 0,
        mutualFundLockRequired: 150000,
        interestSavingsAmount: 35100
      }
    ],
    stockStatus: 'in_stock',
    warranty: '1 Year AppleCare Warranty'
  },
  {
    id: 'prod-sony-bravia-55',
    name: 'Sony Bravia 55" 4K Ultra HD Smart OLED TV',
    brand: 'Sony',
    brandLogo: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=100&auto=format&fit=crop&q=80',
    category: 'appliances',
    categoryLabel: 'TV & Home Appliances',
    rating: 4.7,
    reviewsCount: 520,
    originalPrice: 149900,
    discountedPrice: 129990,
    discountPercentage: 13,
    badge: 'Bestseller',
    featured: false,
    description: 'Cognitive Processor XR powers intense OLED contrast with pure blacks, high peak brightness, and Acoustic Surface Audio+ sound directly from the screen.',
    highlights: [
      'XR OLED Contrast Pro for deep dark blacks and vivid color',
      'Google TV with hands-free voice search',
      '120Hz refresh rate & HDMI 2.1 for PS5 gaming',
      'Acoustic Surface Audio+ screen speaker tech'
    ],
    specs: {
      'Screen Size': '55 inches (139 cm)',
      'Display Tech': '4K HDR OLED',
      'Refresh Rate': '120 Hz',
      'Sound Output': '50W Acoustic Surface Audio',
      'Smart TV OS': 'Google TV'
    },
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'vs1', name: '55-inch', type: 'size', value: '55"', priceModifier: 0, inStock: true },
      { id: 'vs2', name: '65-inch', type: 'size', value: '65"', priceModifier: 50000, inStock: true }
    ],
    emiOptions: [
      {
        id: 'emi-tv-6m',
        tenureMonths: 6,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 21665,
        totalAmount: 129990,
        processingFee: 0,
        mutualFundLockRequired: 145000,
        interestSavingsAmount: 9800
      },
      {
        id: 'emi-tv-12m',
        tenureMonths: 12,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 10832,
        totalAmount: 129990,
        processingFee: 0,
        mutualFundLockRequired: 145000,
        interestSavingsAmount: 18200,
        popular: true
      }
    ],
    stockStatus: 'in_stock',
    warranty: '2 Years Comprehensive Warranty by Sony India'
  },
  {
    id: 'prod-titan-nebula-gold-watch',
    name: 'Titan Nebula 18K Solid Gold Automatic Watch',
    brand: 'Titan',
    brandLogo: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&auto=format&fit=crop&q=80',
    category: 'watches',
    categoryLabel: 'Luxury Watches',
    rating: 4.9,
    reviewsCount: 210,
    originalPrice: 235000,
    discountedPrice: 210000,
    discountPercentage: 11,
    badge: 'Mutual Fund Special',
    featured: true,
    description: 'Handcrafted solid 18K Yellow Gold automatic timepiece featuring sapphire crystal glass, genuine alligator leather strap, and Swiss precision movement.',
    highlights: [
      'Solid 18K Gold case hallmarked for purity',
      'Automatic self-winding Swiss mechanical movement',
      'Scratch-resistant Sapphire crystal dial lens',
      'Zero credit check using 1Fi Mutual Fund lien system'
    ],
    specs: {
      'Case Material': '18K Yellow Gold',
      'Movement': 'Automatic Self-Winding 25 Jewels',
      'Glass': 'Scratch-resistant Sapphire Crystal',
      'Strap': 'Genuine Alligator Leather',
      'Water Resistance': '50 Meters (5 ATM)'
    },
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'vw1', name: 'Champagne Dial', type: 'color', value: 'Champagne', priceModifier: 0, inStock: true },
      { id: 'vw2', name: 'Silver Sunray Dial', type: 'color', value: 'Silver', priceModifier: 0, inStock: true }
    ],
    emiOptions: [
      {
        id: 'emi-watch-12m',
        tenureMonths: 12,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 17500,
        totalAmount: 210000,
        processingFee: 0,
        mutualFundLockRequired: 240000,
        interestSavingsAmount: 29400
      },
      {
        id: 'emi-watch-24m',
        tenureMonths: 24,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 8750,
        totalAmount: 210000,
        processingFee: 0,
        mutualFundLockRequired: 240000,
        interestSavingsAmount: 54600,
        popular: true
      }
    ],
    stockStatus: 'in_stock',
    warranty: '5 Years International Warranty by Titan'
  },
  {
    id: 'prod-wakefit-ortho-mattress',
    name: 'Wakefit Orthopedic Premium Memory Foam Mattress',
    brand: 'Wakefit',
    brandLogo: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=100&auto=format&fit=crop&q=80',
    category: 'appliances',
    categoryLabel: 'Home & Furniture',
    rating: 4.7,
    reviewsCount: 5400,
    originalPrice: 24999,
    discountedPrice: 18499,
    discountPercentage: 26,
    badge: 'No-Cost EMI',
    featured: false,
    description: 'Designed with Trushape spinal alignment technology and body-adaptive memory foam for back pain relief and zero motion transfer.',
    highlights: [
      'Next-gen High Resilience Foam layer',
      'Removable & washable breathable outer cover',
      '100 nights trial policy',
      'Low monthly payment starting at ₹3,083/mo'
    ],
    specs: {
      'Dimensions': '78 x 72 x 8 Inches (King Size)',
      'Primary Material': 'NextGen Memory Foam',
      'Firmness': 'Medium Firm (7/10)',
      'Cover': 'GSM Premium Zipper Cover'
    },
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c517a?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'vmat1', name: 'Queen Size (78x60)', type: 'size', value: 'Queen', priceModifier: -3000, inStock: true },
      { id: 'vmat2', name: 'King Size (78x72)', type: 'size', value: 'King', priceModifier: 0, inStock: true }
    ],
    emiOptions: [
      {
        id: 'emi-mat-3m',
        tenureMonths: 3,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 6166,
        totalAmount: 18499,
        processingFee: 0,
        mutualFundLockRequired: 22000,
        interestSavingsAmount: 850
      },
      {
        id: 'emi-mat-6m',
        tenureMonths: 6,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 3083,
        totalAmount: 18499,
        processingFee: 0,
        mutualFundLockRequired: 22000,
        interestSavingsAmount: 1540,
        popular: true
      }
    ],
    stockStatus: 'in_stock',
    warranty: '10 Years Manufacturer Warranty'
  },
  {
    id: 'prod-bose-qc-ultra',
    name: 'Bose QuietComfort Ultra Wireless Headphones',
    brand: 'Bose',
    brandLogo: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&auto=format&fit=crop&q=80',
    category: 'electronics',
    categoryLabel: 'Audio & Wearables',
    rating: 4.8,
    reviewsCount: 740,
    originalPrice: 39900,
    discountedPrice: 35900,
    discountPercentage: 10,
    badge: 'No-Cost EMI',
    featured: false,
    description: 'World-class noise cancellation, breakthrough spatialized audio, and CustomTune technology that personalizes sound to your ear shape.',
    highlights: [
      'Bose Immersive Audio for spatial soundstage',
      'Quiet, Aware & Immersion noise-canceling modes',
      'Up to 24 hours battery life per charge',
      'Ultra comfortable plush protein leather earcups'
    ],
    specs: {
      'Battery Life': 'Up to 24 Hours',
      'Connectivity': 'Bluetooth 5.3 with multipoint',
      'Microphones': '12-mic system for crystal clear calls',
      'Weight': '254g'
    },
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'vb1', name: 'Black', type: 'color', value: 'Black', priceModifier: 0, inStock: true, colorHex: '#111' },
      { id: 'vb2', name: 'White Smoke', type: 'color', value: 'White Smoke', priceModifier: 0, inStock: true, colorHex: '#eaeaea' }
    ],
    emiOptions: [
      {
        id: 'emi-bose-3m',
        tenureMonths: 3,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 11966,
        totalAmount: 35900,
        processingFee: 0,
        mutualFundLockRequired: 42000,
        interestSavingsAmount: 1550
      },
      {
        id: 'emi-bose-6m',
        tenureMonths: 6,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 5983,
        totalAmount: 35900,
        processingFee: 0,
        mutualFundLockRequired: 42000,
        interestSavingsAmount: 2950,
        popular: true
      }
    ],
    stockStatus: 'in_stock',
    warranty: '1 Year Bose Official Warranty'
  },
  {
    id: 'prod-samsung-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra 5G (12GB RAM, 256GB)',
    brand: 'Samsung',
    brandLogo: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&auto=format&fit=crop&q=80',
    category: 'smartphones',
    categoryLabel: 'Smartphones & Mobile',
    rating: 4.8,
    reviewsCount: 1150,
    originalPrice: 139999,
    discountedPrice: 129999,
    discountPercentage: 7,
    badge: 'Zero Downpayment',
    featured: false,
    description: 'Welcome to the era of mobile AI. With Galaxy S24 Ultra, unleash your creativity with Circle to Search, Live Translate, and 200MP camera zoom backed by titanium frame.',
    highlights: [
      'Built-in Galaxy AI with Circle to Search & Note Assist',
      'Titanium shield frame with Corning Gorilla Armor glass',
      '200MP main camera with 100x Space Zoom & built-in S Pen',
      'No-cost EMI up to 12 months with 1Fi Mutual Fund pledge'
    ],
    specs: {
      'Display': '6.8-inch Dynamic AMOLED 2X QHD+ (120Hz)',
      'Processor': 'Snapdragon 8 Gen 3 for Galaxy',
      'Camera': '200MP + 50MP + 12MP + 10MP',
      'Battery': '5000 mAh with 45W Fast Charging'
    },
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'vs24-1', name: '256GB', type: 'storage', value: '256GB', priceModifier: 0, inStock: true },
      { id: 'vs24-2', name: '512GB', type: 'storage', value: '512GB', priceModifier: 10000, inStock: true },
      { id: 'vs24-c1', name: 'Titanium Gray', type: 'color', value: 'Titanium Gray', priceModifier: 0, inStock: true, colorHex: '#777777' },
      { id: 'vs24-c2', name: 'Titanium Violet', type: 'color', value: 'Titanium Violet', priceModifier: 0, inStock: true, colorHex: '#524368' }
    ],
    emiOptions: [
      {
        id: 'emi-s24-6m',
        tenureMonths: 6,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 21666,
        totalAmount: 129999,
        processingFee: 0,
        mutualFundLockRequired: 145000,
        interestSavingsAmount: 9900
      },
      {
        id: 'emi-s24-12m',
        tenureMonths: 12,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 10833,
        totalAmount: 129999,
        processingFee: 0,
        mutualFundLockRequired: 145000,
        interestSavingsAmount: 18100,
        popular: true
      }
    ],
    stockStatus: 'in_stock',
    warranty: '1 Year Samsung India Warranty'
  },
  {
    id: 'prod-air-india-holiday',
    name: 'Air India International Luxury Holiday Voucher',
    brand: 'Air India',
    brandLogo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=100&auto=format&fit=crop&q=80',
    category: 'travel',
    categoryLabel: 'Travel & Vacations',
    rating: 4.9,
    reviewsCount: 310,
    originalPrice: 95000,
    discountedPrice: 85000,
    discountPercentage: 11,
    badge: 'No-Cost EMI',
    featured: false,
    description: 'Fly business or economy to Europe, Southeast Asia, or Dubai with Air India holiday vouchers. Includes 5-star hotel accommodations, flights, and airport lounge access.',
    highlights: [
      'Valid across all Air India international destinations',
      'Includes flights + 5-Star Hotel Stay + Breakfast',
      '1 Year validity with flexible reschedule policy',
      'Pay in 12 easy zero-interest monthly installments'
    ],
    specs: {
      'Validity': '12 Months from date of purchase',
      'Flight Class': 'Air India Premium Economy / Economy',
      'Cancellation': 'Free cancellation up to 14 days before departure',
      'Lounge': 'Free Air India Maharaja Lounge Pass included'
    },
    images: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'vair1', name: 'Maldives Package (5D/4N)', type: 'finish', value: 'Maldives', priceModifier: 0, inStock: true },
      { id: 'vair2', name: 'Dubai Luxury Escape (4D/3N)', type: 'finish', value: 'Dubai', priceModifier: 15000, inStock: true },
      { id: 'vair3', name: 'Europe Paris & Swiss (7D/6N)', type: 'finish', value: 'Europe', priceModifier: 60000, inStock: true }
    ],
    emiOptions: [
      {
        id: 'emi-air-6m',
        tenureMonths: 6,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 14166,
        totalAmount: 85000,
        processingFee: 0,
        mutualFundLockRequired: 95000,
        interestSavingsAmount: 6400
      },
      {
        id: 'emi-air-12m',
        tenureMonths: 12,
        interestRate: 0,
        isNoCost: true,
        monthlyAmount: 7083,
        totalAmount: 85000,
        processingFee: 0,
        mutualFundLockRequired: 95000,
        interestSavingsAmount: 11900,
        popular: true
      }
    ],
    stockStatus: 'in_stock',
    warranty: 'Air India 100% Refund Protection Guarantee'
  }
];

export const MOCK_USER_MUTUAL_FUNDS = {
  totalPortfolioValue: 485000,
  availableCreditLimit: 388000, // 80% LTV on Mutual Funds
  pledgedAmount: 0,
  registeredFolios: [
    { folio: '10928374', fundName: 'Mirae Asset Large Cap Fund - Direct (G)', units: 485.2, nav: 112.4, currentVal: 185000 },
    { folio: '84720193', fundName: 'Parag Parikh Flexi Cap Fund - Direct (G)', units: 620.5, nav: 82.3, currentVal: 150000 },
    { folio: '59382014', fundName: 'Nippon India Small Cap Fund - Direct (G)', units: 980.1, nav: 153.0, currentVal: 150000 }
  ]
};
