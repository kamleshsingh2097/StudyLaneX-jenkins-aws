#!/usr/bin/env bash
# Usage: sudo AWS_REGION=ap-south-1 bash deploy.sh <frontend-image> <backend-image>
set -euo pipefail

FRONT="$1"
BACK="$2"
: "${AWS_REGION:?AWS_REGION must be set}"
APP_DIR=/opt/studylanex
REGISTRY="${FRONT%%/*}"
mkdir -p "$APP_DIR"

echo ">> Logging in to ECR"
aws ecr get-login-password --region "$AWS_REGION" | docker login --username AWS --password-stdin "$REGISTRY"

echo ">> Loading secrets from SSM Parameter Store"
umask 077
aws ssm get-parameters-by-path --path /studylanex/ --with-decryption --region "$AWS_REGION" \
  --query 'Parameters[].[Name,Value]' --output text \
  | while IFS=$'\t' read -r name value; do echo "${name##*/}=${value}"; done > "$APP_DIR/backend.env"
echo "PORT=5000" >> "$APP_DIR/backend.env"
grep -q '^MONGO_URI=' "$APP_DIR/backend.env" || { echo "MONGO_URI missing in SSM"; exit 1; }

PREV_FRONT=$(cat "$APP_DIR/current_frontend" 2>/dev/null || true)
PREV_BACK=$(cat "$APP_DIR/current_backend" 2>/dev/null || true)

echo ">> Pulling images"
docker pull "$FRONT"
docker pull "$BACK"

start_stack() {
  docker rm -f sl-backend sl-frontend >/dev/null 2>&1 || true
  docker run -d --name sl-backend --restart unless-stopped --memory 256m \
    --env-file "$APP_DIR/backend.env" -p 5000:5000 "$2"
  docker run -d --name sl-frontend --restart unless-stopped --memory 64m \
    -p 80:80 "$1"
}

healthy() {
  for _ in $(seq 1 30); do
    if curl -fsS http://localhost:5000/ >/dev/null && curl -fsS http://localhost/ >/dev/null; then
      return 0
    fi
    sleep 3
  done
  return 1
}

echo ">> Starting new containers"
start_stack "$FRONT" "$BACK"

if healthy; then
  echo "$FRONT" > "$APP_DIR/current_frontend"
  echo "$BACK"  > "$APP_DIR/current_backend"
  docker image prune -af --filter "until=72h" >/dev/null || true
  echo ">> Deploy OK"
else
  echo "!! Health check failed"
  docker logs --tail 40 sl-backend || true
  if [ -n "$PREV_FRONT" ] && [ -n "$PREV_BACK" ]; then
    echo "!! Rolling back"
    start_stack "$PREV_FRONT" "$PREV_BACK" || true
  fi
  exit 1
fi