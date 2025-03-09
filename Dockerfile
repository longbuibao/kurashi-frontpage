FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

COPY .next ./.next

COPY . .

RUN npm run postbuild && ls -la && npm install

CMD [ "npm", "run", "start"]
