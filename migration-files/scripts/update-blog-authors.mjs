#!/usr/bin/env node

import { promises as fs } from 'fs';
import path from 'path';

const BLOGS_FILE = path.join(process.cwd(), 'src', 'data', 'blogs.json');

// Single author profile for all blogs
const AUTHOR = {
  name: 'Yair Knijn',
  title: 'Azure Cloud Solutions Architect'
};



// Function to update blog post
function updateBlogPost(post) {
  const updatedPost = { ...post };
  // Set author to Yair Knijn for all posts
  updatedPost.author = { ...AUTHOR };
  // Remove SVG image references and use placeholder
  if (updatedPost.image && updatedPost.image.includes('.svg')) {
    updatedPost.image = '/images/blog/default-blog-image.jpg';
    console.log(`✓ Removed SVG image from "${post.title}"`);
  }
  // Ensure imageAlt is present
  if (!updatedPost.imageAlt) {
    updatedPost.imageAlt = updatedPost.title;
    console.log(`✓ Added imageAlt for "${post.title}"`);
  }
  return updatedPost;
}

async function updateAllBlogs() {
  try {
    console.log('🚀 Updating all blog posts...');
    
    // Read current blogs
    const blogsData = await fs.readFile(BLOGS_FILE, 'utf-8');
    const blogs = JSON.parse(blogsData);
    
    console.log(`📝 Found ${blogs.length} blog posts to update`);
    
    // Update each blog post
    const updatedBlogs = blogs.map(updateBlogPost);
    
    // Write updated blogs back to file
    await fs.writeFile(BLOGS_FILE, JSON.stringify(updatedBlogs, null, 2), 'utf-8');
    
    console.log('✅ Successfully updated all blog posts!');
    console.log('\n📊 Summary:');
    console.log(`   • Total posts processed: ${updatedBlogs.length}`);
    
    // Count authors
    const authorCounts = {};
    updatedBlogs.forEach(post => {
      const authorName = post.author.name;
      authorCounts[authorName] = (authorCounts[authorName] || 0) + 1;
    });
    
    console.log('   • Author distribution:');
    Object.entries(authorCounts).forEach(([author, count]) => {
      console.log(`     - ${author}: ${count} posts`);
    });
    
  } catch (error) {
    console.error('❌ Error updating blog posts:', error);
    process.exit(1);
  }
}

// Run the update
updateAllBlogs();
