#!/bin/bash
set -euo pipefail

# Deploy to Staging/Preview Environment (Cloudflare Pages)
echo "🧪 Deploying to Staging Environment..."

# Build the application for staging
echo "📦 Building application for staging..."
bun run build:staging

# Deploy to Cloudflare Pages (staging branch deployment)
echo "🌐 Deploying to Cloudflare Pages (staging)..."
npx wrangler pages deploy dist \
  --project-name cloud-evolvers-train \
  --branch staging \
  --commit-dirty=true

echo "✅ Staging deployment complete!"
echo "📋 Preview URL: https://staging.cloud-evolvers-train.pages.dev"
echo "📋 Also available at: https://test.cloudevolvers.com (if custom domain configured)"
