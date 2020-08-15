//controllers
const WakeController = require("../controllers/10WakeUpServer")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.get("/wakeup", WakeController.Wake_up)

module.exports = router;