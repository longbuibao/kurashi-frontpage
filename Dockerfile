
# base image
FROM node:18

WORKDIR /usr/app

COPY *.json ./

RUN npm ci --only=production

RUN curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.10.1/cloud-sql-proxy.linux.amd64
RUN chmod +x cloud-sql-proxy
RUN ./cloud-sql-proxy --unix-socket /cloudsql kurashi-frontpage-419616:us-central1:kurashi-dev-db & sleep 2

RUN npm i
RUN npm run db:deploy
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
