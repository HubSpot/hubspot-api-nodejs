FROM node:10

WORKDIR /contacts-app

COPY ./index.js ./
COPY ./package.json ./
COPY ./public ./public
COPY ./views ./views
RUN npm install


ENTRYPOINT [ "node", "index.js" ]
EXPOSE 3000
