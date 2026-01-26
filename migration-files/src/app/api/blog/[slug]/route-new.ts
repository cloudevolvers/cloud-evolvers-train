import { NextRequest, NextResponse } from 'next/server';
import { 
  getBlogPostBySlug,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
  type BlogPostData
} from '@/lib/blog-json-storage';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  author: {
    name: string;
    title: string;
  };
  image: string;
  tags: string[];
  category: string;
  publishedAt: string;
  updatedAt: string;
  isPublished: boolean;
  readingTime: number;
  excerpt: string;
}

// Helper function to calculate reading time
function calculateReadingTimeLocal(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(' ').length;
  return Math.ceil(words / wordsPerMinute);
}

// Convert storage format to API format
function formatBlogPostForAPI(post: BlogPostData): BlogPost {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description,
    content: post.content,
    author: post.author,
    image: post.image,
    tags: post.tags,
    category: post.category,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    isPublished: post.isPublished,
    readingTime: post.readingTime,
    excerpt: post.excerpt
  };
}

// GET /api/blog/[slug] - Get a single blog post
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    console.log(`[BLOG API] GET request for slug: ${slug}`);
    
    // Try to find post by slug first
    let post = await getBlogPostBySlug(slug);
    
    // If not found by slug, try by ID (for backward compatibility)
    if (!post) {
      post = await getBlogPostById(slug);
    }
    
    if (!post) {
      console.log(`[BLOG API] Post not found: ${slug}`);
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    console.log(`[BLOG API] Found post: ${post.title}`);
    
    return NextResponse.json({
      success: true,
      post: formatBlogPostForAPI(post)
    });
    
  } catch (error) {
    console.error('[BLOG API] Error fetching blog post:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/blog/[slug] - Update blog post (can use slug or id)
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const body = await request.json();
    
    console.log(`[BLOG API] PUT request for slug: ${slug}`);
    
    // Find the post by slug or ID
    let existingPost = await getBlogPostBySlug(slug);
    if (!existingPost) {
      existingPost = await getBlogPostById(slug);
    }
    
    if (!existingPost) {
      console.log(`[BLOG API] Post not found for update: ${slug}`);
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    // Prepare update data
    const updates: Partial<BlogPostData> = {
      title: body.title,
      description: body.description || body.excerpt,
      content: body.content,
      excerpt: body.excerpt || body.description,
      author: typeof body.author === 'object' 
        ? body.author 
        : { name: body.author || existingPost.author.name, title: 'Content Writer' },
      image: body.image,
      imageAlt: body.imageAlt,
      tags: body.tags,
      category: body.category,
      isPublished: body.isPublished,
      readingTime: body.readingTime || calculateReadingTimeLocal(body.content || ''),
      featured: body.featured
    };
    
    // Remove undefined values
    Object.keys(updates).forEach(key => {
      if (updates[key as keyof typeof updates] === undefined) {
        delete updates[key as keyof typeof updates];
      }
    });
    
    // Update post in JSON storage
    const updatedPost = await updateBlogPost(existingPost.id, updates);
    
    if (!updatedPost) {
      return NextResponse.json(
        { success: false, error: 'Failed to update blog post' },
        { status: 500 }
      );
    }
    
    console.log(`[BLOG API] Updated post: ${updatedPost.title}`);
    
    return NextResponse.json({
      success: true,
      post: formatBlogPostForAPI(updatedPost)
    });
    
  } catch (error) {
    console.error('[BLOG API] Error updating blog post:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/blog/[slug] - Delete a blog post
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    console.log(`[BLOG API] DELETE request for slug: ${slug}`);
    
    // Find the post by slug or ID
    let existingPost = await getBlogPostBySlug(slug);
    if (!existingPost) {
      existingPost = await getBlogPostById(slug);
    }
    
    if (!existingPost) {
      console.log(`[BLOG API] Post not found for deletion: ${slug}`);
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    // Delete post from JSON storage
    const deleted = await deleteBlogPost(existingPost.id);
    
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Failed to delete blog post' },
        { status: 500 }
      );
    }
    
    console.log(`[BLOG API] Deleted post: ${existingPost.title}`);
    
    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully'
    });
    
  } catch (error) {
    console.error('[BLOG API] Error deleting blog post:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
