#!/bin/bash

/cloud_sql_proxy -u /cloudsql kurashi-frontpage-419616:us-central1:kurashi-production-db & npm run start
