# Centralized Secret & Config Management — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move all secrets and config into a single GitHub Actions → wrangler deploy pipeline, rename env vars to be descriptive, and remove all hardcoded fallbacks and legacy config.

**Architecture:** `wrangler.toml` holds non-secret config (EMAIL_TENANT_ID, EMAIL_CLIENT_ID, etc.). GitHub Secrets holds sensitive values (FORM_API_KEY, EMAIL_CLIENT_SECRET, ADMIN_PASSWORD). A GitHub Actions workflow builds the frontend with VITE_FORM_API_KEY, pushes secrets via `wrangler pages secret put`, and deploys via `wrangler pages deploy dist`.

**Tech Stack:** Cloudflare Pages, Cloudflare Workers (Pages Functions), GitHub Actions, Bun, wrangler CLI, TypeScript, React/Vite

**Spec:** `docs/superpowers/specs/2026-03-11-centralized-secrets-design.md`

---

## Chunk 1: Backend Function Renames

### Task 1: Rename env vars in `functions/api/submit-consultation.ts`

**Files:**
- Modify: `functions/api/submit-consultation.ts`

- [ ] **Step 1: Update the Env interface**

Replace the current `Env` interface (lines 8-15) with:

```typescript
interface Env {
  FORM_API_KEY: string;
  EMAIL_TENANT_ID: string;
  EMAIL_CLIENT_ID: string;
  EMAIL_CLIENT_SECRET: string;
  EMAIL_SENDER_ADDRESS: string;
}
```

The old interface had `API_KEY`, `AZURE_AD_CLIENT_ID`, `AZURE_AD_TENANT_ID`, `EMAIL_AZURE_CLIENT_ID`, `EMAIL_AZURE_CLIENT_SECRET`, `EMAIL_SENDER`. We remove `AZURE_AD_CLIENT_ID` entirely (was only used as a fallback).

- [ ] **Step 2: Update all env references in the function body**

1. Line 44: `apiKey !== env.API_KEY` → `apiKey !== env.FORM_API_KEY`
2. Line 72: `const emailClientId = env.EMAIL_AZURE_CLIENT_ID || env.AZURE_AD_CLIENT_ID;` → `const emailClientId = env.EMAIL_CLIENT_ID;`
3. Line 73: `const emailSender = env.EMAIL_SENDER || 'training@cloudevolvers.com';` → `const emailSender = env.EMAIL_SENDER_ADDRESS;`
4. Line 76: `env.AZURE_AD_TENANT_ID` → `env.EMAIL_TENANT_ID` (in the token URL)
5. Line 82: `env.EMAIL_AZURE_CLIENT_SECRET` → `env.EMAIL_CLIENT_SECRET`
6. Line 98: `clientId: emailClientId?.substring(0, 8) + '...',` → `clientId: emailClientId.substring(0, 8) + '...',` (remove optional chaining — no longer nullable)
7. Line 99: `tenantId: env.AZURE_AD_TENANT_ID?.substring(0, 8) + '...',` → `tenantId: env.EMAIL_TENANT_ID.substring(0, 8) + '...',`

- [ ] **Step 3: Verify the build compiles**

Run: `bun run build`
Expected: Build succeeds with no TypeScript errors in this file.

- [ ] **Step 4: Commit**

```bash
git add functions/api/submit-consultation.ts
git commit -m "refactor: rename env vars in submit-consultation.ts

API_KEY→FORM_API_KEY, AZURE_AD_*→EMAIL_*, remove fallbacks"
```

---

### Task 2: Rename env vars in `functions/api/health.ts`

**Files:**
- Modify: `functions/api/health.ts`

- [ ] **Step 1: Update the Env interface**

Replace the current `Env` interface (lines 5-13) with:

```typescript
interface Env {
  FORM_API_KEY: string;
  EMAIL_TENANT_ID: string;
  EMAIL_CLIENT_ID: string;
  EMAIL_CLIENT_SECRET: string;
  EMAIL_SENDER_ADDRESS: string;
  ADMIN_PASSWORD: string;
}
```

Removed `AZURE_AD_CLIENT_ID` and `AZURE_AD_TENANT_ID` (replaced by EMAIL_ prefixed vars).

- [ ] **Step 2: Update all status check display names**

Replace the `config` object's `environment` property (lines 29-39) with:

