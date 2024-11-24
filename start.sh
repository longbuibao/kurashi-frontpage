#!/bin/sh

set -e

npm run db:deploy && npm run start
ls
ls