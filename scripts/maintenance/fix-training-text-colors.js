#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Color mapping from hardcoded to semantic classes
const colorMappings = [
  {
    from: /text-gray-900 dark:text-gray-100/g,
    to: 'text-foreground'
  },
  {
    from: /text-gray-800 dark:text-gray-200/g,
    to: 'text-foreground'
  },
  {
    from: /text-gray-700 dark:text-gray-300/g,
    to: 'text-muted-foreground'
  },
  {
    from: /text-gray-700 dark:text-gray-200/g,
    to: 'text-muted-foreground'
  },
  {
    from: /text-gray-600 dark:text-gray-400/g,
    to: 'text-muted-foreground'
  }
];

// Find all training content files
const contentDir = 'src/components/training/content';
const pattern = path.join(contentDir, '**/*.tsx');

console.log('🔍 Finding training content files...');
const files = glob.sync(pattern);
console.log(`📁 Found ${files.length} files to process:`);

let totalReplacements = 0;

files.forEach(filePath => {
  console.log(`\n📝 Processing: ${filePath}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fileReplacements = 0;
    
    // Apply all color mappings
    colorMappings.forEach(mapping => {
      const matches = content.match(mapping.from);
      if (matches) {
        content = content.replace(mapping.from, mapping.to);
        const count = matches.length;
        fileReplacements += count;
        console.log(`   ✅ Replaced "${mapping.from.source}" → "${mapping.to}" (${count} times)`);
      }
    });
    
    // Write the updated content back to the file
    if (fileReplacements > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`   💾 Updated file with ${fileReplacements} replacements`);
      totalReplacements += fileReplacements;
    } else {
      console.log(`   ⏭️  No changes needed`);
    }
    
  } catch (error) {
    console.error(`   ❌ Error processing ${filePath}:`, error.message);
  }
});

console.log(`\n🎉 Complete! Total replacements made: ${totalReplacements}`);
console.log('✨ All training content files now use semantic Tailwind color classes');
