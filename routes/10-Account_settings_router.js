//controllers
const Account_Settings = require("../controllers/9AccountSettings")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.post("/change_username", Account_Settings.Change_username)
router.post("/change_password", Account_Settings.Change_password)

module.exports = router;