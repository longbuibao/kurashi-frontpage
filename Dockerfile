FROM node:18

WORKDIR /app

RUN echo ----------------------------------------------------------------------------------
RUN npm -v

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run postbuild

CMD [ "npm", "run", "start"]
