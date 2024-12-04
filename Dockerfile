# Usa una imagen oficial de Node.js 22 como imagen base
FROM node:20.5.0-alpine3.18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json para instalar dependencias
COPY package*.json ./

# Configura el tiempo de espera de npm y actualiza npm
RUN npm config set fetch-retry-mintimeout 20000 \
    && npm config set fetch-retry-maxtimeout 120000 \
    && npm install -g npm@latest

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Compila el proyecto NestJS
RUN npm run build

# Verifica que el archivo main.js se haya generado en el directorio dist
RUN npm install -g serve

# Expone el puerto que usa la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["serve", "-s", "build", "-l", "3000"]