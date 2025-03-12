#!/bin/bash

ENV_FILE=".env"

# Check if .env file exists
if [ ! -f "$ENV_FILE" ]; then
  echo "$ENV_FILE file not found!"
  exit 1
fi

# Ensure DATABASE_URL is updated without duplication
if grep -q '^DATABASE_URL=' "$ENV_FILE"; then
  sed -i -E "s|^DATABASE_URL=.*|DATABASE_URL=postgresql://postgres:]AThfiXb5\`\"H~%Qj@localhost/kurashi-prod?host=/cloudsql/kurashi-frontpage-419616:us-central1:kurashi-production-db|" "$ENV_FILE"
else
  echo "DATABASE_URL=postgresql://postgres:]AThfiXb5\`\"H~%Qj@localhost/kurashi-prod?host=/cloudsql/kurashi-frontpage-419616:us-central1:kurashi-production-db" >> "$ENV_FILE"
fi

echo "DATABASE_URL updated successfully."

# Run npm start
npm run start
