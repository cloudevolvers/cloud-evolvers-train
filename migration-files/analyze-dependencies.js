#!/usr/bin/env node

import fs from 'fs';

// Read package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const allDependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };

// Dependencies found in usage analysis
const usedDependencies = new Set([
  // Core React/Next.js
  'react',
  'react-dom', 
  'next',
  
  // UI Libraries
  'lucide-react',
  'next-themes',
  '@radix-ui/react-slot',
  '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-collapsible', 
  '@radix-ui/react-dialog',
  '@radix-ui/react-label',
  '@radix-ui/react-progress',
  '@radix-ui/react-scroll-area',
  '@radix-ui/react-select',
  '@radix-ui/react-separator',
  '@radix-ui/react-slider',
  '@radix-ui/react-switch',
  '@radix-ui/react-tabs',
  '@radix-ui/react-tooltip',
  
  // Styling
  'tailwindcss',
  'tailwind-merge',
  'clsx',
  'class-variance-authority',
  'tailwindcss-animate',
  'autoprefixer',
  'postcss',
  '@tailwindcss/typography',
  
  // Azure Services
  '@azure/storage-blob',
  '@azure/identity',
  '@microsoft/microsoft-graph-client',
  
  // Utility Libraries
  'chalk',
  'dotenv',
  'marked',
  'markdown-it',
  '@types/markdown-it',
  'gray-matter',
  'date-fns',
  'uuid',
  'axios',
  'sonner',
  'react-country-flag',
  'react-image-crop',
  'jsonwebtoken',
  
  // Development/Build
  'typescript',
  '@types/node',
  '@types/react',
  '@types/react-dom',
  '@types/uuid',
  'eslint',
  'eslint-config-next',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'nodemon'
]);

// Find unused dependencies
const unusedDependencies = [];
const usedButNotInPackage = [];

// Check each dependency in package.json
Object.keys(allDependencies).forEach(dep => {
  if (!usedDependencies.has(dep)) {
    unusedDependencies.push(dep);
  }
});

// Check if used dependencies are in package.json
usedDependencies.forEach(dep => {
  if (!allDependencies[dep]) {
    usedButNotInPackage.push(dep);
  }
});

console.log('🔍 DEPENDENCY ANALYSIS REPORT');
console.log('================================\n');

console.log('✅ USED DEPENDENCIES (' + usedDependencies.size + '):');
Array.from(usedDependencies).sort().forEach(dep => {
  console.log(`  - ${dep}`);
});

console.log('\n❌ UNUSED DEPENDENCIES (' + unusedDependencies.length + '):');
unusedDependencies.sort().forEach(dep => {
  console.log(`  - ${dep}`);
});

console.log('\n⚠️  USED BUT NOT IN PACKAGE.JSON (' + usedButNotInPackage.length + '):');
usedButNotInPackage.sort().forEach(dep => {
  console.log(`  - ${dep}`);
});

console.log('\n💾 RECOMMENDED REMOVALS:');
console.log('You can safely remove these unused dependencies:');
unusedDependencies.forEach(dep => {
  console.log(`npm uninstall ${dep}`);
});
