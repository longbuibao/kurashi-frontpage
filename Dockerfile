
# base image
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY . .

# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
RUN npm ci --only=production

EXPOSE 3000

RUN ls /cloudsql
RUN file /cloudsql/kurashi-frontpage-419616:us-central1:kurashi-dev-db

RUN apt-get update -y && apt-get install -y openssl

RUN npm i

RUN echo $DATABASE_URL
RUN npm run db:deploy
RUN npm run build

CMD ["npm", "start"]
