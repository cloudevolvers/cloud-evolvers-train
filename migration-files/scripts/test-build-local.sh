#!/bin/bash

# Test script to verify build works locally
# Usage: ./scripts/test-build-local.sh

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🧪 Testing local build process${NC}"
echo "=================================================="

# Clean previous builds
echo -e "${YELLOW}🧹 Cleaning previous builds...${NC}"
rm -rf .next
rm -rf out

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm ci

# Build application
echo -e "${YELLOW}🏗️ Building application...${NC}"
NODE_ENV=production npm run build

# Check if build was successful
if [ ! -d ".next" ]; then
    echo -e "${RED}❌ Build failed - .next directory not found${NC}"
    exit 1
fi

if [ ! -d ".next/standalone" ]; then
    echo -e "${RED}❌ Standalone build failed - .next/standalone directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful!${NC}"

# Test if app.js can start
echo -e "${YELLOW}🧪 Testing app.js startup...${NC}"
export NODE_ENV=production
export PORT=3001

# Start the app in background
timeout 30s node app.js &
APP_PID=$!

# Wait a bit for startup
sleep 10

# Test if it's responding
if curl -f -s http://localhost:3001 > /dev/null; then
    echo -e "${GREEN}✅ App is responding on port 3001${NC}"
    kill $APP_PID 2>/dev/null || true
else
    echo -e "${RED}❌ App is not responding${NC}"
    kill $APP_PID 2>/dev/null || true
    exit 1
fi

echo -e "${GREEN}🎉 Local build test passed!${NC}"
echo "=================================================="
