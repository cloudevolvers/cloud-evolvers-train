import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { existsSync } from 'fs';

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

// Helper function to read blog post from markdown file
async function readBlogFromFile(filePath: string): Promise<BlogPost | null> {
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const slug = data.slug || path.basename(filePath, '.md');
    
    return {
      id: data.id || slug,
      slug,
      title: data.title || '',
      description: data.description || '',
      content,
      author: data.author || {
        name: 'xEvolve Team',
        title: 'Content Writer'
      },
      image: data.image || '/images/blog/default-blog.jpg',
      tags: data.tags || [],
      category: data.category || 'General',
      publishedAt: data.publishedAt || data.date || new Date().toISOString(),
      updatedAt: data.updatedAt || data.date || data.publishedAt || new Date().toISOString(),
      isPublished: data.isPublished !== false, // Default to true unless explicitly false
      readingTime: data.readingTime || 5,
      excerpt: data.excerpt || data.description || ''
    };
  } catch (error) {
    console.error(`Error reading blog file ${filePath}:`, error);
    return null;
  }
}

// GET /api/blog/[slug] - Get blog post by slug
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  console.log(`GET /api/blog/${slug} - Fetching blog post`);
  
  try {
    const blogDir = path.join(process.cwd(), 'public', 'blog');
    const filePath = path.join(blogDir, `${slug}.md`);
    
    if (!existsSync(filePath)) {
      console.log(`Blog post file not found: ${filePath}`);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Blog post not found' 
        },
        { status: 404 }
      );
    }

    const post = await readBlogFromFile(filePath);
    
    if (!post || !post.isPublished) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Blog post not published' 
        },
        { status: 404 }
      );
    }

    console.log(`Successfully fetched blog post: ${post.title}`);
    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch blog post', 
        message: error instanceof Error ? error.message : 'Unknown error'
      },
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
    
    // Determine blog directory based on environment
    const isLocalDev = process.env.LOCAL_DEV === 'true';
    const blogDir = isLocalDev 
      ? path.join(process.cwd(), '.local', 'blog')
      : path.join('/home', 'data', 'blog');

    // Try to find the file by slug first, then by id
    let filePath = path.join(blogDir, `${slug}.md`);
    let fileExists = existsSync(filePath);
    
    if (!fileExists) {
      // Try public directory as fallback
      const publicBlogDir = path.join(process.cwd(), 'public', 'blog');
      filePath = path.join(publicBlogDir, `${slug}.md`);
      fileExists = existsSync(filePath);
      
      if (!fileExists) {
        // Try to find by id in both directories
        const dirs = [blogDir, publicBlogDir];
        for (const dir of dirs) {
          if (existsSync(dir)) {
            const files = await fs.readdir(dir);
            for (const file of files.filter(f => f.endsWith('.md'))) {
              const testPath = path.join(dir, file);
              const testPost = await readBlogFromFile(testPath);
              if (testPost && (testPost.id === slug || testPost.slug === slug)) {
                filePath = testPath;
                fileExists = true;
                break;
              }
            }
            if (fileExists) break;
          }
        }
      }
    }

    if (!fileExists) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Read existing post
    const existingPost = await readBlogFromFile(filePath);
    if (!existingPost) {
      return NextResponse.json(
        { success: false, error: 'Failed to read existing post' },
        { status: 500 }
      );
    }

    // Update post data
    const updatedPost = {
      ...existingPost,
      ...body,
      updatedAt: new Date().toISOString()
    };

    // Convert author back to simple string if it's an object (for compatibility)
    if (typeof updatedPost.author === 'object' && updatedPost.author?.name) {
      updatedPost.author = updatedPost.author.name;
    }

    // Create frontmatter content
    const frontmatter = {
      id: updatedPost.id,
      slug: updatedPost.slug,
      title: updatedPost.title,
      description: updatedPost.description || updatedPost.excerpt,
      author: updatedPost.author,
      image: updatedPost.image,
      tags: updatedPost.tags,
      category: updatedPost.category,
      publishedAt: updatedPost.publishedAt,
      updatedAt: updatedPost.updatedAt,
      isPublished: updatedPost.isPublished,
      readingTime: updatedPost.readingTime,
      excerpt: updatedPost.excerpt,
      featured: updatedPost.featured,
      imageAlt: updatedPost.imageAlt
    };

    const fileContent = matter.stringify(updatedPost.content, frontmatter);
    
    // Ensure the target directory exists
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, fileContent, 'utf8');

    return NextResponse.json({ success: true, post: updatedPost });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// DELETE /api/blog/[slug] - Delete blog post (can use slug or id)
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    
    // Determine blog directory based on environment
    const isLocalDev = process.env.LOCAL_DEV === 'true';
    const blogDir = isLocalDev 
      ? path.join(process.cwd(), '.local', 'blog')
      : path.join('/home', 'data', 'blog');

    // Try to find the file by slug first, then by id
    let filePath = path.join(blogDir, `${slug}.md`);
    let fileExists = existsSync(filePath);
    
    if (!fileExists) {
      // Try public directory as fallback
      const publicBlogDir = path.join(process.cwd(), 'public', 'blog');
      filePath = path.join(publicBlogDir, `${slug}.md`);
      fileExists = existsSync(filePath);
      
      if (!fileExists) {
        // Try to find by id in both directories
        const dirs = [blogDir, publicBlogDir];
        for (const dir of dirs) {
          if (existsSync(dir)) {
            const files = await fs.readdir(dir);
            for (const file of files.filter(f => f.endsWith('.md'))) {
              const testPath = path.join(dir, file);
              const testPost = await readBlogFromFile(testPath);
              if (testPost && (testPost.id === slug || testPost.slug === slug)) {
                filePath = testPath;
                fileExists = true;
                break;
              }
            }
            if (fileExists) break;
          }
        }
      }
    }

    if (!fileExists) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    await fs.unlink(filePath);

    return NextResponse.json({ success: true, message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
