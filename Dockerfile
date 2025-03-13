FROM node:18

WORKDIR /app

COPY . .

RUN npm install

RUN npm run db:deploy

RUN npm run build

RUN npm run postbuild

ADD https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 /cloud_sql_proxy
RUN chmod +x /cloud_sql_proxy

RUN chmod +x start.sh

CMD ["./start.sh"]
