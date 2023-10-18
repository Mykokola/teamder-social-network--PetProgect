# Вибір базового образу, наприклад, Python
FROM node:18.14.2

# Встановлення робочого каталогу в контейнері
WORKDIR /usr/src/backend

# Копіювання файлу залежностей, наприклад, requirements.txt
COPY ./package*.json ./

# Встановлення Python залежностей
RUN npm install
# Видалення попередньої версії bcrypt
RUN npm uninstall bcrypt

# Встановлення нової версії bcrypt
RUN npm install bcrypt
# uninstall the current bcrypt modules
# install the bcrypt modules for the machine
# Копіювання всіх файлів вашого backend додатку до контейнера
COPY . .



# Команда для запуску вашого backend додатку
CMD [ "npm", "start" ]