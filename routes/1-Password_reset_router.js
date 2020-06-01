//controllers
const PasswordReset = require("../controllers/1PasswordReset")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.post("/password_reset", PasswordReset.generate_email)
router.post("/change_password", PasswordReset.change_password)

module.exports = router;