FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN wget https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.15.1/cloud-sql-proxy.linux.amd64 -O /usr/local/bin/cloud_sql_proxy && \
	chmod +x /usr/local/bin/cloud_sql_proxy

RUN npm run test

RUN cloud_sql_proxy kurashi-frontpage-419616:us-central1:kurashi-production-db & npm run db:deploy

RUN npm run build

RUN npm run postbuild

ENTRYPOINT ["sh", "-c", "cloud_sql_proxy kurashi-frontpage-419616:us-central1:kurashi-production-db && npm run start"]
