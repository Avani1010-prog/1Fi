import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, tenureMonths } = body;

    if (!amount || !tenureMonths) {
      return NextResponse.json(
        { success: false, error: 'Amount and tenureMonths are required' },
        { status: 400 }
      );
    }

    const monthlyAmount = Math.ceil(amount / tenureMonths);
    const mutualFundLockRequired = Math.ceil(amount * 1.15); // 115% collateral cover
    const creditCardInterestRate = 0.16; // 16% p.a. standard credit card EMI
    const creditCardTotalPayable = amount * (1 + (creditCardInterestRate * (tenureMonths / 12)));
    const interestSavingsAmount = Math.round(creditCardTotalPayable - amount);

    return NextResponse.json({
      success: true,
      data: {
        amount,
        tenureMonths,
        monthlyAmount,
        interestRate: 0,
        isNoCost: true,
        processingFee: 0,
        mutualFundLockRequired,
        interestSavingsAmount,
        comparisonVsCreditCard: {
          creditCardMonthly: Math.ceil(creditCardTotalPayable / tenureMonths),
          creditCardTotalPayable: Math.round(creditCardTotalPayable),
          savingsWith1Fi: interestSavingsAmount
        }
      }
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid payload' },
      { status: 400 }
    );
  }
}
