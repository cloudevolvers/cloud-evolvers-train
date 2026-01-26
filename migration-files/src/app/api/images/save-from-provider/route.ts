import { NextRequest, NextResponse } from 'next/server';
import { saveImageFromProvider } from '@/lib/image-service';

export const runtime = 'nodejs';

// Simple auth check function
async function requireAuth(request: NextRequest) {
  const authorization = request.headers.get('authorization');
  if (!authorization?.startsWith('Bearer ')) {
    return false;
  }
  // Add your JWT verification logic here if needed
  return true;
}

/**
 * POST /api/images/save-from-provider - Download image from URL and save locally
 */
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const isAuthenticated = await requireAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { imageUrl, name, section = 'blog', metadata = {} } = body;

    if (!imageUrl || !name) {
      return NextResponse.json(
        { error: 'imageUrl and name are required' },
        { status: 400 }
      );
    }

    const result = await saveImageFromProvider(imageUrl, name, section, metadata);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error saving image from provider:', error);
    return NextResponse.json(
      {
        success: false, 
        error: 'Failed to save image from provider',
        details: error instanceof Error ? error.message : 'Unknown error', 
        code: error instanceof Error ? (error as any).code : undefined
      },
      { status: 500 }
    );
  }
}
