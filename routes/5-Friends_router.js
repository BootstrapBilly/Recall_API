//controllers
const Friends = require("../controllers/5Friends")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.post("/friend", Friends.add_friend)
router.delete("/friend", Friends.delete_friend)

module.exports = router;