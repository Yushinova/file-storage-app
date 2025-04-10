# Используем официальный образ Node.js в качестве базового
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Собираем приложение
RUN npm run build

# Указываем, что приложение будет работать на порту 3000
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]