#!/usr/bin/env node

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MARKDOWN_BLOG_DIR = path.join(__dirname, '..', 'public', 'blog_backup');
const NL_MARKDOWN_BLOG_DIR = path.join(MARKDOWN_BLOG_DIR, 'nl');

// Determine storage path based on environment
const getStoragePath = () => {
  const isLocalDev = process.env.LOCAL_DEV === 'true';
  if (isLocalDev) {
    return path.join(process.cwd(), '.local', 'data', 'blogs.json');
  }
  return path.join(process.cwd(), 'src', 'data', 'blogs.json');
};

// Ensure directory exists
const ensureDirectoryExists = async (filePath) => {
  const dir = path.dirname(filePath);
  try {
    await fs.access(dir);
  } catch (error) {
    await fs.mkdir(dir, { recursive: true });
  }
};

// Save blogs to JSON storage
const saveBlogs = async (blogs) => {
  try {
    const filePath = getStoragePath();
    await ensureDirectoryExists(filePath);
    
    // Sort by publication date (newest first) before saving
    const sortedBlogs = blogs.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    
    await fs.writeFile(filePath, JSON.stringify(sortedBlogs, null, 2), 'utf-8');
    console.log(`💾 Successfully saved ${blogs.length} blogs to ${filePath}`);
  } catch (error) {
    console.error('Error saving blogs:', error);
    throw error;
  }
};

// Generate unique slug
const generateUniqueSlug = async (title) => {
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  
  return baseSlug; // For simplicity, we'll assume no duplicates during migration
};

// Helper function to calculate reading time
function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Helper function to generate blog post ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Convert markdown file to BlogPost object
async function convertMarkdownToBlogPost(filePath, lang = 'en') {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const { data: frontmatter, content: markdownContent } = matter(content);
    
    const filename = path.basename(filePath, '.md');
    const slug = await generateUniqueSlug(frontmatter.title || filename);
    
    const blogPost = {
      id: generateId(),
      title: frontmatter.title || filename.replace(/-/g, ' '),
      slug,
      excerpt: frontmatter.excerpt || '',
      content: markdownContent,
      author: frontmatter.author || { name: 'Azure Specialist', title: 'Cloud Expert' },
      category: frontmatter.category || 'Azure',
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      publishedAt: frontmatter.publishedAt || frontmatter.date || new Date().toISOString(),
      date: frontmatter.publishedAt || frontmatter.date || new Date().toISOString(),
      image: frontmatter.image || '/images/blog/default-blog-image.jpg',
      imageAlt: frontmatter.imageAlt || frontmatter.title || 'Blog post image',
      readTime: frontmatter.readTime || `${calculateReadingTime(markdownContent)} min read`,
      lang,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    console.log(`✓ Converted: ${blogPost.title}`);
    return blogPost;
  } catch (error) {
    console.error(`✗ Error converting ${filePath}:`, error);
    return null;
  }
}

// Get all markdown files from a directory
async function getMarkdownFiles(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    return files.filter(file => file.endsWith('.md')).map(file => path.join(dirPath, file));
  } catch (error) {
    console.log(`Directory ${dirPath} not found, skipping...`);
    return [];
  }
}

// Main migration function
async function migrateBlogs() {
  try {
    console.log('🚀 Starting blog migration from markdown to JSON...');
    
    const blogPosts = [];
    
    // Convert English blogs
    console.log('\n📝 Converting English blogs...');
    const englishFiles = await getMarkdownFiles(MARKDOWN_BLOG_DIR);
    for (const filePath of englishFiles) {
      const blogPost = await convertMarkdownToBlogPost(filePath, 'en');
      if (blogPost) {
        blogPosts.push(blogPost);
      }
    }
    
    // Convert Dutch blogs
    console.log('\n📝 Converting Dutch blogs...');
    const dutchFiles = await getMarkdownFiles(NL_MARKDOWN_BLOG_DIR);
    for (const filePath of dutchFiles) {
      const blogPost = await convertMarkdownToBlogPost(filePath, 'nl');
      if (blogPost) {
        blogPosts.push(blogPost);
      }
    }
    
    // Save all blog posts
    console.log(`\n💾 Saving ${blogPosts.length} blog posts to JSON storage...`);
    await saveBlogs(blogPosts);
    
    console.log('✅ Migration completed successfully!');
    console.log(`\n📊 Summary:`);
    console.log(`   • Total posts migrated: ${blogPosts.length}`);
    console.log(`   • English posts: ${blogPosts.filter(p => p.lang === 'en').length}`);
    console.log(`   • Dutch posts: ${blogPosts.filter(p => p.lang === 'nl').length}`);
    
    // List all categories
    const categories = [...new Set(blogPosts.map(p => p.category))];
    console.log(`   • Categories: ${categories.join(', ')}`);
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrateBlogs();
