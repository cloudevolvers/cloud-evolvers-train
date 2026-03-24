#!/bin/bash
set -euo pipefail

# Production deployments are handled exclusively by GitHub Actions.
# See: .github/workflows/deploy-cloudflare-pages.yml
#
# To deploy to production:
#   1. Merge your PR to master
#   2. The deploy-cloudflare-pages workflow runs automatically
#   3. Monitor: gh run watch
#
# To trigger manually:
#   gh workflow run deploy-cloudflare-pages.yml --ref master

echo "❌ Direct production deploys are not allowed."
echo ""
echo "Production deploys go through GitHub Actions only."
echo "Merge to master or trigger manually:"
echo "  gh workflow run deploy-cloudflare-pages.yml --ref master"
exit 1
