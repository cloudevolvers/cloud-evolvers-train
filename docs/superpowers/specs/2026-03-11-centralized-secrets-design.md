# Centralized Secret & Config Management

## Problem

Secrets are scattered across multiple locations (Cloudflare Pages dashboard, hardcoded fallbacks in frontend code, wrangler.toml). This caused a 20-day outage when the Azure AD client secret expired unnoticed, and repeated issues with Cloudflare API PATCH calls silently resetting secret values on redeploy.

## Solution

Single pipeline: `wrangler.toml` for config, GitHub Actions secrets for sensitive values, GitHub Actions deploys everything.

## Architecture

```
wrangler.toml (committed)          GitHub Secrets
├── EMAIL_TENANT_ID                ├── EMAIL_CLIENT_SECRET
├── EMAIL_CLIENT_ID                ├── FORM_API_KEY
├── EMAIL_SENDER_ADDRESS           └── ADMIN_PASSWORD
├── VITE_ENVIRONMENT
└── VITE_SITE_URL
         │                                │
         └──────────┬─────────────────────┘
                    ▼
          GitHub Actions Deploy
          ├── bun run build (with VITE_ vars from secrets)
          ├── wrangler pages secret put (each secret)
          └── wrangler pages deploy dist
```

No secrets are ever set manually in the Cloudflare Pages dashboard. The pipeline is the only way secrets reach production.

## Env Var Rename Map

| Old Name | New Name | Type | Location |
|----------|----------|------|----------|
| `API_KEY` | `FORM_API_KEY` | secret | GitHub Secrets |
| `VITE_API_KEY` | `VITE_FORM_API_KEY` | build-time | GitHub Secrets (injected at build) |
| `EMAIL_AZURE_CLIENT_SECRET` | `EMAIL_CLIENT_SECRET` | secret | GitHub Secrets |
| `AZURE_AD_TENANT_ID` | `EMAIL_TENANT_ID` | config | `wrangler.toml` |
| `EMAIL_AZURE_CLIENT_ID` / `AZURE_AD_CLIENT_ID` | `EMAIL_CLIENT_ID` | config | `wrangler.toml` |
| `EMAIL_SENDER` | `EMAIL_SENDER_ADDRESS` | config | `wrangler.toml` |
| `ADMIN_PASSWORD` | `ADMIN_PASSWORD` | secret | GitHub Secrets |
| `VITE_ENVIRONMENT` | `VITE_ENVIRONMENT` | config | `wrangler.toml` (unchanged) |
| `VITE_SITE_URL` | `VITE_SITE_URL` | config | `wrangler.toml` (unchanged) |

## Changes Required

### 1. `wrangler.toml`

Add non-secret env vars to `[env.production]` and `[env.preview]`:

```toml
[env.production]
vars = {
  VITE_ENVIRONMENT = "production",
  VITE_SITE_URL = "https://cloudevolvers.com",
  EMAIL_TENANT_ID = "34dd9821-1508-4858-974c-e5fd1493a58f",
  EMAIL_CLIENT_ID = "61cfceb9-9bf4-456c-8170-2a4a521abf8d",
  EMAIL_SENDER_ADDRESS = "hello@cloudevolvers.com",
  NODE_ENV = "production",
  VITE_SHOW_CONSTRUCTION_BANNER = "false"
}

[env.preview]
vars = {
  VITE_ENVIRONMENT = "preview",
  VITE_SITE_URL = "https://test.cloudevolvers.com",
  EMAIL_TENANT_ID = "34dd9821-1508-4858-974c-e5fd1493a58f",
  EMAIL_CLIENT_ID = "61cfceb9-9bf4-456c-8170-2a4a521abf8d",
  EMAIL_SENDER_ADDRESS = "hello@cloudevolvers.com",
  NODE_ENV = "production",
  VITE_SHOW_CONSTRUCTION_BANNER = "false"
}
```

### 2. GitHub Actions Deploy Workflow

Replace `deploy-cloudflare-pages.yml` with a workflow that:

1. Checks out code
2. Installs dependencies (`bun install`)
3. Builds with `VITE_FORM_API_KEY` from GitHub Secrets
4. Pushes secrets via `wrangler pages secret put` for each secret
5. Deploys via `wrangler pages deploy dist`

Secrets needed in GitHub:
- `CLOUDFLARE_API_TOKEN` — for wrangler auth
- `CLOUDFLARE_ACCOUNT_ID` — for wrangler auth
- `FORM_API_KEY` — shared between frontend and backend
- `EMAIL_CLIENT_SECRET` — Azure AD client secret for Graph API
- `ADMIN_PASSWORD` — pricing admin endpoint

### 3. Code Changes (Rename Env Vars)

Files to update:

- `functions/api/submit-consultation.ts` — `Env` interface + all references
- `functions/api/health.ts` — `Env` interface + all references
- `functions/api/monitor.ts` — `Env` interface + all references
- `functions/api/pricing.ts` — if it uses `ADMIN_PASSWORD`
- `src/components/training/TrainingBookingForm.tsx` — `VITE_FORM_API_KEY`
- `src/pages/training/TrainingDetailPage.tsx` — remove any `VITE_API_KEY` references
- `src/lib/pricing.ts` — if it references env vars

### 4. Remove Hardcoded Fallback

In `TrainingBookingForm.tsx`, the current code:
```typescript
'x-api-key': import.meta.env.VITE_API_KEY || 'dev-cloudevolvers-api-key-2024-secure'
```

Becomes:
```typescript
'x-api-key': import.meta.env.VITE_FORM_API_KEY
```

No fallback. If the key isn't set at build time, the form won't work — which is the correct behavior (fail loudly, not silently with a wrong key).

### 5. Clean Up Cloudflare Dashboard

After the pipeline is verified:
- Remove all manually-set env vars from Cloudflare Pages dashboard
- The pipeline sets everything on each deploy

### 6. Update Monitor Workflow

Update `secret-expiry-monitor.yml` to use the new env var names when calling the API.

## Out of Scope

- Azure Key Vault integration (can be added later if GitHub Secrets proves insufficient)
- Automatic secret rotation
- Changes to the email sending logic itself

## Success Criteria

- All secrets come from GitHub Actions, zero manual Cloudflare dashboard config
- `wrangler.toml` is the single source of truth for non-secret config
- Form submission works end-to-end after deploy
- Monitor endpoint passes health check
- No hardcoded fallback API keys in frontend code