```typescript
    environment: {
      FORM_API_KEY: env.FORM_API_KEY ? '✅ configured' : '❌ missing',
      EMAIL_TENANT_ID: env.EMAIL_TENANT_ID ? '✅ configured' : '❌ missing',
      EMAIL_CLIENT_ID: env.EMAIL_CLIENT_ID ? '✅ configured' : '❌ missing',
      EMAIL_CLIENT_SECRET: env.EMAIL_CLIENT_SECRET ? `✅ configured (${env.EMAIL_CLIENT_SECRET.length} chars)` : '❌ missing',
      EMAIL_SENDER_ADDRESS: env.EMAIL_SENDER_ADDRESS ? `✅ ${env.EMAIL_SENDER_ADDRESS}` : '❌ missing',
      ADMIN_PASSWORD: env.ADMIN_PASSWORD ? '✅ configured' : '❌ missing',
    },
```

- [ ] **Step 3: Verify the build compiles**

Run: `bun run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add functions/api/health.ts
git commit -m "refactor: rename env vars in health.ts"
```

---

### Task 3: Rename env vars in `functions/api/monitor.ts`

**Files:**
- Modify: `functions/api/monitor.ts`

- [ ] **Step 1: Update the Env interface**

Replace the current `Env` interface (lines 10-16) with:

```typescript
interface Env {
  FORM_API_KEY: string;
  EMAIL_TENANT_ID: string;
  EMAIL_CLIENT_ID: string;
  EMAIL_CLIENT_SECRET: string;
  EMAIL_SENDER_ADDRESS: string;
}
```

- [ ] **Step 2: Update all env references**

1. Line 35: `apiKey !== env.API_KEY` → `apiKey !== env.FORM_API_KEY`
2. Line 45: `env.EMAIL_AZURE_CLIENT_ID` → `env.EMAIL_CLIENT_ID`
3. Lines 52-56: Update env check object:

```typescript
  const envCheck = {
    EMAIL_TENANT_ID: !!env.EMAIL_TENANT_ID,
    EMAIL_CLIENT_ID: !!env.EMAIL_CLIENT_ID,
    EMAIL_CLIENT_SECRET: !!env.EMAIL_CLIENT_SECRET,
    EMAIL_SENDER_ADDRESS: !!env.EMAIL_SENDER_ADDRESS,
  };
```

4. Line 72: `env.AZURE_AD_TENANT_ID` → `env.EMAIL_TENANT_ID` (in the token URL)
5. Line 78: `env.EMAIL_AZURE_CLIENT_SECRET` → `env.EMAIL_CLIENT_SECRET`

- [ ] **Step 3: Verify the build compiles**

Run: `bun run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add functions/api/monitor.ts
git commit -m "refactor: rename env vars in monitor.ts"
```

---

### Task 4: Rename env vars in `functions/api/pricing.ts`

**Files:**
- Modify: `functions/api/pricing.ts`

- [ ] **Step 1: Update the Env interface**

Replace line 10 (`API_KEY: string;`) with:

```typescript
  FORM_API_KEY: string;
```

- [ ] **Step 2: Update the auth check**

Line 123: `apiKey !== env.API_KEY` → `apiKey !== env.FORM_API_KEY`

- [ ] **Step 3: Verify the build compiles**

Run: `bun run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add functions/api/pricing.ts
git commit -m "refactor: rename API_KEY to FORM_API_KEY in pricing.ts"
```

---

### Task 5: Rename env vars in `functions/api/pricing/admin.ts`

**Files:**
- Modify: `functions/api/pricing/admin.ts`

- [ ] **Step 1: Update the Env interface**

Replace line 10 (`API_KEY: string;`) with:

```typescript
  FORM_API_KEY: string;
```

- [ ] **Step 2: Update the authenticateAdmin function**

Line 31: `apiKey !== env.API_KEY` → `apiKey !== env.FORM_API_KEY`

- [ ] **Step 3: Verify the build compiles**

Run: `bun run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add functions/api/pricing/admin.ts
git commit -m "refactor: rename API_KEY to FORM_API_KEY in pricing/admin.ts"
```

---

## Chunk 2: Frontend & Config Changes

### Task 6: Remove hardcoded API key fallback in `TrainingBookingForm.tsx`

**Files:**
- Modify: `src/components/training/TrainingBookingForm.tsx`

- [ ] **Step 1: Update the API key reference**

Line 167: Replace:
```typescript
          'x-api-key': import.meta.env.VITE_API_KEY || 'dev-cloudevolvers-api-key-2024-secure'
```
With:
```typescript
          'x-api-key': import.meta.env.VITE_FORM_API_KEY
```

No fallback. If VITE_FORM_API_KEY isn't set at build time, the form fails — correct behavior.

