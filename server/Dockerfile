FROM node:11.9-alpine

WORKDIR /app

COPY package.json /app/package.json

RUN npm install --silent

COPY . /app

EXPOSE 3001
EXPOSE 9229

CMD ["npm", "start"]
