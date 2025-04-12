FROM node:18
WORKDIR file-storage-app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 10000
CMD ["npm", "run", "dev"]