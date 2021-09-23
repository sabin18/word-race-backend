# word-race-backend

#### Word Race is a game designed to improve QWERTY typing rate and efficiency. 
Words appear one by one at a rate that goes up as time progresses. There’s a limited “stack 
space” that fills up after a certain amount of words have appeared. Once a player types 
a word correctly, that word is removed from the stack.

- HOSTED API link:'https://wordrace-backend.herokuapp.com/api/v1'

## PROJECT DESCRIPTION


To get the project up and running on your local machine, please follow these instructions.

- Clon this project on your machine , by running this command on in your command line or Terminal:
 ```
 git clone https://github.com/sabin18/word-race-backend.git
 
 ````
 - Install the required dependencies found in package.json by running this command:
 ```
 npm install
 ```
 
 - And then to start running  this project on your machine , run this command:
 ```
 npm start
 ```
 - then to run test, run this command:
 ````
 npm test
 `````
 ## Required Features
 
 - save results
 - view results

## Optional Features

  - User can reset password.
  - flag/report a posted AD as fraudulent. 
  - User can add multiple pictures to a posted ad. 
  - The application should display a Google Map with Marker showing the red-flag or intervention location. 
  
## THE END POINTS OF THE PROJECT
 
| HTTP MEHOD | ENDPOINTS                       | ACCESS                       | DESCRIPTION                           |
|------------|---------------------------------|------------------------------|---------------------------------------|
| POST       | /api/v1/results/                | private(user)                | save results                          |
| GET        | /api/v1/results/                | public                       | get all results                       |

  
## Frontend

 - HTML
 - CSS -Javascript

## Backend

 - NodeJs
 - Express JS
 - Mocha
 - Chai
 ## OTHER TOOLS USED IN THIS PROJECT

- Linter
 #### ESLint - Linter Tool

## Style Guide
```
 Airbnb is used in this project : Airbnb maintains a very popular JavaScript Style Guide
````
- Compiler
```
  Babel - Compiler for Next Generation JavaScript(ES6).
```
```
-Pivotal Tracker  Link:https://www.pivotaltracker.com/n/projects/2356989
```
Project is currently being managed with Pivotal Tracker, a project management tool. You can find the stories on the PropertyPro-lite Pivotal Tracker Board
```
- Author:
 ### izere Roger Sabin 
