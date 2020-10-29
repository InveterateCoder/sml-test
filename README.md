# sml-test
Test for Soft Media Lab

### project setup

#### 1. local
  1. you must have Node installed and MongoDB running on your platform
  1. install all project dependencies by running ```npm i```
  1. run the application by either buiding production `npm run build && node ./dist/server.js` or in development mode `npm start`
  1. (**optional**) populate database with the initial set by going to http://localhost:8000/populate

#### 2. docker
  1. you must have Docker and docker-compose installed on your platform
  1. run `docker-compose up -d`
  1. (**optional**) populate database with the initial set by going to http://localhost:8000/populate

___

### URLs

**Home**
  * http://localhost:8000/students

**Add Student**
  * http://localhost:8000/add

**Populate DB with initial dummy entities**
  * http://localhost:8000/populate

**API Documentations with Swagger**
  * http://localhost:8000/api-docs

___

### Description

> Webapp is buld with SSR (server side rendering) support. Stack used: react/redux, redux-thunk, express, mongoose. Logic for adding new students to the store and editing students is implemented manually in the store reducer which mimics the database's group and sort algorithms. Students are sorted by the grade and the names.
