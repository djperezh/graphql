# Basic graphQL Example

Basic Example about how to implement a graphql API using NodeJS (CRUD operations: Query, Mutation, Delete)
from Lynda course ["GraphQL Essential Training"](https://www.linkedin.com/learning/graphql-essential-training/learn-graphql-essentials?autoAdvance=true&autoSkip=false&autoplay=true&resume=true&u=95232193)

# SERVER

## Tech Stack
* Node
* Express
* graphQL
* MongoDB
* sqlite

## Requirements
- Node
- MongoDB
- sqlite

## How to run it
- Clone the repo
- Run the following commands from terminal
```
$ npm install
$ npm start
```
- Open your Web browser: [localhost:8080/graphql](localhost:8080/graphql) and try it:
```
query {
  getAliens {
    id
    firstName
    lastName
    planet
  } 
}
```

>NOTE: Make sure to start the Mongo server first
>Install MongoDB Community Edition on macOS
>https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

To run MongoDB (i.e. the mongod process) as a macOS service, run:
```
$ brew services start mongodb-community@5.0
```
To stop a mongod running as a macOS service, use the following command as needed:
```
$ brew services stop mongodb-community@5.0
```

# CLIENT

## Tech Stack
* JavaScript

## Requirements
- graphql-request

## How to run it
- Since the repo is already clone, you will see a `client` folder
- Go to that folder
```
$ cd client
```
- Install packages
```
$ npm install
```
- Run the code from terminal using the `index.js` file
```
$ node ./index.js
```

>NOTE: Make sure to start the Server (and Mongo server) first