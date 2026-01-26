/**
 * Migration script to convert markdown blog posts to JSON storage
 */

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { existsSync } from 'fs';
import { 
  importFromMarkdown, 
  saveBlogStorage, 
  loadBlogStorage,
  type BlogStorage,
  type BlogPostData 
} from './blog-json-storage';

/**
 * Find all markdown files in blog directories
 */
async function findMarkdownFiles(): Promise<string[]> {
  const blogDir = path.join(process.cwd(), 'public', 'blog');
  const files: string[] = [];
  
  if (!existsSync(blogDir)) {
    console.log('No blog directory found');
    return files;
  }
  
  async function scanDirectory(dir: string) {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          await scanDirectory(fullPath);
        } else if (entry.name.endsWith('.md')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.error(`Error scanning directory ${dir}:`, error);
    }
  }
  
  await scanDirectory(blogDir);
  return files;
}

/**
 * Parse markdown file and extract frontmatter and content
 */
async function parseMarkdownFile(filePath: string): Promise<{ frontmatter: any; content: string; fileName: string } | null> {
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const fileName = path.basename(filePath, '.md');
    
    return {
      frontmatter: data,
      content: content.trim(),
      fileName
    };
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error);
    return null;
  }
}

/**
 * Main migration function
 */
export async function migrateMarkdownToJson(dryRun: boolean = false): Promise<void> {
  console.log('🚀 Starting markdown to JSON migration...');
  
  try {
    // Find all markdown files
    const markdownFiles = await findMarkdownFiles();
    console.log(`📁 Found ${markdownFiles.length} markdown files`);
    
    if (markdownFiles.length === 0) {
      console.log('✅ No markdown files to migrate');
      return;
    }
    
    // Load existing storage
    const existingStorage = await loadBlogStorage();
    console.log(`📚 Existing storage contains ${existingStorage.posts.length} posts`);
    
    // Parse and convert each file
    const convertedPosts: BlogPostData[] = [];
    const errors: { file: string; error: string }[] = [];
    
    for (const filePath of markdownFiles) {
      console.log(`📄 Processing ${path.relative(process.cwd(), filePath)}...`);
      
      const parsed = await parseMarkdownFile(filePath);
      if (!parsed) {
        errors.push({ file: filePath, error: 'Failed to parse file' });
        continue;
      }
      
      try {
        // Create slug from filename if not provided in frontmatter
        if (!parsed.frontmatter.slug) {
          parsed.frontmatter.slug = parsed.fileName;
        }
        
        // Ensure title is present
        if (!parsed.frontmatter.title) {
          parsed.frontmatter.title = parsed.fileName.replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
        }
        
        const blogPost = await importFromMarkdown(parsed.content, parsed.frontmatter);
        
        // Check if post already exists (by slug)
        const existingPost = existingStorage.posts.find(p => p.slug === blogPost.slug);
        if (existingPost) {
          console.log(`⚠️  Post with slug "${blogPost.slug}" already exists, skipping`);
          continue;
        }
        
        convertedPosts.push(blogPost);
        console.log(`✅ Converted: ${blogPost.title}`);
        
      } catch (error) {
        errors.push({ 
          file: filePath, 
          error: error instanceof Error ? error.message : 'Unknown error' 
        });
      }
    }
    
    console.log(`\n📊 Migration Summary:`);
    console.log(`   📝 Files processed: ${markdownFiles.length}`);
    console.log(`   ✅ Posts converted: ${convertedPosts.length}`);
    console.log(`   ❌ Errors: ${errors.length}`);
    
    if (errors.length > 0) {
      console.log(`\n❌ Errors encountered:`);
      errors.forEach(({ file, error }) => {
        console.log(`   ${path.relative(process.cwd(), file)}: ${error}`);
      });
    }
    
    if (convertedPosts.length === 0) {
      console.log('✅ No new posts to migrate');
      return;
    }
    
    if (!dryRun) {
      // Save the updated storage
      const newStorage: BlogStorage = {
        posts: [...existingStorage.posts, ...convertedPosts],
        lastUpdated: new Date().toISOString()
      };
      
      await saveBlogStorage(newStorage);
      console.log(`💾 Saved ${convertedPosts.length} new posts to JSON storage`);
      
      // Create a summary file
      const summaryPath = path.join(process.cwd(), '.local', 'migration-summary.json');
      await fs.mkdir(path.dirname(summaryPath), { recursive: true });
      await fs.writeFile(summaryPath, JSON.stringify({
        migratedAt: new Date().toISOString(),
        totalFiles: markdownFiles.length,
        convertedPosts: convertedPosts.length,
        errors: errors.length,
        posts: convertedPosts.map(p => ({ id: p.id, slug: p.slug, title: p.title }))
      }, null, 2));
      
    } else {
      console.log(`\n🔍 DRY RUN - No changes made to storage`);
      console.log('Posts that would be migrated:');
      convertedPosts.forEach(post => {
        console.log(`   - ${post.title} (${post.slug})`);
      });
    }
    
    console.log('\n✅ Migration completed!');
    
  } catch (error) {
    console.error('💥 Migration failed:', error);
    throw error;
  }
}

/**
 * Remove markdown files after successful migration
 */
export async function cleanupMarkdownFiles(): Promise<void> {
  console.log('🧹 Starting markdown file cleanup...');
  
  try {
    const markdownFiles = await findMarkdownFiles();
    
    if (markdownFiles.length === 0) {
      console.log('✅ No markdown files to clean up');
      return;
    }
    
    console.log(`📁 Found ${markdownFiles.length} markdown files to remove`);
    
    for (const filePath of markdownFiles) {
      await fs.unlink(filePath);
      console.log(`🗑️  Removed: ${path.relative(process.cwd(), filePath)}`);
    }
    
    // Try to remove empty directories
    const blogDir = path.join(process.cwd(), 'public', 'blog');
    try {
      // Remove nl subdirectory if empty
      const nlDir = path.join(blogDir, 'nl');
      if (existsSync(nlDir)) {
        const nlFiles = await fs.readdir(nlDir);
        if (nlFiles.length === 0) {
          await fs.rmdir(nlDir);
          console.log('🗑️  Removed empty directory: public/blog/nl');
        }
      }
      
      // Check if main blog directory is empty (except for images subdirectory)
      const blogFiles = await fs.readdir(blogDir);
      const nonImageFiles = blogFiles.filter(file => file !== 'images');
      if (nonImageFiles.length === 0) {
        console.log('✅ Blog directory now only contains images');
      }
    } catch (error) {
      console.log('Note: Could not clean up empty directories:', error.message);
    }
    
    console.log('✅ Markdown cleanup completed!');
    
  } catch (error) {
    console.error('💥 Cleanup failed:', error);
    throw error;
  }
}

// For command line usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const cleanup = args.includes('--cleanup');
  
  if (cleanup) {
    cleanupMarkdownFiles().catch(console.error);
  } else {
    migrateMarkdownToJson(dryRun).catch(console.error);
  }
}
