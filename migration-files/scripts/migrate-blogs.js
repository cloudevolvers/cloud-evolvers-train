const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');

// Simple slug generation
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Convert markdown to plain text (basic HTML removal)
function markdownToPlainText(markdown) {
  return markdown
    .replace(/#{1,6}\s+/g, '') // Remove heading markers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markers
    .replace(/\*(.*?)\*/g, '$1') // Remove italic markers
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links, keep text
    .replace(/`(.*?)`/g, '$1') // Remove code markers
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();
}

async function migrateMarkdownToJson() {
  try {
    const blogsDir = path.join(__dirname, '../public/blog');
    const dataDir = path.join(__dirname, '../src/data');
    const outputFile = path.join(dataDir, 'blogs.json');
    
    console.log('Starting blog migration...');
    console.log('Blogs directory:', blogsDir);
    console.log('Output file:', outputFile);
    
    // Ensure data directory exists
    await fs.mkdir(dataDir, { recursive: true });
    
    // Check if blogs directory exists
    try {
      await fs.access(blogsDir);
    } catch (error) {
      console.log('No blogs directory found, creating empty blogs.json');
      await fs.writeFile(outputFile, JSON.stringify([], null, 2));
      return;
    }
    
    // Read all markdown files
    const files = await fs.readdir(blogsDir);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
    console.log(`Found ${markdownFiles.length} markdown files to migrate`);
    
    const blogs = [];
    
    for (const file of markdownFiles) {
      try {
        const filePath = path.join(blogsDir, file);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        
        // Parse frontmatter and content
        const { data: frontmatter, content } = matter(fileContent);
        
        // Generate excerpt from content if not provided
        let excerpt = frontmatter.excerpt;
        if (!excerpt && content) {
          const plainText = markdownToPlainText(content);
          excerpt = plainText.substring(0, 200) + (plainText.length > 200 ? '...' : '');
        }
        
        // Create blog post object
        const blogPost = {
          id: path.basename(file, '.md'),
          slug: frontmatter.slug || generateSlug(frontmatter.title || path.basename(file, '.md')),
          title: frontmatter.title || path.basename(file, '.md'),
          excerpt: excerpt || 'No excerpt available',
          content: content || '',
          author: frontmatter.author || { name: 'Unknown Author', title: 'Contributor' },
          date: frontmatter.publishedAt || frontmatter.date || new Date().toISOString(),
          category: frontmatter.category || 'General',
          tags: frontmatter.tags || [],
          image: frontmatter.image || '/images/blog/default-blog-image.jpg',
          imageAlt: frontmatter.imageAlt || frontmatter.title || 'Blog post image',
          readTime: frontmatter.readTime || '5 min read',
          published: frontmatter.published !== false // Default to published unless explicitly false
        };
        
        blogs.push(blogPost);
        console.log(`✓ Migrated: ${blogPost.title}`);
      } catch (error) {
        console.error(`✗ Error migrating ${file}:`, error.message);
      }
    }
    
    // Sort blogs by date (newest first)
    blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Write to JSON file
    await fs.writeFile(outputFile, JSON.stringify(blogs, null, 2));
    
    console.log(`\n✅ Migration completed!`);
    console.log(`   Migrated ${blogs.length} blog posts to ${outputFile}`);
    console.log(`   You can now safely remove the markdown files from public/blog/`);
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration if called directly
if (require.main === module) {
  migrateMarkdownToJson();
}

module.exports = { migrateMarkdownToJson };
