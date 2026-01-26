import fs from 'fs';
import path from 'path';

// Read the current blogs data
const blogsPath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
const blogsData = JSON.parse(fs.readFileSync(blogsPath, 'utf-8'));

console.log('🔍 Checking for duplicate slugs...');

// Find duplicates and fix them
const slugCounts = {};
const fixedBlogs = blogsData.map(blog => {
  const originalSlug = blog.slug;
  
  // Count slug occurrences
  if (!slugCounts[originalSlug]) {
    slugCounts[originalSlug] = [];
  }
  slugCounts[originalSlug].push(blog);
  
  return blog;
});

// Fix duplicates by adding language suffix
const processedSlugs = new Set();
const uniqueBlogs = fixedBlogs.map(blog => {
  const originalSlug = blog.slug;
  
  // If this slug has duplicates
  if (slugCounts[originalSlug].length > 1) {
    const lang = blog.lang || 'en'; // Default to 'en' if no lang specified
    let newSlug = originalSlug;
    
    // Only add suffix if it's not English (to keep English as canonical)
    if (lang !== 'en') {
      newSlug = `${originalSlug}-${lang}`;
    }
    
    // Ensure uniqueness even with language suffix
    let counter = 1;
    while (processedSlugs.has(newSlug)) {
      newSlug = `${originalSlug}-${lang}-${counter}`;
      counter++;
    }
    
    processedSlugs.add(newSlug);
    
    if (newSlug !== originalSlug) {
      console.log(`📝 Fixed duplicate: "${originalSlug}" → "${newSlug}" (${blog.title})`);
      return { ...blog, slug: newSlug };
    }
  }
  
  processedSlugs.add(originalSlug);
  return blog;
});

// Verify no more duplicates
const finalSlugs = uniqueBlogs.map(blog => blog.slug);
const duplicates = finalSlugs.filter((slug, index) => finalSlugs.indexOf(slug) !== index);

if (duplicates.length > 0) {
  console.error('❌ Still have duplicates:', duplicates);
  process.exit(1);
}

console.log(`✅ All slugs are now unique (${uniqueBlogs.length} total blogs)`);

// Write back to file
fs.writeFileSync(blogsPath, JSON.stringify(uniqueBlogs, null, 2));

console.log('💾 Updated blogs.json with unique slugs');

// Show summary
const languageStats = uniqueBlogs.reduce((acc, blog) => {
  const lang = blog.lang || 'en';
  acc[lang] = (acc[lang] || 0) + 1;
  return acc;
}, {});

console.log('\n📊 Blog language distribution:');
Object.entries(languageStats).forEach(([lang, count]) => {
  console.log(`   ${lang}: ${count} posts`);
});
