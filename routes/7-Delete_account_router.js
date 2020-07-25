//Controllers
const Authentication = require("../controllers/0Authentication")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes

router.post("/delete_user", Authentication.delete_user)

module.exports = router;