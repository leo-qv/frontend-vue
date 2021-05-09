FROM node:14

WORKDIR /usr/frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
RUN npm run serve
