import { NextResponse } from 'next/server';
import { getStorageService } from '@/lib/next-storage-service';

export const runtime = 'nodejs';

/**
 * GET /api/images/storage-info - Get information about image storage locations
 */
export async function GET() {
  try {
    const storageService = getStorageService();
    const info = storageService.getStorageInfo();
    return NextResponse.json(info);
  } catch (error) {
    console.error('Error getting storage info:', error);
    return NextResponse.json(
      { error: 'Failed to get storage information' },
      { status: 500 }
    );
  }
}
