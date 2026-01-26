#!/bin/bash

# Test script to verify About page content for both brands

echo "🔍 Testing About Page Content for Both Brands"
echo "============================================="

echo ""
echo "📋 Testing xEvolve Brand (default):"
echo "-----------------------------------"

# First test without Cloud Evolvers environment
node -e "
const { getBrandConfig } = require('./src/lib/brand-config.ts');
console.log('Brand Name:', getBrandConfig().name);
console.log('Contact Email:', getBrandConfig().contactEmail);
"

echo ""
echo "📋 Testing Cloud Evolvers Brand:"
echo "--------------------------------"

# Test with Cloud Evolvers environment
NEXT_PUBLIC_CLOUD_EVOLVERS=1 node -e "
const { getBrandConfig } = require('./src/lib/brand-config.ts');
console.log('Brand Name:', getBrandConfig().name);
console.log('Contact Email:', getBrandConfig().contactEmail);
"

echo ""
echo "✅ Brand configuration test complete!"
echo ""
echo "📝 To test the About page manually:"
echo "   1. Start the development server: npm run dev"
echo "   2. Visit: http://localhost:4002/about"
echo "   3. Toggle brands using the development brand switcher"
echo ""
