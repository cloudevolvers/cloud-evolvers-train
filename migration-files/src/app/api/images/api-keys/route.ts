import { NextResponse } from 'next/server';
import { getApiKeys } from '@/lib/image-service';

/**
 * GET /api/images/api-keys - Get masked API keys
 */
export async function GET() {
  try {
    const keys = getApiKeys();
    return NextResponse.json(keys);
  } catch (error) {
    console.error('Error getting API keys:', error);
    return NextResponse.json(
      { error: 'Failed to get API keys' },
      { status: 500 }
    );
  }
}
