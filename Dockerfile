FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

RUN npm run postbuild

ENTRYPOINT ["sh", "-c", "cloud_sql_proxy kurashi-frontpage-419616:us-central1:kurashi-production-db && npm run start"]
