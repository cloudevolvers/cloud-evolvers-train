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

**When IP-blocked**, use the Global API Key from Azure Key Vault (not IP-restricted):
```bash
CF_GLOBAL_KEY=$(az keyvault secret show --vault-name reactor-prod-kv --name cloudfare-cf-global-api-key --query value -o tsv)
CLOUDFLARE_API_KEY="$CF_GLOBAL_KEY" CLOUDFLARE_EMAIL="yairknijn@gmail.com" CLOUDFLARE_API_TOKEN="" wrangler <command>
```

Cloudflare credentials are stored in:
- **Local**: `.env` (gitignored) — `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_DNS_TOKEN`
- **Azure Key Vault**: `reactor-prod-kv` — `cloudfare-cf-global-api-key`, `cf-mcp-api-token`

See `.env.example` for the expected environment variables. The actual `.env` file is gitignored.

### Deployment Environments

| Environment | URL | Branch |
|-------------|-----|--------|
| **Production** | `cloudevolvers.com` / `www.cloudevolvers.com` | `master` |
| **Test/Preview** | `test.cloudevolvers.com` | PR branches |

## Git Branch Rules (CRITICAL)

- **Default branch is `master`** — NEVER use `main`
- **Always use git worktrees** for feature work — never commit directly on `master`
- PR flow: `feature/*` → squash merge to `master`

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