- [ ] **Step 2: Verify the build compiles**

Run: `bun run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/training/TrainingBookingForm.tsx
git commit -m "refactor: use VITE_FORM_API_KEY, remove hardcoded fallback"
```

---

### Task 7: Remove hardcoded API key fallback in `TrainingConsultationForm.tsx`

**Files:**
- Modify: `src/components/TrainingConsultationForm.tsx`

- [ ] **Step 1: Update the API key reference**

Line 162: Replace:
```typescript
          'x-api-key': import.meta.env.VITE_API_KEY || 'dev-cloudevolvers-api-key-2024-secure'
```
With:
```typescript
          'x-api-key': import.meta.env.VITE_FORM_API_KEY
```

- [ ] **Step 2: Verify the build compiles**

Run: `bun run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/TrainingConsultationForm.tsx
git commit -m "refactor: use VITE_FORM_API_KEY, remove hardcoded fallback"
```

---

### Task 8: Update `wrangler.toml` with new config vars

**Files:**
- Modify: `wrangler.toml`

- [ ] **Step 1: Replace the full file contents**

The new `wrangler.toml` should be:

```toml
name = "cloud-evolvers-train"
compatibility_date = "2024-01-01"

# Cloudflare Pages configuration
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

# Preview/Test environment (for PRs and branches)
# URL: test.cloudevolvers.com (via branch deployments)
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

# Production environment (master branch)
# URL: cloudevolvers.com / www.cloudevolvers.com
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

# Custom domains configuration
# Production: cloudevolvers.com, www.cloudevolvers.com
# Preview/Test: test.cloudevolvers.com (branch deployments)
```

Key changes from current:
- `VITE_ENVIRONMENT` removed from top-level `[vars]` (now per-env only)
- `EMAIL_TENANT_ID`, `EMAIL_CLIENT_ID`, `EMAIL_SENDER_ADDRESS` added to both envs
- D1 bindings preserved in both envs
- Comments and section order preserved

- [ ] **Step 2: Verify the build compiles**

Run: `bun run build`
Expected: Build succeeds. wrangler.toml is only read at deploy time, not build time.

- [ ] **Step 3: Commit**

```bash
git add wrangler.toml
git commit -m "feat: add EMAIL_* config vars to wrangler.toml

EMAIL_TENANT_ID, EMAIL_CLIENT_ID, EMAIL_SENDER_ADDRESS now
managed in wrangler.toml instead of Cloudflare dashboard."
```

---

## Chunk 3: Deploy Workflow & Monitor Updates

### Task 9: Rewrite the deploy workflow

**Files:**
- Modify: `.github/workflows/deploy-cloudflare-pages.yml`

- [ ] **Step 1: Replace the full workflow file**

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: ["master"]
  pull_request:
    branches: ["master"]
  workflow_dispatch:

concurrency:
  group: deploy-cf-${{ github.ref }}
  cancel-in-progress: false

permissions:
  contents: read
  deployments: write

