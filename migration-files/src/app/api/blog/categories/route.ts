import { NextRequest, NextResponse } from 'next/server';
import { getBlogCategories } from '@/lib/blog-storage';

export async function GET(request: NextRequest) {
  try {
    const categories = await getBlogCategories();
    
    return NextResponse.json({
      success: true,
      categories: categories
    });
    
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch blog categories',
      categories: []
    }, { status: 500 });
  }
}
