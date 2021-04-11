# AirTrafficController-Mend-Interview

# Spring boot Backend application

The project is based on a small web service which uses the following technologies:

* Java
* Spring MVC with Spring Boot
* SQL Database
* Maven

 * The architecture of the web service is built with the following components:
   * DataTransferObjects: Objects which are used for outside communication via the API
   * Controller: Implements the processing logic of the web service, parsing of parameters and validation of in- and outputs.
   * Service: Implements the business logic and handles the access to the DataAccessObjects.
   * DataAccessObjects: Interface for the database. Inserts, updates, deletes and reads objects from the database.
   * DomainObjects: Functional Objects which might be persisted in the database.

# How to start the app
You should be able to start the example application by executing com.myapp.MyappServer, which starts a webserver on port 9090 (http://localhost:9090) and serves Postman where can inspect and try existing endpoints.

# React Front End application
## Available Scripts

In the project directory, you can run:
### `npm install`
Installs all the dependencies required to start our application 

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

![image](https://user-images.githubusercontent.com/33089746/114322054-2fcf3480-9aec-11eb-8793-399993edc7be.png)


