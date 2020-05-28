//routes
const router = require("./routes/router");

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

server.use(router);//route any incoming requests in the right direction

//* Database connection

mongoose
  .connect(MONGODBURI)//connect to the database
  .then(result => {
    server.listen(4000);//then start the server
    console.log("\n\x1b[36mServer running on port 4000\n")//and log it to the console
  })
  .catch(err => {//if theres an error
    console.log(err);//log it
  });



