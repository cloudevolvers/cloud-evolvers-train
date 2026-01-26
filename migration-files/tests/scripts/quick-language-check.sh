#!/bin/bash

# Simple test script to check for Dutch words in the homepage
# This can be run without full Playwright setup

echo "🔍 Checking English homepage for Dutch content..."
echo "========================================"

# Start the dev server in the background
echo "Starting development server..."
npm run dev &
DEV_PID=$!

# Wait for server to start
echo "Waiting for server to start..."
sleep 10

# Check if server is running
if ! curl -s http://localhost:3000 > /dev/null; then
    echo "❌ Error: Development server failed to start"
    kill $DEV_PID 2>/dev/null
    exit 1
fi

echo "✅ Development server started"

# Use curl to get homepage content and basic analysis
HOMEPAGE_CONTENT=$(curl -s "http://localhost:3000/?lang=en" | grep -v '<script' | grep -v '<style' | grep -v '<!--' | html2text 2>/dev/null || curl -s "http://localhost:3000/?lang=en")

# Check for obvious Dutch words (this is a basic check)
DUTCH_WORDS=("het" "de" "een" "van" "naar" "bij" "voor" "over" "ons" "onze" "meer informatie" "waarom" "hoe")
FOUND_ISSUES=()

echo "Analyzing homepage content for Dutch words..."
echo "============================================="

for word in "${DUTCH_WORDS[@]}"; do
    if echo "$HOMEPAGE_CONTENT" | grep -qi "\\b$word\\b" && ! echo "$HOMEPAGE_CONTENT" | grep -qi "language.*$word"; then
        FOUND_ISSUES+=("$word")
    fi
done

if [ ${#FOUND_ISSUES[@]} -eq 0 ]; then
    echo "✅ SUCCESS: No obvious Dutch words found in English homepage!"
    echo ""
    echo "Note: This is a basic check. Run the full test suite with:"
    echo "  npm run test:language"
    echo ""
    echo "For comprehensive testing including browser-based validation."
else
    echo "⚠️  WARNING: Potential Dutch words found:"
    printf '   - %s\n' "${FOUND_ISSUES[@]}"
    echo ""
    echo "This is a basic check that may have false positives."
    echo "Run the full test suite for accurate results:"
    echo "  npm run test:language"
fi

echo ""
echo "📊 Homepage content sample (first 300 characters):"
echo "=================================================="
echo "$HOMEPAGE_CONTENT" | head -c 300
echo ""
echo "... (truncated)"

# Clean up
echo ""
echo "Shutting down development server..."
kill $DEV_PID 2>/dev/null
wait $DEV_PID 2>/dev/null

echo "✅ Test completed"
