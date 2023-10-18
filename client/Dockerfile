# Вибір базового образу, наприклад, Node.js
FROM node:18.14.2

# Встановлення робочого каталогу в контейнері
WORKDIR  /usr/src/client

# Копіювання package.json та package-lock.json для установки залежностей
COPY ./package*.json ./

# Виконання команди npm install для встановлення залежностей
RUN npm install

# Копіювання всіх файлів вашого frontend додатку до контейнера
COPY . .

# Виконання команди для збірки вашого frontend додатку (наприклад, npm run build)
RUN npm run build

# Команда, яка запускає ваш додаток під час створення контейнера
CMD [ "npm", "start" ]
