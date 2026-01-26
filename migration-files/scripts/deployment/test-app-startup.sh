#!/bin/bash
# Test script to verify app.js can start correctly

set -e

echo "🧪 Testing app.js startup..."

# Check if app.js exists
if [ ! -f "app.js" ]; then
    echo "❌ app.js not found"
    exit 1
fi

# Check if package.json has correct start script
START_SCRIPT=$(node -p "require('./package.json').scripts.start")
if [ "$START_SCRIPT" != "NODE_ENV=production node app.js" ]; then
    echo "❌ Incorrect start script in package.json: $START_SCRIPT"
    exit 1
fi

# Check if main field points to app.js
MAIN_FIELD=$(node -p "require('./package.json').main")
if [ "$MAIN_FIELD" != "app.js" ]; then
    echo "❌ Incorrect main field in package.json: $MAIN_FIELD"
    exit 1
fi

# Check if app.js has ES module syntax
if ! grep -q "import.*from" app.js; then
    echo "❌ app.js doesn't appear to use ES modules"
    exit 1
fi

# Check if package.json has type: module
TYPE_FIELD=$(node -p "require('./package.json').type")
if [ "$TYPE_FIELD" != "module" ]; then
    echo "❌ package.json doesn't have type: module"
    exit 1
fi

echo "✅ All startup checks passed!"
echo "✅ app.js is ready for deployment"
echo "📝 Configuration:"
echo "   - Entry point: app.js"
echo "   - Start script: $START_SCRIPT"
echo "   - Main field: $MAIN_FIELD"
echo "   - Module type: $TYPE_FIELD"
