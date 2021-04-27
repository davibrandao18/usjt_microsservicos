#alpine: imagem Linux "pequena"
FROM node:14-alpine3.12

# um diretório no sistema de arquivos do contêiner para os


WORKDIR /app

#copia o arquivo package.json para poder executar npm

COPY package.json .

#instala as dependências
RUN npm install

#copia todo o conteúdo .local para a imagem
COPY . .

#executa quando o contêiner entrar em execução
CMD ["npm", "start"]