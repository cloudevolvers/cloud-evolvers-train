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

## Deployment Verification (CRITICAL)

**Always inspect end-to-end when deploying.** After pushing or merging:
1. **Monitor the CI/CD run** — watch `gh run watch` or check the Cloudflare Pages dashboard until the deploy completes
2. **Inspect the live page** — open the deployed URL and verify the changes are visible and working correctly
3. **Never assume a deploy succeeded** — always confirm visually in the browser before marking work as done

## Critical Rules

1. **NO FAKE DATA**: Never use Math.random() or generated statistics
2. **NO POP-UPS**: Always navigate to actual pages with URLs
3. **NO SCROLLBARS**: Use slice() to limit items, not overflow scrolling
4. **Real Data Only**: Only display confirmed, accurate information
5. **NO HARDCODED PRICES**: All pricing comes from D1 database via the API. NEVER put prices in JSON files, TypeScript constants, or frontend code. Update prices via `/admin/bookings` or the training sessions API. If a course has no scheduled session, show "Contact us" — never a stale number.
6. **Promotions via DB only**: Promotional pricing is managed through the admin dashboard or API by updating the `price` field on training sessions. No hardcoded promotional discount logic in frontend code.
7. **NO GENERIC ICONS**: Do not use generic rounded-corner icons above headings or on cards (Shield, Cloud, Cog, etc.). They look templated and AI-generated. Use real photos, typography, or nothing. If a card has a background photo, that IS the visual — don't stack an icon on top.
8. **LIGHT MODE ONLY**: The site is white/light mode for all pages except blog (which keeps a dark/light toggle). Do not add `dark:` classes to non-blog components.

## Images

Stock photos are stored locally in `public/images/` and sourced from Pexels and Unsplash:
- **Pexels**: `public/images/pexels/` — use the Pexels API or download directly
- **Unsplash**: `public/images/unsplash/` — use the Unsplash API or download directly
- **Training categories**: `public/training-categories/` — photos for each training track card
- **Services**: `public/images/services/` — photos for service pages

When adding new images:
1. Download from Pexels or Unsplash (both have free licenses for commercial use)
2. Save to the appropriate directory with a descriptive filename
3. Reference as `/images/pexels/filename.jpg` or `/images/unsplash/filename.jpg`
4. Prefer real photos over AI-generated or stock illustration art

## Code Quality

- **Clean up as you go**: When touching a file, improve code you find — remove dead imports, unused variables, duplicated logic, stale comments. Leave it better than you found it.
- **No dead code**: Delete unused files, components, types, and exports. Don't comment out code "for later" — git has history.
- **Single source of truth**: Don't duplicate data across JSON files, TypeScript constants, and the database. Pick one source and derive everything from it.
- **No AI slop**: Write authentic copy. Avoid generic phrases like "empower your journey" or "unlock your potential". Write like a real person.

## Tech Stack
- Frontend: React 18 + TypeScript + Vite
- Styling: Tailwind CSS + shadcn/ui
- Animations: Framer Motion
- Deployment: Cloudflare Pages
- DNS: Cloudflare DNS

## Package Manager
**Always use `bun`** — never npm or yarn. All commands should use `bun` or `bunx`.

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
