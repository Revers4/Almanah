FROM node:18-slim
# Используем slim вместо alpine — он совместим с бинарником esbuild без пересборки

WORKDIR /app
# Указывает рабочую директорию внутри контейнера

COPY package.json package-lock.json* ./
# Копируем package.json и, если есть, package-lock.json

RUN npm install
# Устанавливаем зависимости

COPY . .
# Копируем все файлы проекта

ENV PORT=3000
# Задаём переменную окружения

EXPOSE $PORT
# Открываем порт

VOLUME ["/app/data"]
# Указываем точку монтирования тома

CMD ["npm", "run", "dev"]
# Указываем команду запуска
