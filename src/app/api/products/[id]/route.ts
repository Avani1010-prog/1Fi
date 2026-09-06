import { NextRequest, NextResponse } from 'next/server';
import { MARKETPLACE_PRODUCTS } from '@/data/mockData';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = MARKETPLACE_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return NextResponse.json(
      { success: false, error: 'Product not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: product
  });
}
