# AirTrafficController-Mend-Interview

# MySQL:
This application makes use of MySQL database to store aircrafts. data. <br>

Install MySQL Server and configure it with a username and password. <br>
Create a database("aircraft_db) in the server to store aircrafts.<br>
Configure MySQL Server's port number, username ,password and database name in the application.properties file of our backend Spring Boot application. 

# Spring Boot Backend application

The project is based on the following technologies:

* Java
* Spring Boot
* MySQL Database
* Maven

 * The architecture is built with the following components:
   * DataTransferObjects: Objects which are used for outside communication via the API
   * Controller: Exposes a set of apis for performing aircraft related operations.
   * Service: Implements the business logic and handles the access to the DataAccessObjects.
   * Repository: Contains the logic for performing CRUD operations in the database.
  
# How to start the app
Start the application as a Java application/Spring Boot Application. This application is configured to start on the port 9090 and we can access it using the URL (http://localhost:9090). We can use Postman tool for calling the webservices.

# React Front End application:(UI)
Go to the project directory and run:
### `npm install`
This installs all the dependencies required to start our application 

### `npm start`

Runs the app in the development mode.<br>
Access the url(http://localhost:3000) to view it in the browser.<br>

![image](https://user-images.githubusercontent.com/33089746/114338283-c3baf380-9b20-11eb-9604-b36ba9c55cc4.png)


Enqueue operation: To enqueue an aircraft, click on Enqueue button and add the required details(Type and Size), click on save. This adds the aircraft to the queue.<br>
Dequeue operation: To dequeue an aircraft, click on Dequeue button. This requires an aircraft based on its Type and Size.<br>

