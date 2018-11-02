# WARNING: 
This is still a WIP and many elements are not functioning quite right just yet.

# Nanos Application

This project consists of a Mongo database, an API written using ExpressJS, and a ReactJS app. The project can be deployed using Docker. Instructions are below.

`./backend/seeddb.js` is used to populate the database with the data from the `./backend/data.json` file when first building the application.

## Data Structure
<img src="nanosCampaignERD.png" />

## Docker Containers
Running `docker-compose` will spin up 4 containers for the app
1. A container running Mongo
2. A container that runs a script to seed the Mongo db with data and immediately shuts down on completion
3. A container that runs the API using ExpressJS
4. A container for the app which uses ReactJS

### To run in development mode
In this mode the containers for the API and React app are mounted to the local drive so any changes are immediately copied to the container and used.

`docker-compose -f docker-compose-dev.yml up --build`

### To run in production mode
`docker-compose up --build` 

