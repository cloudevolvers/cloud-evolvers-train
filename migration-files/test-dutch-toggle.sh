#!/bin/bash

echo "🇳🇱 Dutch Language Toggle Test for xEvolve Website"
echo "================================================="
echo ""
echo "Testing Dutch language disable for xEvolve (enabled for Cloud Evolvers)"
echo ""

# Test with default xEvolve brand
echo "🔵 Testing xEvolve Brand (Dutch should be DISABLED):"
echo "   1. Open: http://localhost:4002"
echo "   2. Look for language toggle in header"
echo "   3. Dutch button should show 'Coming Soon' and be disabled"
echo "   4. Only English should be functional"
echo ""

# Test with Cloud Evolvers brand  
echo "🟢 Testing Cloud Evolvers Brand (Dutch should be ENABLED):"
echo "   1. In browser console, run: localStorage.setItem('dev-brand-override', 'cloud-evolvers')"
echo "   2. Refresh page: http://localhost:4002"
echo "   3. Should see Cloud Evolvers theme (emerald colors, graduation cap)"
echo "   4. Dutch button should show 'NL' and be clickable"
echo "   5. Both languages should work"
echo ""

echo "🔧 Reset to xEvolve:"
echo "   localStorage.setItem('dev-brand-override', 'xevolve')"
echo "   Then refresh page"
echo ""

echo "📋 Expected Behavior:"
echo "   ✅ xEvolve: Dutch disabled, shows 'Coming Soon'"
echo "   ✅ Cloud Evolvers: Dutch enabled, full functionality"
echo "   ✅ English works in both brands"
echo ""

echo "Server should be running at: http://localhost:4002"
