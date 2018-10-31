FROM node:8-alpine

RUN mkdir -p /app
WORKDIR /app

COPY . /app

ENTRYPOINT ["node", "index.js"]
CMD []