import { NextRequest, NextResponse } from 'next/server';
import { 
  loadBlogs,
  saveBlog,
  deleteBlog,
  generateUniqueSlug
} from '@/lib/blog-storage';
import { BlogPost } from '@/types/blog';

// Helper function to calculate reading time
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(' ').length;
  return Math.ceil(words / wordsPerMinute);
}

// GET /api/blog - Get all blog posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    const lang = searchParams.get('lang') || 'en';
    
    console.log(`[BLOG API] GET request - limit: ${limit}, search: ${search}, category: ${category}, lang: ${lang}`);
    
    // Get all posts from JSON storage using the specified language
    const posts = await loadBlogs(lang);
    
    console.log(`[BLOG API] Found ${posts.length} posts for language: ${lang}`);
    
    let filteredPosts = posts;
    
    // Apply search filter if provided
    if (search) {
      const searchLower = search.toLowerCase();
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    // Apply category filter if provided
    if (category && category !== 'all') {
      filteredPosts = filteredPosts.filter(post => 
        post.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Sort by date (most recent first)
    filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Apply limit if specified
    let finalPosts = filteredPosts;
    if (limit) {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum) && limitNum > 0) {
        finalPosts = filteredPosts.slice(0, limitNum);
      }
    }
    
    console.log(`[BLOG API] Returning ${finalPosts.length} posts`);
    
    return NextResponse.json({
      success: true,
      posts: finalPosts,
      total: filteredPosts.length
    });
    
  } catch (error) {
    console.error('[BLOG API] Error fetching blog posts:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        posts: []
      },
      { status: 500 }
    );
  }
}

// POST /api/blog - Create a new blog post  
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('[BLOG API] Creating new blog post:', body.title);
    
    // Generate unique slug if not provided
    const slug = body.slug || await generateUniqueSlug(body.title);
    
    // Prepare post data
    const postData: BlogPost = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      slug,
      title: body.title || '',
      excerpt: body.excerpt || '',
      content: body.content || '',
      author: typeof body.author === 'object' 
        ? body.author 
        : { name: body.author || 'xEvolve Team', title: 'Content Writer' },
      category: body.category || 'General',
      tags: Array.isArray(body.tags) ? body.tags : [],
      date: body.date || new Date().toISOString(),
      publishedAt: body.publishedAt || new Date().toISOString(),
      image: body.image || '/images/blog/default-blog.jpg',
      imageAlt: body.imageAlt || 'Blog image',
      featured: body.featured || false
    };
    
    // Save post using JSON storage
    await saveBlog(postData);
    
    console.log('[BLOG API] Created blog post:', postData.id);
    
    return NextResponse.json(
      { success: true, post: postData },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('[BLOG API] Error creating blog post:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// PUT /api/blog - Update an existing blog post
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Blog post ID is required' },
        { status: 400 }
      );
    }
    
    console.log('[BLOG API] Updating blog post:', id);
    
    // Load existing posts
    const posts = await loadBlogs();
    const existingPost = posts.find(post => post.id === id);
    
    if (!existingPost) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    // Update post data
    const updatedPost: BlogPost = {
      ...existingPost,
      ...body
    };
    
    // Save updated post
    await saveBlog(updatedPost);
    
    console.log('[BLOG API] Updated blog post:', updatedPost.id);
    
    return NextResponse.json({
      success: true,
      post: updatedPost
    });
    
  } catch (error) {
    console.error('[BLOG API] Error updating blog post:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// DELETE /api/blog - Delete a blog post
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Blog post ID is required' },
        { status: 400 }
      );
    }
    
    console.log('[BLOG API] Deleting blog post:', id);
    
    // Find the blog by ID to get the slug
    const posts = await loadBlogs();
    const postToDelete = posts.find(post => post.id === id);
    
    if (!postToDelete) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    const result = await deleteBlog(postToDelete.slug);
    
    if (result) {
      console.log('[BLOG API] Deleted blog post:', id);
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
  } catch (error) {
    console.error('[BLOG API] Error deleting blog post:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
