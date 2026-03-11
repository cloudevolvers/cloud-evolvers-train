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
├── VITE_SITE_URL
└── NODE_ENV
         │                                │
         └──────────┬─────────────────────┘
                    ▼
          GitHub Actions Deploy
          ├── bun run build (VITE_FORM_API_KEY injected from FORM_API_KEY)
          ├── wrangler pages secret put (each secret, with error checking)
          └── wrangler pages deploy dist
```

No secrets are ever set manually in the Cloudflare Pages dashboard. The pipeline is the only way secrets reach production.

**Naming rule:** GitHub Secret names match the CF Pages runtime env var names exactly. The only exception is `VITE_FORM_API_KEY` which is a build-time variable derived from the `FORM_API_KEY` secret (same value, different name because Vite requires the `VITE_` prefix).

## Env Var Rename Map

| Old Name | New Name | Type | Location |
|----------|----------|------|----------|
| `API_KEY` | `FORM_API_KEY` | secret (runtime) | GitHub Secrets → CF Pages via `wrangler pages secret put` |
| `VITE_API_KEY` | `VITE_FORM_API_KEY` | build-time | GitHub Secrets `FORM_API_KEY` → injected as `VITE_FORM_API_KEY` env var during `bun run build` |
| `EMAIL_AZURE_CLIENT_SECRET` | `EMAIL_CLIENT_SECRET` | secret (runtime) | GitHub Secrets → CF Pages via `wrangler pages secret put` |
| `AZURE_AD_TENANT_ID` | `EMAIL_TENANT_ID` | config | `wrangler.toml` |
| `EMAIL_AZURE_CLIENT_ID` / `AZURE_AD_CLIENT_ID` | `EMAIL_CLIENT_ID` | config | `wrangler.toml` |
| `EMAIL_SENDER` | `EMAIL_SENDER_ADDRESS` | config | `wrangler.toml` |
| `ADMIN_PASSWORD` | `ADMIN_PASSWORD` | secret (runtime) | GitHub Secrets → CF Pages via `wrangler pages secret put` |
| `VITE_ENVIRONMENT` | `VITE_ENVIRONMENT` | config | `wrangler.toml` (unchanged) |
| `VITE_SITE_URL` | `VITE_SITE_URL` | config | `wrangler.toml` (unchanged) |

**Removed (no longer used):** `VITE_AZURE_AD_CLIENT_ID`, `VITE_AZURE_AD_TENANT_ID`, `AZURE_AD_CLIENT_ID`, `AZURE_AD_CLIENT_SECRET`, `AZURE_AD_TENANT_ID` (from old Azure SWA deployment). These exist only in legacy config files that will be cleaned up.

## Changes Required

### 1. `wrangler.toml`

Update `[env.production]` and `[env.preview]` with renamed non-secret vars. Preserve existing D1 database bindings.

```toml
name = "cloud-evolvers-train"
compatibility_date = "2024-01-01"
pages_build_output_dir = "dist"

[vars]
NODE_ENV = "production"
VITE_SHOW_CONSTRUCTION_BANNER = "false"

# D1 Database bindings (top-level for all environments)
[[d1_databases]]
binding = "PRICING_DB"
database_name = "cloud-evolvers-pricing"
database_id = "c07b171f-987f-4d91-9126-64663b107611"

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

[[env.production.d1_databases]]
binding = "PRICING_DB"
database_name = "cloud-evolvers-pricing"
database_id = "c07b171f-987f-4d91-9126-64663b107611"

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

[[env.preview.d1_databases]]
binding = "PRICING_DB"
database_name = "cloud-evolvers-pricing"
database_id = "c07b171f-987f-4d91-9126-64663b107611"
```

### 2. GitHub Actions Deploy Workflow

Create/replace `deploy-cloudflare-pages.yml` with a workflow that:

1. Checks out code
2. Installs dependencies (`bun install`)
3. Builds with `VITE_FORM_API_KEY=${{ secrets.FORM_API_KEY }}` env var
4. Pushes each secret via `wrangler pages secret put` — each command must check exit code and fail the workflow on error
5. Deploys via `wrangler pages deploy dist`

Each `wrangler pages secret put` call must fail the workflow if it errors:
```yaml
- name: Set FORM_API_KEY secret
  run: echo "${{ secrets.FORM_API_KEY }}" | wrangler pages secret put FORM_API_KEY --project-name cloud-evolvers-train
  # wrangler exits non-zero on failure; GitHub Actions fails the step automatically
