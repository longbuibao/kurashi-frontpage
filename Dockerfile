FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

COPY .next ./.next

COPY . .

RUN ls -la

RUN npm install

RUN npm run postbuild

CMD [ "npm", "run", "start"]
