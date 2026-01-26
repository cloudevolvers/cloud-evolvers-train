import { NextRequest, NextResponse } from 'next/server';
import { getBlogBySlug } from '@/lib/blog-storage';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function GET(request: NextRequest, context: BlogPostPageProps) {
  try {
    const { slug } = await context.params;
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'en';
    
    console.log(`[API] Fetching blog post with slug: "${slug}", language: ${lang}`);
    
    if (!slug) {
      return NextResponse.json({
        success: false,
        error: 'Slug parameter is required'
      }, { status: 400 });
    }
    
    const post = await getBlogBySlug(slug, lang);
    
    if (!post) {
      console.log(`[API] Blog post not found for slug: "${slug}", language: ${lang}`);
      return NextResponse.json({
        success: false,
        error: 'Blog post not found'
      }, { status: 404 });
    }
    
    console.log(`[API] Successfully found blog post: "${post.title}"`);
    
    return NextResponse.json({
      success: true,
      post: post
    });
    
  } catch (error) {
    console.error('[API] Error fetching blog post:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch blog post'
    }, { status: 500 });
  }
}
