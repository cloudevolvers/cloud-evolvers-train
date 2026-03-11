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

**Removed (no longer used):** `VITE_AZURE_AD_CLIENT_ID`, `VITE_AZURE_AD_TENANT_ID`, `AZURE_AD_CLIENT_ID`, `AZURE_AD_CLIENT_SECRET`, `AZURE_AD_TENANT_ID`, `EMAIL_AZURE_TENANT_ID` (from old Azure SWA deployment). These exist only in legacy config files and scripts that will be cleaned up or deleted.

## Changes Required

### 1. `wrangler.toml`

Update `[env.production]` and `[env.preview]` with renamed non-secret vars. Preserve existing D1 database bindings.

```toml
name = "cloud-evolvers-train"
compatibility_date = "2024-01-01"
pages_build_output_dir = "dist"

# Common vars shared by all environments
[vars]
NODE_ENV = "production"
VITE_SHOW_CONSTRUCTION_BANNER = "false"

# D1 Database bindings (top-level for all environments)
[[d1_databases]]
binding = "PRICING_DB"
database_name = "cloud-evolvers-pricing"
database_id = "c07b171f-987f-4d91-9126-64663b107611"

# Per-environment vars override/extend top-level [vars].
# EMAIL_* config vars are environment-specific additions.
# NODE_ENV and VITE_SHOW_CONSTRUCTION_BANNER inherit from top-level.

[env.production]
vars = {
  VITE_ENVIRONMENT = "production",
  VITE_SITE_URL = "https://cloudevolvers.com",
  EMAIL_TENANT_ID = "34dd9821-1508-4858-974c-e5fd1493a58f",
  EMAIL_CLIENT_ID = "61cfceb9-9bf4-456c-8170-2a4a521abf8d",
  EMAIL_SENDER_ADDRESS = "hello@cloudevolvers.com"
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
  EMAIL_SENDER_ADDRESS = "hello@cloudevolvers.com"
}

[[env.preview.d1_databases]]
binding = "PRICING_DB"
database_name = "cloud-evolvers-pricing"
database_id = "c07b171f-987f-4d91-9126-64663b107611"
```

### 2. GitHub Actions Deploy Workflow

Create/replace `.github/workflows/deploy-cloudflare-pages.yml`. The existing workflow suppresses errors with `2>/dev/null || true` on every `wrangler pages secret put` call — this is the root cause of silent secret reset failures and must be removed.

The new workflow:

1. Checks out code
2. Sets up Bun (project uses `bun`, not `npm`)
3. Installs dependencies (`bun install`)
4. Builds with `VITE_FORM_API_KEY=${{ secrets.FORM_API_KEY }}` env var
5. Pushes each secret via `wrangler pages secret put` — each command must fail the workflow on error (no `|| true`)
6. Deploys via `wrangler pages deploy dist`
7. Runs post-deploy verification (see Section 8)

Each `wrangler pages secret put` call must fail the workflow if it errors:
```yaml
- name: Set FORM_API_KEY secret
  run: echo "${{ secrets.FORM_API_KEY }}" | wrangler pages secret put FORM_API_KEY --project-name cloud-evolvers-train
  # wrangler exits non-zero on failure; GitHub Actions fails the step automatically
  # Do NOT add 2>/dev/null || true — that's the anti-pattern we're eliminating
```

Secrets needed in GitHub:
- `CLOUDFLARE_API_TOKEN` — for wrangler auth
- `CLOUDFLARE_ACCOUNT_ID` — for wrangler auth
- `FORM_API_KEY` — shared between frontend (as VITE_FORM_API_KEY at build) and backend (as FORM_API_KEY at runtime)
- `EMAIL_CLIENT_SECRET` — Azure AD client secret for Graph API
- `ADMIN_PASSWORD` — pricing admin endpoint

### 3. Code Changes (Rename Env Vars)

**Complete file list** (verified by codebase search):

**Backend functions:**

| File | Changes |
|------|---------|
| `functions/api/submit-consultation.ts` | `Env` interface: `API_KEY`→`FORM_API_KEY`, `AZURE_AD_CLIENT_ID`→remove, `AZURE_AD_TENANT_ID`→`EMAIL_TENANT_ID`, `EMAIL_AZURE_CLIENT_ID`→`EMAIL_CLIENT_ID`, `EMAIL_AZURE_CLIENT_SECRET`→`EMAIL_CLIENT_SECRET`, `EMAIL_SENDER`→`EMAIL_SENDER_ADDRESS`. Remove fallback `env.EMAIL_AZURE_CLIENT_ID \|\| env.AZURE_AD_CLIENT_ID` → just `env.EMAIL_CLIENT_ID`. Remove fallback `env.EMAIL_SENDER \|\| 'training@cloudevolvers.com'` → just `env.EMAIL_SENDER_ADDRESS`. Update token URL (line 76) and debug output (line 99) to use `env.EMAIL_TENANT_ID`. |
| `functions/api/health.ts` | `Env` interface: `API_KEY`→`FORM_API_KEY`, `AZURE_AD_CLIENT_ID`→remove, `AZURE_AD_TENANT_ID`→`EMAIL_TENANT_ID`, `EMAIL_AZURE_CLIENT_ID`→`EMAIL_CLIENT_ID`, `EMAIL_AZURE_CLIENT_SECRET`→`EMAIL_CLIENT_SECRET`, `EMAIL_SENDER`→`EMAIL_SENDER_ADDRESS`. Update all status check display names. |
| `functions/api/monitor.ts` | `Env` interface: `API_KEY`→`FORM_API_KEY`, `AZURE_AD_TENANT_ID`→`EMAIL_TENANT_ID`, `EMAIL_AZURE_CLIENT_ID`→`EMAIL_CLIENT_ID`, `EMAIL_AZURE_CLIENT_SECRET`→`EMAIL_CLIENT_SECRET`, `EMAIL_SENDER`→`EMAIL_SENDER_ADDRESS`. Update env check display names and token URL. |
| `functions/api/pricing.ts` | `Env` interface: `API_KEY`→`FORM_API_KEY`. Update optional auth check (line 123). |
| `functions/api/pricing/admin.ts` | `Env` interface: `API_KEY`→`FORM_API_KEY`. Update `authenticateAdmin` function. |

