FROM node:18

WORKDIR /app

COPY . .

RUN npm run postbuild

ENTRYPOINT ["npm run start"]
