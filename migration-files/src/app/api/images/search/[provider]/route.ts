import { NextRequest, NextResponse } from 'next/server';
import { searchUnsplash, searchPexels, searchPixabay } from '@/lib/image-service';

export const runtime = 'nodejs';

/**
 * GET /api/images/search/[provider] - Search images by provider (e.g., /search/all, /search/pexels)
 */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ provider: string }> }
) {
  try {
    const { provider } = await context.params;
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const page = parseInt(searchParams.get('page') || '1');
    const per_page = parseInt(searchParams.get('per_page') || '30');

    console.log(`Processing image search: provider=${provider}, query=${query}, page=${page}, per_page=${per_page}`);

    if (!query) {
      return NextResponse.json(
        {
          error: 'Search query is required',
          images: []
        },
        { status: 400 }
      );
    }

    let results;
    
    switch (provider) {
      case 'unsplash':
        results = await searchUnsplash(query, page, per_page);
        break;
      case 'pexels':
        results = await searchPexels(query, page, per_page);
        break;
      case 'pixabay':
        results = await searchPixabay(query, page, per_page);
        break;
      default:
        throw new Error(`Unsupported provider: ${provider}`);
    }
    return NextResponse.json(results);
  } catch (error) {
    console.error(`Error searching images:`, error);
    const statusCode = error instanceof Error && error.message === 'Search query is required' ? 400 : 500;
    return NextResponse.json(
      {
        error: 'Failed to search images',
        details: error instanceof Error ? error.message : 'Unknown error',
        images: []
      },
      { status: statusCode }
    );
  }
}