```

Secrets needed in GitHub:
- `CLOUDFLARE_API_TOKEN` — for wrangler auth
- `CLOUDFLARE_ACCOUNT_ID` — for wrangler auth
- `FORM_API_KEY` — shared between frontend (as VITE_FORM_API_KEY at build) and backend (as FORM_API_KEY at runtime)
- `EMAIL_CLIENT_SECRET` — Azure AD client secret for Graph API
- `ADMIN_PASSWORD` — pricing admin endpoint

### 3. Code Changes (Rename Env Vars)

**Complete file list** (verified by codebase search):

| File | Changes |
|------|---------|
| `functions/api/submit-consultation.ts` | `Env` interface: rename `API_KEY`→`FORM_API_KEY`, `AZURE_AD_CLIENT_ID`→remove (unused after rename), `AZURE_AD_TENANT_ID`→`EMAIL_TENANT_ID`, `EMAIL_AZURE_CLIENT_ID`→`EMAIL_CLIENT_ID`, `EMAIL_AZURE_CLIENT_SECRET`→`EMAIL_CLIENT_SECRET`, `EMAIL_SENDER`→`EMAIL_SENDER_ADDRESS`. Remove fallback `env.EMAIL_AZURE_CLIENT_ID \|\| env.AZURE_AD_CLIENT_ID` → just `env.EMAIL_CLIENT_ID`. Remove fallback `env.EMAIL_SENDER \|\| 'training@cloudevolvers.com'` → just `env.EMAIL_SENDER_ADDRESS`. |
| `functions/api/health.ts` | `Env` interface: same renames as submit-consultation. Also rename `AZURE_AD_CLIENT_ID`→remove, `AZURE_AD_TENANT_ID`→`EMAIL_TENANT_ID`. Update all status check references. |
| `functions/api/monitor.ts` | `Env` interface: `API_KEY`→`FORM_API_KEY`, `AZURE_AD_TENANT_ID`→`EMAIL_TENANT_ID`, `EMAIL_AZURE_CLIENT_ID`→`EMAIL_CLIENT_ID`, `EMAIL_AZURE_CLIENT_SECRET`→`EMAIL_CLIENT_SECRET`, `EMAIL_SENDER`→`EMAIL_SENDER_ADDRESS`. Update all env check references. |
| `functions/api/pricing/admin.ts` | `Env` interface: `API_KEY`→`FORM_API_KEY`. Update `authenticateAdmin` function. |
| `src/components/training/TrainingBookingForm.tsx` | `import.meta.env.VITE_API_KEY` → `import.meta.env.VITE_FORM_API_KEY`. Remove hardcoded fallback. |
| `src/components/TrainingConsultationForm.tsx` | `import.meta.env.VITE_API_KEY` → `import.meta.env.VITE_FORM_API_KEY`. Remove hardcoded fallback `'dev-cloudevolvers-api-key-2024-secure'`. |

**Files NOT needing changes** (verified):
- `functions/api/pricing.ts` — uses `PRICING_DB` (D1) and optional `API_KEY` for admin; does NOT reference `API_KEY` in its Env interface (it's read-only public)
- `src/pages/training/TrainingDetailPage.tsx` — no env var references
- `src/lib/pricing.ts` — no env var references

### 4. Remove Hardcoded Fallbacks

**`TrainingBookingForm.tsx`** — current:
```typescript
'x-api-key': import.meta.env.VITE_API_KEY || 'dev-cloudevolvers-api-key-2024-secure'
```
Becomes:
```typescript
'x-api-key': import.meta.env.VITE_FORM_API_KEY
```

**`TrainingConsultationForm.tsx`** — current:
```typescript
'x-api-key': import.meta.env.VITE_API_KEY || 'dev-cloudevolvers-api-key-2024-secure'
```
Becomes:
```typescript
'x-api-key': import.meta.env.VITE_FORM_API_KEY
```

No fallbacks. If the key isn't set at build time, the form won't work — correct behavior (fail loudly, not silently with a wrong key).

### 5. Update Monitor Workflows

**`secret-expiry-monitor.yml`:**
- Change `secrets.API_KEY` → `secrets.FORM_API_KEY`
- Update issue body: change `EMAIL_AZURE_CLIENT_SECRET` reference → `EMAIL_CLIENT_SECRET`
- Update fix instructions: reference GitHub Secrets instead of Cloudflare Pages dashboard

**`contact-form-monitor.yml`:**
- Update issue body: replace "Azure Functions deployment" with "Cloudflare Pages deployment"
- Update action steps: replace "environment variables are configured correctly" with accurate CF Pages guidance
- No env var name changes needed (this workflow only hits URLs, doesn't use secret names)

### 6. Clean Up Legacy Config Files

**Delete** `.github/workflows/config/deployments.json`:
- Contains old Azure Static Web Apps deployment configs (staging, dta, prod) with `VITE_AZURE_AD_CLIENT_ID`, `VITE_AZURE_AD_TENANT_ID`, and Azure SWA-specific settings
- These environments no longer exist; the site runs on Cloudflare Pages
- All relevant config is now in `wrangler.toml`

**Delete** `.github/env-vars-state.json`:
- Documents env vars stored in GitHub Secrets using old names (`API_KEY`, `AZURE_AD_CLIENT_SECRET`, etc.)
- After migration, GitHub Secrets will have new names; this stale reference file adds confusion

### 7. Clean Up Cloudflare Dashboard

After the pipeline is verified working:
- Remove all manually-set env vars from Cloudflare Pages dashboard
- The pipeline sets everything on each deploy

### 8. Post-Deploy Verification

The deploy workflow must include a verification step after deployment:

```yaml
- name: Verify deployment
  run: |
    # Wait for deployment to propagate
    sleep 30

    # Check health endpoint
    RESPONSE=$(curl -s -w "\n%{http_code}" "https://cloudevolvers.com/api/health")
    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
    if [ "$HTTP_CODE" != "200" ]; then
      echo "::error::Health check failed with HTTP $HTTP_CODE"
      exit 1
    fi

    # Verify env vars are configured
    BODY=$(echo "$RESPONSE" | head -n -1)
    if echo "$BODY" | grep -q "missing"; then
      echo "::error::Some environment variables are missing"
      echo "$BODY"
      exit 1
    fi

    echo "Deployment verified successfully"
