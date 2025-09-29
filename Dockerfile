FROM node:24.9-alpine

WORKDIR /home/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 8080

CMD ["npm","start"]