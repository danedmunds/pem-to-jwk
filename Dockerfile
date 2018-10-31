FROM node:8-alpine

RUN mkdir -p /app
WORKDIR /app

COPY index.js /app
COPY package.json /app
COPY LICENSE /app
COPY README.md /app

RUN npm install

ENTRYPOINT ["node", "index.js"]
CMD []