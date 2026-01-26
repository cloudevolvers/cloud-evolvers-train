const fs = require('fs');
const path = require('path');

// Color replacements for better contrast
const replacements = [
  // Most important replacements for readability
  { from: 'text-slate-600 dark:text-slate-400', to: 'text-gray-700 dark:text-gray-200 font-medium' },
  { from: 'text-slate-700 dark:text-slate-300', to: 'text-gray-900 dark:text-gray-100 font-medium' },
  
  // Headers should remain strong
  { from: 'text-slate-900 dark:text-slate-100', to: 'text-gray-900 dark:text-gray-100' },
  
  // Secondary text improvements
  { from: 'text-slate-600 dark:text-slate-300', to: 'text-gray-800 dark:text-gray-100' },
  { from: 'text-slate-500 dark:text-slate-400', to: 'text-gray-700 dark:text-gray-200' },
];

// Function to process a file
function processFile(filePath) {
  if (!filePath.endsWith('.tsx')) return false;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  for (const replacement of replacements) {
    const regex = new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (content.includes(replacement.from)) {
      content = content.replace(regex, replacement.to);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ Fixed contrast in: ${filePath}`);
    return true;
  }
  
  return false;
}

// Function to recursively process directory
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let filesChanged = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      filesChanged += processDirectory(fullPath);
    } else if (stat.isFile()) {
      if (processFile(fullPath)) {
        filesChanged++;
      }
    }
  }
  
  return filesChanged;
}

// Process all tsx files in src/components/training/content
const contentDir = path.join(__dirname, 'src', 'components', 'training', 'content');

console.log('🔧 Fixing text contrast issues in training content...');
const changedFiles = processDirectory(contentDir);

console.log(`\n✅ Text contrast improvements complete!`);
console.log(`📄 Files updated: ${changedFiles}`);
console.log('🎯 Low contrast slate colors replaced with higher contrast gray colors');
