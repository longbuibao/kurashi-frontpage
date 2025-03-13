#!/bin/bash

./cloud_sql_proxy --port 5432 kurashi-frontpage-419616:us-central1:kurashi-production-db & sleep 10 && npm run start
