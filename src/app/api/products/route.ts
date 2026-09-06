import { NextRequest, NextResponse } from 'next/server';
import { MARKETPLACE_PRODUCTS } from '@/data/mockData';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const q = searchParams.get('q')?.toLowerCase() || '';
  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'popular';
  const featured = searchParams.get('featured') === 'true';

  let products = [...MARKETPLACE_PRODUCTS];

  // Category Filter
  if (category && category !== 'all') {
    products = products.filter(p => p.category === category);
  }

  // Search Filter
  if (q) {
    products = products.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q)
    );
  }

  // Featured Filter
  if (featured) {
    products = products.filter(p => p.featured);
  }

  // Sorting
  if (sort === 'price_low') {
    products.sort((a, b) => a.discountedPrice - b.discountedPrice);
  } else if (sort === 'price_high') {
    products.sort((a, b) => b.discountedPrice - a.discountedPrice);
  } else if (sort === 'emi_low') {
    products.sort((a, b) => {
      const minA = Math.min(...a.emiOptions.map(e => e.monthlyAmount));
      const minB = Math.min(...b.emiOptions.map(e => e.monthlyAmount));
      return minA - minB;
    });
  } else {
    // Default popular
    products.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  return NextResponse.json({
    success: true,
    count: products.length,
    data: products
  });
}
