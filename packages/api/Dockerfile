FROM node:12.7-alpine

RUN apk --no-cache add postgresql-dev python-dev gcc build-base

WORKDIR /app

COPY package.json .

RUN yarn --frozen-lockfile

COPY . .

ENTRYPOINT ["yarn", "start"]