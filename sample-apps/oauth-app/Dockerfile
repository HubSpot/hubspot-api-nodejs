FROM node:10

WORKDIR /oauth-app

COPY ./index.js ./
COPY ./package.json ./
COPY ./public ./public
COPY ./views ./views
RUN npm install


ENTRYPOINT [ "node", "index.js" ]
EXPOSE 3000
