#!/usr/bin/env bash
docker build -t myapp:dev .
set -Eeuo pipefail

USER_NAME="${USER:-$(id -un)}"
HOST_HOME="${HOME:-/home/${USER_NAME}}"
CONT_HOME="/home/${USER_NAME}"

docker run --rm -p 3000:3000 \
  -e HOME="${CONT_HOME}" \
  -w "/app" \
  -v "${HOST_HOME}/.config/nvim:${CONT_HOME}/.config/nvim" \
  -v "${HOST_HOME}/.tmux.conf:${CONT_HOME}/.tmux.conf:ro" \
  -it myapp:dev