```

## Migration Plan

To avoid a broken intermediate state, apply changes in this order:

1. **Set new GitHub Secrets** — add `FORM_API_KEY`, `EMAIL_CLIENT_SECRET`, `ADMIN_PASSWORD` with correct values. Keep old secrets (`API_KEY`, etc.) temporarily.
2. **Update code** — rename all env var references in functions and frontend code. The code changes are backward-compatible because the actual values haven't changed yet, and the old CF Pages env vars still exist.
3. **Update `wrangler.toml`** — add the new non-secret config vars.
4. **Create deploy workflow** — the new GitHub Actions workflow that builds and deploys.
5. **Deploy via new workflow** — this sets the new secret names in CF Pages and builds the frontend with `VITE_FORM_API_KEY`.
6. **Run post-deploy verification** — health check + form submission test.
7. **Clean up** — remove old GitHub Secrets, delete legacy config files, remove old CF dashboard env vars.

Steps 2-4 can be done in a single PR. Steps 5-7 are the deploy and cleanup.

## Out of Scope

- Azure Key Vault integration (can be added later if GitHub Secrets proves insufficient)
- Automatic secret rotation
- Changes to the email sending logic itself
- Old Azure SWA deployment infrastructure (staging, dta environments in deployments.json)

## Success Criteria

- All secrets come from GitHub Actions, zero manual Cloudflare dashboard config
- `wrangler.toml` is the single source of truth for non-secret config
- Form submission works end-to-end after deploy (both TrainingBookingForm and TrainingConsultationForm)
- Monitor endpoint passes health check with new env var names
- No hardcoded fallback API keys in frontend code
- Legacy config files (`deployments.json`, `env-vars-state.json`) removed
- Deploy workflow fails loudly if any `wrangler pages secret put` command errors