jobs:
  deploy:
    name: Build and Deploy
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v2

      - name: Install dependencies
        run: bun install

      - name: Set build date
        id: build-date
        run: echo "date=$(date -u +"%Y-%m-%dT%H:%M:%SZ")" >> $GITHUB_OUTPUT

      - name: Build application
        run: bun run build
        env:
          NODE_ENV: production
          VITE_COMMIT_SHA: ${{ github.sha }}
          VITE_ENVIRONMENT: ${{ github.ref_name == 'master' && 'production' || 'preview' }}
          VITE_BUILD_DATE: ${{ steps.build-date.outputs.date }}
          VITE_FORM_API_KEY: ${{ secrets.FORM_API_KEY }}

      - name: Install Wrangler
        run: npm install -g wrangler

      - name: Set FORM_API_KEY secret
        run: echo "${{ secrets.FORM_API_KEY }}" | wrangler pages secret put FORM_API_KEY --project-name cloud-evolvers-train
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}

      - name: Set EMAIL_CLIENT_SECRET secret
        run: echo "${{ secrets.EMAIL_CLIENT_SECRET }}" | wrangler pages secret put EMAIL_CLIENT_SECRET --project-name cloud-evolvers-train
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}

      - name: Set ADMIN_PASSWORD secret
        run: echo "${{ secrets.ADMIN_PASSWORD }}" | wrangler pages secret put ADMIN_PASSWORD --project-name cloud-evolvers-train
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}

      - name: Deploy to Cloudflare Pages
        id: deploy
        run: |
          set -e
          echo "Deploying to Cloudflare Pages..."

          OUTPUT=$(wrangler pages deploy dist --project-name=cloud-evolvers-train --branch=${{ github.ref_name }} 2>&1)
          echo "$OUTPUT"

          DEPLOYMENT_URL=$(echo "$OUTPUT" | grep -oP 'https://[^\s]+\.pages\.dev' | head -1 || echo "")
          echo "deployment_url=$DEPLOYMENT_URL" >> $GITHUB_OUTPUT
          echo "Deployment successful: $DEPLOYMENT_URL"
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}

      - name: Verify deployment
        if: github.ref_name == 'master'
        run: |
          echo "Waiting for deployment to propagate..."
          sleep 30

          RESPONSE=$(curl -s -w "\n%{http_code}" "https://cloudevolvers.com/api/health")
          HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
          BODY=$(echo "$RESPONSE" | head -n -1)

          echo "Health check HTTP status: $HTTP_CODE"
          echo "$BODY"

          if [ "$HTTP_CODE" != "200" ]; then
            echo "::error::Health check failed with HTTP $HTTP_CODE"
            exit 1
          fi

          if echo "$BODY" | grep -q "missing"; then
            echo "::error::Some environment variables are missing"
            exit 1
          fi

          echo "Deployment verified successfully"

      - name: Deployment Summary
        if: success()
        run: |
          echo "## Deployment Result" >> "$GITHUB_STEP_SUMMARY"
          echo "" >> "$GITHUB_STEP_SUMMARY"
          echo "| Field | Value |" >> "$GITHUB_STEP_SUMMARY"
          echo "|-------|-------|" >> "$GITHUB_STEP_SUMMARY"
          echo "| Project | cloud-evolvers-train |" >> "$GITHUB_STEP_SUMMARY"
          echo "| Branch | ${{ github.ref_name }} |" >> "$GITHUB_STEP_SUMMARY"
          echo "| Commit | ${{ github.sha }} |" >> "$GITHUB_STEP_SUMMARY"
          if [[ "${{ github.ref_name }}" == "master" ]]; then
            echo "| URL | https://cloudevolvers.com |" >> "$GITHUB_STEP_SUMMARY"
          else
            echo "| URL | ${{ steps.deploy.outputs.deployment_url }} |" >> "$GITHUB_STEP_SUMMARY"
          fi
