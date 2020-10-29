FROM node:14-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install --loglevel verbose
RUN npm run build
EXPOSE 8000
CMD [ "node", "./dist/server.js" ]