# copia los archivos necesarios, instala las dependencias y ejecuta la aplicación.
FROM node:18.17.1
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
