FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

COPY /workspace/.next .next

COPY . .

RUN npm install

RUN npm run postbuild

CMD [ "npm", "run", "start"]
