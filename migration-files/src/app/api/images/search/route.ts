import { NextRequest, NextResponse } from 'next/server';
import { searchUnsplash, searchPexels, searchPixabay } from '@/lib/image-service';

export const runtime = 'nodejs';

/**
 * GET /api/images/search - Search images (legacy route using query params)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const page = parseInt(searchParams.get('page') || '1');
    const per_page = parseInt(searchParams.get('per_page') || '30');
    const provider = searchParams.get('provider') || 'all';
    
    console.log(`Processing image search (legacy route): provider=${provider}, query=${query}`);
    
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
      case 'all':
      default:
        // Search all providers and combine results
        try {
          const [unsplashResults, pexelsResults, pixabayResults] = await Promise.allSettled([
            searchUnsplash(query, page, Math.ceil(per_page / 3)),
            searchPexels(query, page, Math.ceil(per_page / 3)),
            searchPixabay(query, page, Math.ceil(per_page / 3))
          ]);
          
          const combinedResults: any[] = [];
          
          if (unsplashResults.status === 'fulfilled') {
            combinedResults.push(...unsplashResults.value.results);
          }
          if (pexelsResults.status === 'fulfilled') {
            combinedResults.push(...pexelsResults.value.results);
          }
          if (pixabayResults.status === 'fulfilled') {
            combinedResults.push(...pixabayResults.value.results);
          }
          
          results = {
            results: combinedResults.slice(0, per_page),
            total: combinedResults.length,
            page,
            perPage: per_page
          };
        } catch (error) {
          console.error('Error searching all providers:', error);
          results = { results: [], total: 0, page, perPage: per_page };
        }
        break;
    }
    return NextResponse.json(results);
  } catch (error) {
    console.error(`Error searching images (provider: ${request.nextUrl.searchParams.get('provider') || 'all'}):`, error);
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
