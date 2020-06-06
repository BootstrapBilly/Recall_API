//routes
const authentication = require("./routes/0-Authentication_router")
const password_reset = require("./routes/1-Password_reset_router")
const note = require("./routes/2-Note_router")
const process = require("./routes/3-Process_router")
const search = require("./routes/4-Search_router")
const friends = require("./routes/5-Friends_router")
const access = require("./routes/6-Access_router")


//External
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose');

//-File configuration

const MONGODBURI = "mongodb://Billy:bjc123@billy-shard-00-00-qqthk.mongodb.net:27017,billy-shard-00-01-qqthk.mongodb.net:27017,billy-shard-00-02-qqthk.mongodb.net:27017/Recall?ssl=true&replicaSet=Billy-shard-0&authSource=admin&retryWrites=true&w=majority";//The mongodb connection string

const server = express();

server.use((req, res, next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");//Allow all requests to prevent cors errors
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");//types of methods to allow
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");//Types of headers (Json and JWTS)
  next();

})

//=Middleware
server.use(bodyParser.json());//parse any incoming json requests

server.use(authentication);//handle the authentication requests
server.use(password_reset);//handle the password_reset requests
server.use(note);//handle the note requests
server.use(process);//handle the process requests
server.use(search);//handle the search requests
server.use(friends);//handle the friends requests
server.use(access);//handle the share_access requests


//* Database connection

mongoose
  .connect(MONGODBURI, { useNewUrlParser: true })//connect to the database
  .then(result => {
    server.listen(4000);//then start the server
    console.log("\n\x1b[36mServer running on port 4000\n")//and log it to the console
  })
  .catch(err => {//if theres an error
    console.log(err);//log it
  });



