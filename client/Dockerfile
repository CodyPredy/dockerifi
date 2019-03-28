# CLIENT DOCKERFILE
FROM node:11.9-alpine

WORKDIR /app
COPY package.json /app

RUN npm install

COPY . /app

# PORT CONFIGURATION
EXPOSE 3000
EXPOSE 35279

CMD ["npm", "start"]
