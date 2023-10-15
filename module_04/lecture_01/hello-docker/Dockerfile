FROM node:lts-alpine

RUN mkdir -p /usr/src/node-app 

WORKDIR /usr/src/node-app

COPY ./ ./

RUN npm install

EXPOSE 5000

