FROM node:8-alpine

RUN mkdir -p /app
WORKDIR /app

COPY . /app

CMD ["node", "index.js"]