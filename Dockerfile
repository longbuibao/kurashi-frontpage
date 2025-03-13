FROM node:18

WORKDIR /app

COPY . .

RUN npm install

ADD https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 /cloud_sql_proxy
RUN chmod +x /cloud_sql_proxy

RUN /cloud_sql_proxy -dir=/cloudsql -instances=kurashi-frontpage-419616:us-central1:kurashi-production-db & npm run db:deploy && npm run build

RUN npm run postbuild

RUN chmod +x start.sh

CMD ["./start.sh"]
