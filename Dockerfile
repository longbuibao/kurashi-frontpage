FROM node:18

WORKDIR /app

COPY /workspace ./

COPY . .

RUN npm install

RUN npm run postbuild

CMD [ "npm", "run", "start"]
