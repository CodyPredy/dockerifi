# CLIENT DOCKERFILE
FROM node:11.9-alpine

RUN mkdir -p /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install --silent

COPY . /app

# PORT CONFIGURATION
EXPOSE 3000
EXPOSE 35279

CMD ["npm", "start"]
