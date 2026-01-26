/**
 * JSON-based blog storage system
 * Replaces markdown files with JSON storage for better admin management
 */

import fs from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  excerpt: string;
  author: {
    name: string;
    title: string;
  };
  image: string;
  imageAlt: string;
  tags: string[];
  category: string;
  publishedAt: string;
  updatedAt: string;
  isPublished: boolean;
  readingTime: number;
  featured?: boolean;
}

export interface BlogStorage {
  posts: BlogPostData[];
  lastUpdated: string;
}

// Storage paths
const getStoragePath = () => {
  const isDev = process.env.NODE_ENV === 'development' || process.env.LOCAL_DEV === 'true';
  
  if (isDev) {
    // Local development storage
    return path.join(process.cwd(), '.local', 'blog-storage.json');
  } else {
    // Production storage in home/data
    return path.join(process.cwd(), 'home', 'data', 'blog', 'blog-storage.json');
  }
};

const getBackupStoragePath = () => {
  const storagePath = getStoragePath();
  return storagePath.replace('.json', '-backup.json');
};

/**
 * Ensure storage directory exists
 */
async function ensureStorageDirectory() {
  const storagePath = getStoragePath();
  const storageDir = path.dirname(storagePath);
  
  if (!existsSync(storageDir)) {
    await fs.mkdir(storageDir, { recursive: true });
  }
}

/**
 * Load blog storage from JSON file
 */
export async function loadBlogStorage(): Promise<BlogStorage> {
  await ensureStorageDirectory();
  
  const storagePath = getStoragePath();
  
  try {
    if (existsSync(storagePath)) {
      const data = await fs.readFile(storagePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading blog storage:', error);
  }
  
  // Return empty storage if file doesn't exist or fails to load
  return {
    posts: [],
    lastUpdated: new Date().toISOString()
  };
}

/**
 * Save blog storage to JSON file
 */
export async function saveBlogStorage(storage: BlogStorage): Promise<void> {
  await ensureStorageDirectory();
  
  const storagePath = getStoragePath();
  const backupPath = getBackupStoragePath();
  
  try {
    // Create backup of current storage
    if (existsSync(storagePath)) {
      await fs.copyFile(storagePath, backupPath);
    }
    
    // Update lastUpdated timestamp
    storage.lastUpdated = new Date().toISOString();
    
    // Save new storage
    await fs.writeFile(storagePath, JSON.stringify(storage, null, 2), 'utf8');
    
    console.log(`Blog storage saved to ${storagePath}`);
  } catch (error) {
    console.error('Error saving blog storage:', error);
    throw error;
  }
}

/**
 * Get all blog posts
 */
export async function getAllBlogPosts(): Promise<BlogPostData[]> {
  const storage = await loadBlogStorage();
  return storage.posts.filter(post => post.isPublished);
}

/**
 * Get blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPostData | null> {
  const storage = await loadBlogStorage();
  return storage.posts.find(post => post.slug === slug) || null;
}

/**
 * Get blog post by ID
 */
export async function getBlogPostById(id: string): Promise<BlogPostData | null> {
  const storage = await loadBlogStorage();
  return storage.posts.find(post => post.id === id) || null;
}

/**
 * Create new blog post
 */
export async function createBlogPost(postData: Omit<BlogPostData, 'id' | 'publishedAt' | 'updatedAt'>): Promise<BlogPostData> {
  const storage = await loadBlogStorage();
  
  const newPost: BlogPostData = {
    ...postData,
    id: `blog-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  storage.posts.push(newPost);
  await saveBlogStorage(storage);
  
  return newPost;
}

/**
 * Update blog post
 */
export async function updateBlogPost(id: string, updates: Partial<BlogPostData>): Promise<BlogPostData | null> {
  const storage = await loadBlogStorage();
  
  const postIndex = storage.posts.findIndex(post => post.id === id);
  if (postIndex === -1) {
    return null;
  }
  
  const updatedPost = {
    ...storage.posts[postIndex],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  storage.posts[postIndex] = updatedPost;
  await saveBlogStorage(storage);
  
  return updatedPost;
}

/**
 * Delete blog post
 */
export async function deleteBlogPost(id: string): Promise<boolean> {
  const storage = await loadBlogStorage();
  
  const postIndex = storage.posts.findIndex(post => post.id === id);
  if (postIndex === -1) {
    return false;
  }
  
  storage.posts.splice(postIndex, 1);
  await saveBlogStorage(storage);
  
  return true;
}

/**
 * Helper function to calculate reading time
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(' ').length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Import blog post from markdown (migration helper)
 */
export async function importFromMarkdown(markdownContent: string, frontmatter: any): Promise<BlogPostData> {
  return {
    id: frontmatter.id || `blog-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    slug: frontmatter.slug,
    title: frontmatter.title,
    description: frontmatter.description || frontmatter.excerpt || '',
    content: markdownContent,
    excerpt: frontmatter.excerpt || '',
    author: typeof frontmatter.author === 'object' 
      ? frontmatter.author 
      : { name: frontmatter.author || 'xEvolve Team', title: 'Content Writer' },
    image: frontmatter.image || '/images/blog/default-blog.jpg',
    imageAlt: frontmatter.imageAlt || 'Blog image',
    tags: frontmatter.tags || [],
    category: frontmatter.category || 'General',
    publishedAt: frontmatter.publishedAt || frontmatter.date || new Date().toISOString(),
    updatedAt: frontmatter.updatedAt || new Date().toISOString(),
    isPublished: frontmatter.isPublished !== false,
    readingTime: frontmatter.readingTime || calculateReadingTime(markdownContent),
    featured: frontmatter.featured || false
  };
}
