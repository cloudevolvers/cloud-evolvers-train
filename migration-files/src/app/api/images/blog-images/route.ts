import { NextResponse } from 'next/server';
import { getStorageService } from '@/lib/next-storage-service';

export const runtime = 'nodejs';

/**
 * GET /api/images/blog-images - Get all local blog images
 */
export async function GET() {
  try {
    const storageService = getStorageService();
    const images = await storageService.listFiles('blog');
    
    // Format the response to match expected structure
    const formattedImages = images.map(filename => ({
      filename,
      url: `/api/images/blog-images/file/${filename}`,
      section: 'blog'
    }));
    
    return NextResponse.json(formattedImages);
  } catch (error) {
    console.error('Error fetching blog images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog images' },
      { status: 500 }
    );
  }
}
