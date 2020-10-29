# sml-test
Test for Soft Media Lab

### project setup

#### 1. local
  1. you must have Node installed and MongoDB running on your platform
  1. install all project dependencies by running ```npm i```
  1. (**optional**) populate database with initial set by running ```npx ts-node ./server/models/populateDB.ts```
  1. run the application by either buiding production ```npm run build && node ./dist/server.js``` or in development mode ```npm start```
___
#### 2. docker
  1. you must have Docker and docker-compose installed on your platform
  1. run 'docker-compose -d up'
