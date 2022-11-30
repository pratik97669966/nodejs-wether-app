[![Build Status](https://travis-ci.org/ElRakabawi/node-fetch-app.svg?branch=master)](https://travis-ci.org/ElRakabawi/node-fetch-app)
# Node fetch app documentation
A NodeJS built application with express, express handelbars, node-fetch, bootstrap carousel for fetching a fake REST API into a JSON Object, then displaying it in a responsive carousel. **Live deployed demo [here](https://node-fetch-app.herokuapp.com/).**

Reponsitivity test result: [Here](https://www.responsinator.com/?url=https%3A%2F%2Fnode-fetch-app.herokuapp.com).

**- This guide is dissected into two sections:**
* How to install/run the app
* File structure 


### How to install/run the app?
##### Installing nodejs and npm
1) The app is built on Node.jS, so to be able to run it you must have Node.JS and NPM. If you already have it on your system proceed to step(3).
2) Visit [Node.JS](https://nodejs.org/en/download/), then download your OS installer and run it.
3) Now you should have both NodeJS and NPM installed on your system.
  ```bash
  elrakabawi$ node --version && npm --version
  ```
##### Installing and running our app
4) clone the project: ```git clone https://github.com/ElRakabawi/node-fetch-app.git```
    Then, access the directory with ```cd node-fetch-app```
5) Run ```npm install``` in your command, then run ```npm start```. This will run this commands: 

  ```bash
  elrakabawi$ npm start
  > node-fetch-app@1.0.0 start Desktop/node-fetch-app
  > node index.js

  listening at localhost:3000
  ```
**Now, it's all up and running. Open your browser and visit [localhost:3000](http://localhost:3000).** You should expect something like the online delpoyed heroku app here [https://node-fetch-app.herokuapp.com/](https://node-fetch-app.herokuapp.com/).




### File and folder structure

```
node-fetch-app
│
│─── README.md
│─── package.json
│─── index.js      
│               
└───public
│   └─── stylesheet
|   |     |
|   |     └─── style.css
│   │   
|   └─── js
|        |
|        └─── core-interface.js 
│   
|───views
|    │───home.handelbars
|    │
|    └─── layouts                 
|           └───main.handelbars  
|
└─── node_modules   
```

**index.js**:  Where fetching happens using node-fetch, JSON strigified then parsed and server is created with express.
<br />**core-interface.js**: Enhancer for behaviour and look of the bootstrap carousel.
<br />**home.handlebars**: Contains home view, handled by express-handelbars to generate HTML sections from parsed JSON object.
<br />**main.handlebars**: Contains main HTML Layout.


Waving goes to Motoon.org, I enjoyed the task.
