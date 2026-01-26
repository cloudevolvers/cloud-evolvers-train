#!/bin/bash
# Script to verify that required build directories exist

set -e

echo "🔍 Verifying build directories..."

# Check if .next directory exists
if [ ! -d ".next" ]; then
    echo "❌ .next directory not found after build"
    exit 1
fi

# Check if node_modules directory exists
if [ ! -d "node_modules" ]; then
    echo "❌ node_modules directory not found"
    exit 1
fi

echo "✅ Required directories (.next, node_modules) verified successfully"
