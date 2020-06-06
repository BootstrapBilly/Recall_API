//Controllers
const Authentication = require("../controllers/0Authentication")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.post("/user", Authentication.create_user)
router.delete("/user", Authentication.delete_user)
router.post("/login", Authentication.login)

module.exports = router;