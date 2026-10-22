#!/usr/bin/env bash
# Build the site and upload it to the VPS.
# Usage: DEPLOY_TARGET=boydroid@37.97.173.191:/home/boydroid/docker/boydroid/html ./deploy/deploy.sh
set -euo pipefail
cd "$(dirname "$0")/.."

: "${DEPLOY_TARGET:?Set DEPLOY_TARGET, e.g. boydroid@37.97.173.191:/home/boydroid/docker/boydroid/html}"

npm ci
npm run build
# --delete removes files from old builds; the trailing slash uploads the contents of dist/.
rsync -az --delete --exclude _redirects dist/ "$DEPLOY_TARGET/"
echo "Deployed to $DEPLOY_TARGET"
