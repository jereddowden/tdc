# Turner Developer Challenge
 
This is an application that allows users to:
 
* Search for a Title by its name.
* Display the titles that match the above criteria.
* Allow the user to pull up detailed information about a selected title from the list.

## Technology Stack
* NodeJS
* Express
* MongoDB
* ReactJS
* TypeScript
* [Material UI](https://github.com/mui-org/material-ui)

## Getting Started

### Starting the Server
In the application's root directly, start the Express server by opening a terminal and run:

#### `npm start` or `yarn start`


### Starting the Client
In a separate terminal from the app directory, `cd client` and start the client react app:

#### `npm start` or `yarn start`

Open [http://localhost:3000/](http://localhost:3000/) to see the running client app.

## Linting
Linting can be done in both the root and client directories. The server app is not written in TypeScript and therefore uses eslint. The client app is written in TypeScript and requires tslint. In the future we would only require tslint if both server and app are written in TypeScript.
#### `npm run lint` or `yarn lint`
