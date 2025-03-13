FROM node:18

WORKDIR /app

COPY . .

RUN npm install

RUN npm run db:deploy

RUN npm run build

RUN npm run postbuild

RUN chmod +x start.sh

CMD ["./start.sh"]
