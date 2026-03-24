#!/bin/bash
set -euo pipefail

# Deploy to Development Environment (Cloudflare Pages)
echo "🚀 Deploying to Development Environment..."

# Build the application for development
echo "📦 Building application..."
bun run build:dev

# Deploy to Cloudflare Pages (dev branch deployment)
echo "🌐 Deploying to Cloudflare Pages (dev)..."
npx wrangler pages deploy dist \
  --project-name cloud-evolvers-train \
  --branch dev \
  --commit-dirty=true

echo "✅ Development deployment complete!"
echo "📋 Preview URL: https://dev.cloud-evolvers-train.pages.dev"
