FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 -O /usr/local/bin/cloud_sql_proxy && \
	chmod +x /usr/local/bin/cloud_sql_proxy

RUN npm run test

RUN sh -c cloud_sql_proxy -instances=kurashi-frontpage-419616:us-central1:kurashi-production-db & npm run db:deploy

RUN npm run build

RUN npm run postbuild

ENTRYPOINT ["sh", "-c", "cloud_sql_proxy -instances=kurashi-frontpage-419616:us-central1:kurashi-production-db && npm run start"]
