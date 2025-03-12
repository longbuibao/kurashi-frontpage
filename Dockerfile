FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

COPY .next ./.next

COPY . .

RUN npm run postbuild && ls -la && npm install

RUN chmod +x start.sh

CMD ["./start.sh"]
