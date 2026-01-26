#!/bin/bash
# Environment setup script for Linux deployment
# Ensures proper permissions and validates environment

set -e

echo "🐧 Setting up Linux deployment environment..."

# Make scripts executable
find .github/scripts -name "*.sh" -exec chmod +x {} \;

# Validate Node.js environment
if command -v node >/dev/null 2>&1; then
    echo "✅ Node.js version: $(node --version)"
else
    echo "❌ Node.js not found"
    exit 1
fi

# Validate npm environment
if command -v npm >/dev/null 2>&1; then
    echo "✅ npm version: $(npm --version)"
else
    echo "❌ npm not found"
    exit 1
fi

# Check if package.json exists
if [[ -f "package.json" ]]; then
    echo "✅ package.json found"
    echo "📋 Project: $(cat package.json | grep '"name"' | cut -d'"' -f4)"
else
    echo "❌ package.json not found"
    exit 1
fi

# Check for Vite config
if [[ -f "vite.config.ts" || -f "vite.config.js" ]]; then
    echo "✅ Vite configuration found"
else
    echo "❌ Vite configuration not found"
    exit 1
fi

echo "🎯 Linux deployment environment ready!"
