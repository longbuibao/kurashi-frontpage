#!/bin/bash

# Start Cloud SQL Proxy in background
echo "Starting Cloud SQL Proxy..."
/cloud_sql_proxy --credentials-file ./cloudsql-access.json -u /temp/cloudsql kurashi-frontpage-419616:us-central1:kurashi-production-db &
PROXY_PID=$!

# Wait for the proxy to establish connection (check if socket exists)
echo "Waiting for Cloud SQL Proxy to be ready..."
SOCKET_PATH="/temp/cloudsql/kurashi-frontpage-419616:us-central1:kurashi-production-db"
MAX_WAIT=30
WAITED=0

while [ $WAITED -lt $MAX_WAIT ]; do
  if [ -S "$SOCKET_PATH" ]; then
    echo "Cloud SQL Proxy is ready! Socket found at $SOCKET_PATH"
    break
  fi
  sleep 1
  WAITED=$((WAITED + 1))
done

if [ ! -S "$SOCKET_PATH" ]; then
  echo "Warning: Cloud SQL Proxy socket not found after $MAX_WAIT seconds"
  echo "Continuing anyway - connection might be established via TCP..."
fi

# Start the Next.js app
echo "Starting Next.js application..."
npm run start

# Cleanup: kill proxy when app exits
trap "echo 'Shutting down Cloud SQL Proxy...'; kill $PROXY_PID 2>/dev/null; exit" EXIT INT TERM