**Frontend components:**

| File | Changes |
|------|---------|
| `src/components/training/TrainingBookingForm.tsx` | `import.meta.env.VITE_API_KEY` → `import.meta.env.VITE_FORM_API_KEY`. Remove hardcoded fallback. |
| `src/components/TrainingConsultationForm.tsx` | `import.meta.env.VITE_API_KEY` → `import.meta.env.VITE_FORM_API_KEY`. Remove hardcoded fallback `'dev-cloudevolvers-api-key-2024-secure'`. |

**Workflows** (see also Sections 2 and 5):

| File | Changes |
|------|---------|
| `.github/workflows/deploy-cloudflare-pages.yml` | Full rewrite (see Section 2). Replace `npm` with `bun`, remove `2>/dev/null \|\| true`, use new secret names, add post-deploy verification. |
| `.github/workflows/secret-expiry-monitor.yml` | `secrets.API_KEY` → `secrets.FORM_API_KEY`. Update issue body references. |
| `.github/workflows/contact-form-monitor.yml` | Update stale issue body text (see Section 5). |

**Scripts to delete** (legacy Azure SWA tooling, no longer applicable):

| File | Reason |
|------|--------|
| `.github/scripts/check-env-changes.sh` | References old env var names (`API_KEY`, `EMAIL_AZURE_*`). SWA-specific Azure CLI logic. |
| `scripts/setup-github-secrets.sh` | Pushes old secret names (`AZURE_AD_CLIENT_ID`, `API_KEY`, etc.). Will be replaced by the deploy workflow. |
| `docs/testing/test-graph-working.sh` | Contains a **hardcoded Azure AD client secret** as a fallback value. Must be deleted, not just updated. |

**Scripts and docs with stale references** (update old names in cleanup step):

These files contain references to old env var names in comments, READMEs, or test scripts. They don't affect runtime behavior but should be updated for consistency:
- `scripts/maintenance/production-verification.sh`
- `scripts/maintenance/verify-optimization.sh`
- `scripts/test-pr-preview.sh`
- `docs/testing/test-graph-api.js`
- `docs/deployment/AZURE_FUNCTIONS_OPTIMIZATION.md`
- `docs/deployment/NEXT_SESSION_PROMPT.md`
- `docs/deployment/STAGING_DEPLOYMENT_SETUP.md`
- `docs/deployment/GRAPH_API_CONFIG_COMPLETE.md`
- `docs/deployment/ENV_VARS_CLEANUP_VERIFICATION.md`
- `docs/deployment/DEPLOYMENT_SUMMARY.md`
- `docs/deployment/PR_PREVIEW_SETUP.md`
- `docs/PR_PREVIEW_SETUP.md`
- `README.md` (env var setup section)
- `infra/README.md`

**Files NOT needing changes** (verified):
- `src/pages/training/TrainingDetailPage.tsx` — no env var references
- `src/lib/pricing.ts` — frontend pricing utility, no env var references (different from `functions/api/pricing.ts` which IS listed above)

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

1. **Set new GitHub Secrets** — add `FORM_API_KEY`, `EMAIL_CLIENT_SECRET`, `ADMIN_PASSWORD`, `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` with correct values. Keep old secrets (`API_KEY`, etc.) temporarily.
2. **Update code** — rename all env var references in functions and frontend code (Section 3). Backend renames are backward-compatible (old CF runtime env vars still exist until next deploy). **Frontend renames are NOT backward-compatible** — the build will look for `VITE_FORM_API_KEY` instead of `VITE_API_KEY`, so steps 2-6 must be deployed together via the new workflow.
3. **Update `wrangler.toml`** — add the new non-secret config vars (Section 1).
4. **Create deploy workflow** — the new GitHub Actions workflow that builds and deploys (Section 2).
5. **Update monitor workflows** — rename secret references in monitor workflows (Section 5).
6. **Delete legacy scripts** — remove `check-env-changes.sh` and `setup-github-secrets.sh` (Section 3).
7. **Deploy via new workflow** — this sets the new secret names in CF Pages and builds the frontend with `VITE_FORM_API_KEY`.
8. **Run post-deploy verification** — health check + form submission test (Section 8).
9. **Clean up** — remove old GitHub Secrets, delete legacy config files (`deployments.json`, `env-vars-state.json`), remove old CF dashboard env vars, update stale doc/script references.

Steps 2-6 can be done in a single PR. Steps 7-9 are the deploy and cleanup.

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
