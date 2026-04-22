#!/bin/bash
# FNC Tool deploy naar Cloudflare Pages
# Vereist: npm (Node 18+) en een Cloudflare account

set -e

PROJECT="fnc-tool"

cd "$(dirname "$0")"

echo "==> FNC Tool deploy naar Cloudflare Pages..."
echo "    project: $PROJECT"
echo "    files: $(ls *.html *.js *.css manifest.json | wc -l | tr -d ' ')"
echo

# Wrangler draait interactief bij eerste keer (login), daarna geautomatiseerd
npx --yes wrangler@latest pages deploy . \
  --project-name "$PROJECT" \
  --commit-message "Deploy $(date +%Y-%m-%d-%H:%M)"

echo
echo "==> Klaar. Check op https://dash.cloudflare.com/ onder Pages → $PROJECT"
