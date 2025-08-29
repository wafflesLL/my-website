#!/usr/bin/env bash

set -euo pipefail

ENV_FILE="./.env.local"

set -a
. "$ENV_FILE"
set +a

: "${GITHUB_NAME:?Missing GIT_USER_NAME in $ENV_FILE}"
: "${GITHUB_EMAIL:?Missing GIT_USER_EMAIL in $ENV_FILE}"
: "${GITHUB_PAT:?Missing GIT_PAT in $ENV_FILE}"

git config --local user.email "$GITHUB_EMAIL"
git config --local user.name "$GITHUB_NAME"

git config --local credential.helper store

printf 'protocol=https\nhost=github.com\nusername=%s\npassword=%s\n\n' "$GITHUB_NAME" "$GITHUB_PAT" | git credential approve
