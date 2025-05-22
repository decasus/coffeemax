# Этап 1: Базовый образ
FROM node:18-alpine AS base

# Установка необходимых пакетов
RUN apk add --no-cache libc6-compat bash

WORKDIR /app

# Этап 2: Установка зависимостей
FROM base AS deps
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile && yarn cache clean

COPY tsconfig.json ./

# Этап 3: Сборка приложения
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . ./

ENV NODE_ENV production
ENV NEXT_SHARP_PATH=/node_modules/sharp

RUN yarn run build

# Проверка наличия server.js
RUN ls -la .next/standalone

# Этап 4: Запуск приложения
FROM base AS runner
RUN apk add --no-cache tini

WORKDIR /app

RUN addgroup -S -g 1001 nodejs
RUN adduser -S -u 1001 -G nodejs nextjs

# Копируем автономное приложение
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Создаем директорию для кэша и назначаем права
RUN mkdir -p /app/.next/cache && chown -R nextjs:nodejs /app/.next

# Проверка наличия server.js
RUN ls -la /app

# Переключаемся на пользователя nextjs
USER nextjs

# Запуск приложения
CMD ["/sbin/tini", "--", "node", "server.js"]
