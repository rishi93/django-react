# syntax=docker/dockerfile:1
FROM node
WORKDIR /myfrontend
COPY package.json package-lock.json /myfrontend/
RUN npm install
COPY . /myfrontend/
RUN npm run build
EXPOSE 80
