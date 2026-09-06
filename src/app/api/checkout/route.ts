import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, variantId, planId, address } = body;

    if (!productId || !planId || !address) {
      return NextResponse.json(
        { success: false, error: 'Missing required order fields' },
        { status: 400 }
      );
    }

    const orderId = `1FI-ORD-${Date.now().toString().slice(-6)}`;
    const mandateId = `1FI-MND-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json({
      success: true,
      data: {
        orderId,
        mandateId,
        status: 'APPROVED',
        message: 'Mutual fund lien successfully created! Your order is placed.',
        estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }),
        createdAt: new Date().toISOString()
      }
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to process order' },
      { status: 400 }
    );
  }
}
