import { BlogPost } from '@/types/blog';

/**
 * Service for interacting with the blog API
 */
export const blogService = {
  /**
   * Get all blog posts
   */
  async getAllPosts(): Promise<BlogPost[]> {
    try {
      // Try the Express backend first
      const response = await fetch('/api/blog');
      
      if (response.ok) {
        const data = await response.json();
        if (data.success && Array.isArray(data.posts)) {
          return data.posts;
        }
      }
      
      // Fall back to Next.js API if Express fails
      const fallbackResponse = await fetch('/api/blog');
      if (fallbackResponse.ok) {
        const posts = await fallbackResponse.json();
        if (Array.isArray(posts)) {
          return posts;
        }
      }
      
      throw new Error('Failed to fetch blog posts');
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw error;
    }
  },
  
  /**
   * Get a single blog post by slug
   */
  async getPostBySlug(slug: string): Promise<BlogPost> {
    try {
      // Try the Express backend first
      const response = await fetch(`/api/blog/${slug}`);
      
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.post) {
          return data.post;
        }
      }
      
      // Fall back to Next.js API if Express fails
      const fallbackResponse = await fetch(`/api/blog?slug=${slug}`);
      if (fallbackResponse.ok) {
        const post = await fallbackResponse.json();
        if (post && !post.error) {
          return post;
        }
      }
      
      throw new Error('Blog post not found');
    } catch (error) {
      console.error(`Error fetching blog post with slug ${slug}:`, error);
      throw error;
    }
  },
  
  /**
   * Create a new blog post
   */
  async createPost(post: Partial<BlogPost>): Promise<BlogPost> {
    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create blog post');
      }
      
      const data = await response.json();
      return data.post;
    } catch (error) {
      console.error('Error creating blog post:', error);
      throw error;
    }
  },
  
  /**
   * Update an existing blog post
   */
  async updatePost(id: string, post: Partial<BlogPost>): Promise<BlogPost> {
    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update blog post');
      }
      
      const data = await response.json();
      return data.post;
    } catch (error) {
      console.error(`Error updating blog post with id ${id}:`, error);
      throw error;
    }
  },
  
  /**
   * Delete a blog post
   */
  async deletePost(id: string): Promise<void> {
    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to delete blog post');
      }
    } catch (error) {
      console.error(`Error deleting blog post with id ${id}:`, error);
      throw error;
    }
  }
};

export default blogService;
