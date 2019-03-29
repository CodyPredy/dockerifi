# CLIENT DOCKERFILE
FROM node:11.9-alpine

WORKDIR /app
COPY package.json /app

RUN npm install

COPY . /app

# PORT CONFIGURATION
EXPOSE 3001

CMD ["npm", "start"]
