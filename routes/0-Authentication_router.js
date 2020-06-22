//Controllers
const Authentication = require("../controllers/0Authentication")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.post("/user", Authentication.create_user)
router.post("/login", Authentication.login)
router.post("/check_email", Authentication.check_email)
router.post("/check_username", Authentication.check_username)


module.exports = router;