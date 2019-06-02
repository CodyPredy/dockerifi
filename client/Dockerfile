# Oficial node containers - https://hub.docker.com/_/node
# Client docker
FROM node:11.9-alpine

WORKDIR /app

COPY package.json /app/package.json

RUN npm install --silent

COPY . /app

EXPOSE 3000
EXPOSE 35729

CMD ["npm", "start"]
