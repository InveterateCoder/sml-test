FROM node:12-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install --loglevel verbose
RUN npm run build
EXPOSE 8000
CMD [ "node", "./dist/server.js" ]