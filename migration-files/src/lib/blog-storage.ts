import { promises as fs } from 'fs';
import path from 'path';
import { existsSync } from 'fs';
import { BlogPost } from '@/types/blog';

const BLOGS_DIR = path.join(process.cwd(), 'src', 'data');

// Get language-specific blog data file path
const getBlogDataPath = (lang: string = 'en'): string => {
  // Try language-specific file first, fallback to main file
  const langPath = path.join(BLOGS_DIR, `blogs-${lang}.json`);
  const defaultPath = path.join(BLOGS_DIR, 'blogs.json');
  
  return existsSync(langPath) ? langPath : defaultPath;
};

// Ensure data directory exists
export async function ensureDataDirectory() {
  try {
    await fs.access(BLOGS_DIR);
  } catch {
    await fs.mkdir(BLOGS_DIR, { recursive: true });
  }
}

// Load all blogs from JSON storage with fallback for missing translations
export async function loadBlogs(lang: string = 'en'): Promise<BlogPost[]> {
  try {
    await ensureDataDirectory();
    
    const blogDataFile = getBlogDataPath(lang);
    const isEnglish = lang === 'en';
    
    // Check if the blogs file exists
    try {
      await fs.access(blogDataFile);
    } catch {
      // File doesn't exist, create empty array for default language file
      if (isEnglish) {
        await saveBlogs([], lang);
      }
      // For non-English, fall back to English posts if no translation exists
      if (!isEnglish) {
        console.log(`[BLOG STORAGE] No ${lang} blog file found, falling back to English blogs`);
        return await loadBlogs('en');
      }
      return [];
    }
    
    const data = await fs.readFile(blogDataFile, 'utf-8');
    const blogs = JSON.parse(data);
    
    // If we got fewer posts in the requested language than English, supplement with English posts
    if (!isEnglish && blogs.length > 0) {
      try {
        const englishBlogs = await loadBlogs('en');
        if (englishBlogs.length > blogs.length) {
          console.log(`[BLOG STORAGE] ${lang} has ${blogs.length} posts, English has ${englishBlogs.length}. Supplementing with English posts.`);
          
          // Get slugs of existing translated posts to avoid duplicates
          const translatedSlugs = new Set(blogs.map((blog: BlogPost) => {
            // Remove language suffix from slug for comparison
            return blog.slug.replace(/-nl$/, '');
          }));
          
          // Add English posts that don't have translations
          const missingTranslations = englishBlogs.filter((englishBlog: BlogPost) => 
            !translatedSlugs.has(englishBlog.slug)
          );
          
          // Mark English posts as fallback and add them
          const fallbackPosts = missingTranslations.map((post: BlogPost) => ({
            ...post,
            fallbackContent: true,
            originalLang: 'en'
          }));
          
          blogs.push(...fallbackPosts);
          console.log(`[BLOG STORAGE] Added ${fallbackPosts.length} English posts as fallback for ${lang}`);
        }
      } catch (error) {
        console.warn(`[BLOG STORAGE] Could not load English fallback posts:`, error);
      }
    }
    
    // Sort by date (newest first)
    return blogs.sort((a: BlogPost, b: BlogPost) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error loading blogs:', error);
    // As a final fallback, try English if we're not already loading English
    if (lang !== 'en') {
      console.log(`[BLOG STORAGE] Final fallback: loading English blogs for ${lang} request`);
      return await loadBlogs('en');
    }
    return [];
  }
}

// Save all blogs to JSON storage
export async function saveBlogs(blogs: BlogPost[], lang: string = 'en'): Promise<void> {
  try {
    await ensureDataDirectory();
    const blogDataFile = getBlogDataPath(lang);
    await fs.writeFile(blogDataFile, JSON.stringify(blogs, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving blogs:', error);
    throw new Error(`Could not save blogs to ${getBlogDataPath(lang)}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Get a single blog by slug
export async function getBlogBySlug(slug: string, lang: string = 'en'): Promise<BlogPost | null> {
  const blogs = await loadBlogs(lang);
  return blogs.find(blog => blog.slug === slug) || null;
}

// Save or update a blog post (always saves to default language file)
export async function saveBlog(blogPost: BlogPost): Promise<void> {
  const blogs = await loadBlogs('en'); // Always use English file for admin operations
  const existingIndex = blogs.findIndex(blog => blog.slug === blogPost.slug);
  
  if (existingIndex >= 0) {
    // Update existing blog
    blogs[existingIndex] = blogPost;
  } else {
    // Add new blog
    blogs.push(blogPost);
  }
  
  await saveBlogs(blogs, 'en'); // Always save to English file for admin operations
}

// Delete a blog post (always deletes from default language file)
export async function deleteBlog(slug: string): Promise<boolean> {
  const blogs = await loadBlogs('en'); // Always use English file for admin operations
  const filteredBlogs = blogs.filter(blog => blog.slug !== slug);
  
  if (filteredBlogs.length === blogs.length) {
    return false; // Blog not found
  }
  
  await saveBlogs(filteredBlogs, 'en'); // Always save to English file for admin operations
  return true;
}

// Get blog categories
export async function getBlogCategories(lang: string = 'en'): Promise<string[]> {
  const blogs = await loadBlogs(lang);
  const categorySet = new Set(blogs.map(blog => blog.category).filter(Boolean));
  const categories = Array.from(categorySet);
  return categories.sort();
}

// Generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Generate unique slug (if slug already exists, append number)
export async function generateUniqueSlug(title: string): Promise<string> {
  const baseSlug = generateSlug(title);
  const blogs = await loadBlogs('en'); // Always check against English file for admin operations
  
  let slug = baseSlug;
  let counter = 1;
  
  while (blogs.some(blog => blog.slug === slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  
  return slug;
}
