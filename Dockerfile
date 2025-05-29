# Imagen base oficial de Node.js
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json 
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del codigo fuente
COPY . .

# Exponer el puerto en el que corre la app
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "src/app.js"]
