#!/bin/bash
# Install Dependencies Script for Vite Application
# Optimized for GitHub Actions deployment pipeline

set -e

echo "📦 Installing dependencies for Vite application..."

# Check if package-lock.json exists
if [ -f "package-lock.json" ]; then
    echo "✅ Found package-lock.json, using npm ci for faster installation"
    npm ci --prefer-offline --no-audit --no-fund
else
    echo "⚠️ No package-lock.json found, using npm install"
    npm install --prefer-offline --no-audit --no-fund
fi

# Display dependency installation summary
echo ""
echo "📊 Dependency Installation Summary:"
echo "• Node version: $(node --version)"
echo "• NPM version: $(npm --version)"
echo "• Total packages: $(npm list --depth=0 2>/dev/null | grep -c "├─\|└─" || echo "Unknown")"

# Verify critical dependencies
echo ""
echo "🔍 Verifying critical dependencies:"
CRITICAL_DEPS=("vite" "@vitejs/plugin-react-swc" "react" "react-dom")

for dep in "${CRITICAL_DEPS[@]}"; do
    if npm list "$dep" >/dev/null 2>&1; then
        VERSION=$(npm list "$dep" --depth=0 | grep "$dep" | cut -d'@' -f2)
        echo "✅ $dep@$VERSION"
    else
        echo "⚠️ $dep not found"
    fi
done

echo ""
echo "✅ Dependencies installed successfully!"
