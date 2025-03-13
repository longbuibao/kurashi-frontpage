FROM node:18

WORKDIR /app

COPY . .

RUN npm install

RUN wget https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.8.1/cloud-sql-proxy.linux.amd64 -O /cloud_sql_proxy
RUN chmod +x /cloud_sql_proxy

RUN /cloud_sql_proxy -u /cloudsql -instances=kurashi-frontpage-419616:us-central1:kurashi-production-db & npm run db:deploy && npm run build

RUN npm run postbuild

RUN chmod +x start.sh

CMD ["./start.sh"]
