//controllers
const Get_all = require("../controllers/7GetAll")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.post("/get_all", Get_all.get_all)


module.exports = router;