import { NextResponse } from 'next/server';
import { getProviderStatus } from '@/lib/image-service';

export const runtime = 'nodejs';

/**
 * GET /api/images/providers/status - Check status of image providers
 */
export async function GET() {
  try {
    const results = getProviderStatus();
    return NextResponse.json(results);
  } catch (error) {
    console.error('Error checking providers:', error);
    return NextResponse.json(
      { error: 'Failed to check image providers' },
      { status: 500 }
    );
  }
}
