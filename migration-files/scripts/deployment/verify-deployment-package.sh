#!/bin/bash
# Script to verify deployment package contains required directories

set -e

echo "🔍 Verifying deployment package..."

# Check if deployment.zip exists
if [ ! -f "deployment.zip" ]; then
    echo "❌ deployment.zip not found"
    exit 1
fi

# Check package size and warn if too large
SIZE_MB=$(du -m deployment.zip | cut -f1)
if [ $SIZE_MB -gt 2000 ]; then
    echo "⚠️ Warning: Package size ($SIZE_MB MB) may cause deployment issues"
fi

# Verify essential directories and files are present in the zip
MISSING_ITEMS=""

if ! unzip -l deployment.zip | grep -q "\.next/"; then
    MISSING_ITEMS="$MISSING_ITEMS .next"
fi

if ! unzip -l deployment.zip | grep -q "node_modules/"; then
    MISSING_ITEMS="$MISSING_ITEMS node_modules"
fi

if ! unzip -l deployment.zip | grep -q "app.js"; then
    MISSING_ITEMS="$MISSING_ITEMS app.js"
fi

if [ -n "$MISSING_ITEMS" ]; then
    echo "❌ Missing essential items in deployment package:$MISSING_ITEMS"
    exit 1
fi

echo "✅ Essential items (.next, node_modules, app.js) verified in deployment package"
echo "📊 Package size: $(du -sh deployment.zip | cut -f1)"
