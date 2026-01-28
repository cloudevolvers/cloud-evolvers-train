# Cloud Evolvers Training - Claude AI Instructions

## Project Overview
Cloud Evolvers Training is a professional training platform built with React, TypeScript, and Vite, deployed on Cloudflare Pages.

## ☁️ Cloudflare MCP Tools Available

This project has **Cloudflare MCP (Model Context Protocol)** tools configured and ready to use for:
- **DNS Management**: Create, update, and delete DNS records for cloudevolvers.com
- **Cloudflare Pages**: Deploy and manage deployments
- **Workers**: Manage serverless functions
- **Custom Domains**: Configure domain routing

### API Tokens Configuration
Cloudflare API tokens are configured via environment variables and are **IP-whitelisted** for security.
- `CLOUDFLARE_DNS_TOKEN` - For DNS operations
- `CLOUDFLARE_API_TOKEN` - For general Cloudflare API access

See `.env.example` for the expected environment variables. The actual `.env` file is gitignored.

### Deployment Environments

| Environment | URL | Branch |
|-------------|-----|--------|
| **Production** | `cloudevolvers.com` / `www.cloudevolvers.com` | `main` |
| **Test/Preview** | `test.cloudevolvers.com` | PR branches |

## Critical Rules

1. **NO FAKE DATA**: Never use Math.random() or generated statistics
2. **NO POP-UPS**: Always navigate to actual pages with URLs
3. **NO SCROLLBARS**: Use slice() to limit items, not overflow scrolling
4. **Real Data Only**: Only display confirmed, accurate information

## Tech Stack
- Frontend: React 18 + TypeScript + Vite
- Styling: Tailwind CSS + shadcn/ui
- Animations: Framer Motion
- Deployment: Cloudflare Pages
- DNS: Cloudflare DNS

## Quick Commands
```bash
# Development
bun dev

# Build
bun run build

# Deploy to preview
wrangler pages deploy dist --env preview

# Deploy to production
wrangler pages deploy dist --env production
```

For full instructions, see `.github/copilot-instructions.md`
