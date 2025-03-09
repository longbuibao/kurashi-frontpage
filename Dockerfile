FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY /workspace/.next .next

COPY public public

COPY next.config.js next.config.js

COPY . .

RUN npm run postbuild

CMD [ "npm", "run", "start"]
