FROM node:23.8-alpine

WORKDIR /home/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 8080

CMD ["npm","start"]