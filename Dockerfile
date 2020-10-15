FROM node:14.13.1-alpine

WORKDIR /app

COPY . .

RUN rm -rf ./node_modules
RUN rm -rf ./package-lock.json

RUN apk --no-cache add curl
RUN npm install


CMD npm run dev