FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run postbuild

RUN chmod +x start.sh

CMD ["./start.sh"]
