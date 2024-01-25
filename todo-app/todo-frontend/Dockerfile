FROM node:16 AS TEST

WORKDIR /urs/src/app

COPY . .

RUN npm ci

CMD CI=true npm test



FROM node:16 AS PROD

WORKDIR /urs/src/app

COPY . .

RUN npm ci

ENV REACT_APP_BACKEND_URL=http://localhost:3000

CMD npm start