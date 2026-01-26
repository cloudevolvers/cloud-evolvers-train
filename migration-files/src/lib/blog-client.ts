/**
 * Client library for interacting with the blog API
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    title: string;
  };
  date: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  publishedAt: string;
  featured?: boolean;
  description?: string;
  isPublished?: boolean;
  readingTime?: number;
  updatedAt?: string;
}

// Helper function to ensure we're using proper URLs in both client and server environments
function getBaseUrl() {
  if (typeof window === 'undefined') {
    // Server-side: use absolute URL
    return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  } else {
    // Client-side: use relative URL
    return '';
  }
}

/**
 * Fetch all blog posts from the API
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const baseUrl = getBaseUrl();
    // Use Next.js API route
    const urlPath = '/api/blog';
    const timestamp = Date.now();
    
    // Create URL safely based on environment
    const finalUrl = baseUrl 
      ? new URL(`${urlPath}?t=${timestamp}`, baseUrl).toString()
      : `${urlPath}?t=${timestamp}`;
    
    const response = await fetch(finalUrl, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache' }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status}`);
    }
    
    const data = await response.json();
    // Handle both success format and direct array format
    if (data.success) {
      return data.posts.map(transformBlogPost);
    } else if (Array.isArray(data)) {
      return data.map(transformBlogPost);
    }
    return [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Helper function to transform API blog post to client format
function transformBlogPost(apiPost: any): BlogPost {
  return {
    id: apiPost.id,
    slug: apiPost.slug,
    title: apiPost.title,
    excerpt: apiPost.excerpt || apiPost.description || '',
    content: apiPost.content,
    author: typeof apiPost.author === 'object' 
      ? apiPost.author 
      : { name: apiPost.author || 'xEvolve Team', title: 'Content Writer' },
    date: apiPost.date || apiPost.publishedAt,
    category: apiPost.category,
    tags: apiPost.tags || [],
    image: apiPost.image,
    imageAlt: apiPost.imageAlt || 'Blog image',
    publishedAt: apiPost.publishedAt,
    featured: apiPost.featured || false,
    description: apiPost.description || apiPost.excerpt || '',
    isPublished: apiPost.isPublished !== false,
    readingTime: apiPost.readingTime || 5,
    updatedAt: apiPost.updatedAt
  };
}

/**
 * Fetch a specific blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const baseUrl = getBaseUrl();
    const urlPath = `/api/blog/${slug}`;
    
    // Create URL safely based on environment
    const finalUrl = baseUrl 
      ? new URL(urlPath, baseUrl).toString()
      : urlPath;
    
    const response = await fetch(finalUrl, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache' }
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch blog post: ${response.status}`);
    }
    
    const data = await response.json();
    return data.success && data.post ? transformBlogPost(data.post) : null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

/**
 * Create a new blog post
 */
export async function createBlogPost(post: Partial<BlogPost>): Promise<BlogPost> {
  const baseUrl = getBaseUrl();
  const urlPath = '/api/blog';
  
  // Create URL safely based on environment
  const finalUrl = baseUrl 
    ? new URL(urlPath, baseUrl).toString() 
    : urlPath;
  
  const response = await fetch(finalUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  
  if (!response.ok) {
    throw new Error(`Failed to create blog post: ${response.status}`);
  }
  
  const result = await response.json();
  return result.success && result.post ? transformBlogPost(result.post) : result;
}

/**
 * Update an existing blog post
 */
export async function updateBlogPost(id: string, post: Partial<BlogPost>): Promise<BlogPost> {
  const baseUrl = getBaseUrl();
  const urlPath = `/api/blog/${id}`;
  
  // Create URL safely based on environment
  const finalUrl = baseUrl 
    ? new URL(urlPath, baseUrl).toString() 
    : urlPath;
  
  const response = await fetch(finalUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  
  if (!response.ok) {
    throw new Error(`Failed to update blog post: ${response.status}`);
  }
  
  const result = await response.json();
  return result.success && result.post ? transformBlogPost(result.post) : result;
}

/**
 * Delete a blog post
 */
export async function deleteBlogPost(id: string): Promise<void> {
  const baseUrl = getBaseUrl();
  const urlPath = `/api/blog/${id}`;
  
  // Create URL safely based on environment
  const finalUrl = baseUrl 
    ? new URL(urlPath, baseUrl).toString() 
    : urlPath;
  
  const response = await fetch(finalUrl, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error(`Failed to delete blog post: ${response.status}`);
  }
}

/**
 * Upload an image for a blog post
 */
export async function uploadBlogImage(file: File): Promise<{ url: string }> {
  const formData = new FormData();
  formData.append('image', file);
  
  const baseUrl = getBaseUrl();
  const urlPath = '/api/images';
  
  // Create URL safely based on environment
  const finalUrl = baseUrl 
    ? new URL(urlPath, baseUrl).toString() 
    : urlPath;
  
  const response = await fetch(finalUrl, {
    method: 'POST',
    body: formData,
  });
  
  if (!response.ok) {
    throw new Error(`Failed to upload image: ${response.status}`);
  }
  
  return response.json();
}

/**
 * Get the correct URL for a blog image
 */
export function getBlogImageUrl(imagePath: string): string {
  if (!imagePath) return '/images/blog/default-blog.jpg';
  
  // If it's already a full URL, return it
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  const baseUrl = getBaseUrl();
  
  // If it's an API path
  if (imagePath.startsWith('/api')) {
    return baseUrl ? new URL(imagePath, baseUrl).toString() : imagePath;
  }
  
  // If it's just a filename (no leading slash)
  if (!imagePath.startsWith('/')) {
    const urlPath = `/api/images/service-images/file/${imagePath}`;
    return baseUrl ? new URL(urlPath, baseUrl).toString() : urlPath;
  }
  
  // Otherwise, it's a path starting with / but not /api
  return imagePath;
}
