FROM node:alpine AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app

RUN yarn global add turbo

COPY . .

RUN yarn install && yarn build
