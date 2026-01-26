import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

/**
 * GET /api/images/blog - Get blog image info by slug/category (legacy route)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const category = searchParams.get('category');

    // Simple blog image mapping based on slug
    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing slug parameter',
          imagePath: '/api/images/blog-images/file/default-blog-image.jpg'
        },
        { status: 400 }
      );
    }
    
    const imagePath = `/api/images/blog-images/file/${slug}.jpg`;
    
    const result = {
      success: true,
      imagePath,
      slug,
      category: category || 'general'
    };
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error processing blog image request:', error);
    const statusCode = error instanceof Error && error.message === 'Missing slug parameter' ? 400 : 500;
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Error processing image request',
        imagePath: '/api/images/blog-images/file/default-blog-image.jpg'
      },
      { status: statusCode }
    );
  }
}
