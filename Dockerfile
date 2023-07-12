# Definindo o ambiente com o Node.js
FROM node:14

# Diretório de trabalho
WORKDIR /usr/src/app

# Copiando package.json e package-lock.json
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o código fonte do app para o container
COPY . .

# Porta em que o app está rodando
EXPOSE 8080

# Comando para iniciar o app
CMD [ "node", "app.js" ]