```

Key changes from old workflow:
- `setup-node` + `npm ci` → `setup-bun` + `bun install`
- `VITE_API_KEY` → `VITE_FORM_API_KEY`
- Removed `VITE_AZURE_AD_CLIENT_ID`, `VITE_AZURE_AD_TENANT_ID` build vars (no longer needed)
- Each `wrangler pages secret put` is its own step (no `2>/dev/null || true`)
- Only 3 secrets pushed (FORM_API_KEY, EMAIL_CLIENT_SECRET, ADMIN_PASSWORD) — config vars come from wrangler.toml
- Added post-deploy health check verification
- Removed `feature/*`, `fix/*` triggers (only master + PRs)

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/deploy-cloudflare-pages.yml
git commit -m "feat: rewrite deploy workflow with centralized secret management

- Switch from npm to bun
- VITE_FORM_API_KEY replaces VITE_API_KEY
- Each secret push is a separate step (no error suppression)
- Config vars now come from wrangler.toml
- Post-deploy health check verification added"
```

---

### Task 10: Update `secret-expiry-monitor.yml`

**Files:**
- Modify: `.github/workflows/secret-expiry-monitor.yml`

- [ ] **Step 1: Update secret references and issue body**

Changes needed:
1. Line 20: `API_KEY: ${{ secrets.API_KEY }}` → `FORM_API_KEY: ${{ secrets.FORM_API_KEY }}`
2. Line 26: `"x-api-key: $API_KEY"` → `"x-api-key: $FORM_API_KEY"`
3. Line 46: `API_KEY: ${{ secrets.API_KEY }}` → `FORM_API_KEY: ${{ secrets.FORM_API_KEY }}`
4. Line 53: `"x-api-key: $API_KEY"` → `"x-api-key: $FORM_API_KEY"`
5. Line 118: `'3. Update \`EMAIL_AZURE_CLIENT_SECRET\` in [Cloudflare Pages settings]...'` → `'3. Update \`EMAIL_CLIENT_SECRET\` in GitHub Secrets for this repo'`
6. Line 119: Remove `'4. Redeploy the site',` (deploy workflow handles this automatically)

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/secret-expiry-monitor.yml
git commit -m "refactor: update secret-expiry-monitor to use new env var names

API_KEY→FORM_API_KEY, update fix instructions to reference GitHub Secrets"
```

---

### Task 11: Update `contact-form-monitor.yml`

**Files:**
- Modify: `.github/workflows/contact-form-monitor.yml`

- [ ] **Step 1: Update stale issue body text**

In the `Create Issue on Failure` step (the `script:` section), update these strings:
1. `'Please investigate the Azure Functions deployment and ensure:'` → `'Please investigate the Cloudflare Pages deployment and ensure:'`
2. `'1. The Azure Function App is running'` → `'1. The Cloudflare Pages deployment is live'`
3. `'2. Environment variables are configured correctly'` → `'2. Environment variables are set (check /api/health endpoint)'`
4. `'3. CORS settings allow the production domain'` → `'3. Secrets are configured via GitHub Actions deploy workflow'`

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/contact-form-monitor.yml
git commit -m "fix: update contact-form-monitor issue body for Cloudflare Pages"
```

---

## Chunk 4: Legacy Cleanup

### Task 12: Delete legacy scripts and config files

**Files:**
- Delete: `.github/scripts/check-env-changes.sh`
- Delete: `scripts/setup-github-secrets.sh`
- Delete: `docs/testing/test-graph-working.sh` (contains hardcoded Azure AD client secret)
- Delete: `.github/workflows/config/deployments.json`
- Delete: `.github/env-vars-state.json`

- [ ] **Step 1: Delete the files**

```bash
git rm .github/scripts/check-env-changes.sh
git rm scripts/setup-github-secrets.sh
git rm docs/testing/test-graph-working.sh
git rm .github/workflows/config/deployments.json
git rm .github/env-vars-state.json
```

If `.github/scripts/` or `.github/workflows/config/` directories become empty after deletion, git will remove them automatically.

- [ ] **Step 2: Commit**

```bash
git commit -m "chore: delete legacy SWA scripts and stale config files

- check-env-changes.sh: SWA-specific Azure CLI tooling
- setup-github-secrets.sh: pushed old secret names
- test-graph-working.sh: contained hardcoded client secret
- deployments.json: old Azure SWA deployment configs
- env-vars-state.json: documented old secret names"
```

---

### Task 13: Update stale references in docs and scripts

**Files:**
- Modify: `scripts/maintenance/production-verification.sh`
- Modify: `scripts/maintenance/verify-optimization.sh`
- Modify: `scripts/test-pr-preview.sh`
- Modify: `docs/testing/test-graph-api.js`
- Modify: `docs/deployment/AZURE_FUNCTIONS_OPTIMIZATION.md`
- Modify: `docs/deployment/NEXT_SESSION_PROMPT.md`
- Modify: `docs/deployment/STAGING_DEPLOYMENT_SETUP.md`
- Modify: `docs/deployment/GRAPH_API_CONFIG_COMPLETE.md`
- Modify: `docs/deployment/ENV_VARS_CLEANUP_VERIFICATION.md`
- Modify: `docs/deployment/DEPLOYMENT_SUMMARY.md`
- Modify: `docs/deployment/PR_PREVIEW_SETUP.md`
- Modify: `docs/PR_PREVIEW_SETUP.md`
- Modify: `README.md`
- Modify: `infra/README.md`

- [ ] **Step 1: Search and replace old env var names across all listed files**

Apply these replacements in each file where the old name appears:
- `VITE_API_KEY` → `VITE_FORM_API_KEY`
- `API_KEY` → `FORM_API_KEY` (context: where it refers to the form API key, not generic)
- `VITE_AZURE_AD_CLIENT_ID` → (remove or replace with `EMAIL_CLIENT_ID` if relevant)
- `VITE_AZURE_AD_TENANT_ID` → (remove or replace with `EMAIL_TENANT_ID` if relevant)
- `VITE_AZURE_AD_CLIENT_SECRET` → (remove — secrets should never be in VITE_ vars)
- `VITE_EMAIL_SENDER` → `EMAIL_SENDER_ADDRESS`
- `EMAIL_AZURE_CLIENT_ID` → `EMAIL_CLIENT_ID`
- `EMAIL_AZURE_CLIENT_SECRET` → `EMAIL_CLIENT_SECRET`
- `EMAIL_AZURE_TENANT_ID` → `EMAIL_TENANT_ID`
- `AZURE_AD_TENANT_ID` → `EMAIL_TENANT_ID`
- `AZURE_AD_CLIENT_ID` → `EMAIL_CLIENT_ID`
- `AZURE_AD_CLIENT_SECRET` → `EMAIL_CLIENT_SECRET`
- `EMAIL_SENDER` → `EMAIL_SENDER_ADDRESS` (where it refers to the sender address)

Use judgment per file: some docs may describe the old setup historically. In those cases, update the referenced names but keep the context clear.

- [ ] **Step 2: Commit**

```bash
git add scripts/ docs/ README.md infra/README.md
git commit -m "chore: update stale env var references in docs and scripts"
```

---

## Chunk 5: GitHub Secrets Setup & Verification

> **IMPORTANT:** Do NOT push any commits to the remote until Task 14 is complete. Pushing code before new secrets are set will trigger the old workflow (if still active) or the new workflow without the required secrets, causing a broken deployment.

### Task 14: Set new GitHub Secrets

This task is manual (requires GitHub repo admin access). The values are known from the current Cloudflare Pages configuration.

- [ ] **Step 1: Verify existing secrets**

Run: `gh secret list`

Check which of these already exist:
- `CLOUDFLARE_API_TOKEN` ← likely already exists
- `CLOUDFLARE_ACCOUNT_ID` ← likely already exists
- `FORM_API_KEY` ← new name, needs to be set
- `EMAIL_CLIENT_SECRET` ← new name, needs to be set
- `ADMIN_PASSWORD` ← may already exist

- [ ] **Step 2: Set the new secrets**

```bash
# FORM_API_KEY — same value as current API_KEY
gh secret set FORM_API_KEY

# EMAIL_CLIENT_SECRET — same value as current EMAIL_AZURE_CLIENT_SECRET
gh secret set EMAIL_CLIENT_SECRET

# ADMIN_PASSWORD — if not already set
gh secret set ADMIN_PASSWORD
```

When prompted, paste the values. These are the same values currently set in Cloudflare Pages.

Retrieve the current values from the existing Cloudflare Pages configuration or GitHub Secrets:
- `FORM_API_KEY`: same value as current `API_KEY` secret
- `EMAIL_CLIENT_SECRET`: same value as current `EMAIL_AZURE_CLIENT_SECRET` secret
- `ADMIN_PASSWORD`: same value as current `ADMIN_PASSWORD` secret

- [ ] **Step 3: Verify secrets are set**

Run: `gh secret list`
Expected: All 5 secrets listed (CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID, FORM_API_KEY, EMAIL_CLIENT_SECRET, ADMIN_PASSWORD).

- [ ] **Step 4: Keep old secrets temporarily**

Do NOT delete old secrets (`API_KEY`, `EMAIL_AZURE_CLIENT_SECRET`, etc.) yet. They'll be cleaned up after successful deployment.

---

### Task 15: Deploy and verify

- [ ] **Step 1: Push all changes and create PR**

```bash
git push origin master
```

Or, if working on a branch:
```bash
git push origin HEAD
gh pr create --title "feat: centralize secret & config management" --body "..."
```

- [ ] **Step 2: Monitor the deploy workflow**

Watch the GitHub Actions workflow run:
```bash
gh run watch
```

Expected: All steps pass including the post-deploy health check.

- [ ] **Step 3: Manual end-to-end verification**

After deployment completes:

1. Check health endpoint: `curl -s https://cloudevolvers.com/api/health | jq .`
   - All vars should show ✅
2. Test form submission on the live site (visit a training page and submit the inquiry form)
3. Check monitor endpoint: `curl -s -H "x-api-key: <FORM_API_KEY value>" https://cloudevolvers.com/api/monitor | jq .`
   - Should return `"status": "healthy"`

- [ ] **Step 4: Clean up old GitHub Secrets**

After successful verification:
```bash
gh secret delete API_KEY
gh secret delete AZURE_AD_CLIENT_ID
gh secret delete AZURE_AD_CLIENT_SECRET
gh secret delete AZURE_AD_TENANT_ID
gh secret delete EMAIL_AZURE_CLIENT_ID
gh secret delete EMAIL_AZURE_CLIENT_SECRET
gh secret delete EMAIL_SENDER
gh secret delete EMAIL_AZURE_TENANT_ID
```

Only delete secrets that exist. Some may not be set.

- [ ] **Step 5: Remove manual CF dashboard env vars**

Via Cloudflare dashboard or wrangler CLI, remove any manually-set environment variables from the Cloudflare Pages project settings. The deploy workflow now manages everything.
