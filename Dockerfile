
# base image
FROM 18-alpine3.21

WORKDIR /usr/app

COPY . .
RUN chmod +x ./start.sh

RUN npm ci --only=production

RUN npm i
RUN npm run build

EXPOSE 3000

CMD ["./start.sh"]
