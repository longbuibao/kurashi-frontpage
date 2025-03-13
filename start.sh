#!/bin/bash

/cloud_sql_proxy -dir=/cloudsql -instances=kurashi-frontpage-419616:us-central1:kurashi-production-db &

sleep 5

exec npm start
