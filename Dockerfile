FROM node:18-alpine AS builder

WORKDIR /app

# Копируем зависимости
COPY package.json package-lock.json ./

# Устанавливаем зависимости с legacy-peer-deps для совместимости
RUN npm ci --legacy-peer-deps

# Копируем исходники
COPY . .

# Собираем приложение
RUN npm run build

# Production образ
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000

# Создаем пользователя для безопасности
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем необходимые файлы
COPY --from=builder /app/public ./public

# Если используете output: 'standalone' в next.config.js
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Или если НЕ используете output: 'standalone'
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Меняем владельца файлов
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]