FROM node:18

WORKDIR /app

RUN pwd

RUN ls /workspace

COPY /workspace ./

COPY . .

RUN npm install

RUN npm run postbuild

CMD [ "npm", "run", "start"]
