FROM node:18

ARG YOUTUBE_API_KEY

WORKDIR /app

COPY . .

RUN ls -la
RUN npm run create-env
RUN cat .env

RUN npm install
RUN wget https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.8.1/cloud-sql-proxy.linux.amd64 -O /cloud_sql_proxy
RUN chmod +x /cloud_sql_proxy
RUN mkdir -p /temp/cloudsql
RUN /cloud_sql_proxy --credentials-file ./cloudsql-access.json -u /temp/cloudsql kurashi-frontpage-419616:us-central1:kurashi-production-db & sleep 10 && npm run db:deploy && npm run build
RUN npm run postbuild
RUN chmod +x start.sh
CMD ["./start.sh"]
