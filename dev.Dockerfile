FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./
#COPY prisma ./prisma

RUN yarn --frozen-lockfile

COPY next.config.ts .
COPY tsconfig.json .

CMD yarn dev --turbo
