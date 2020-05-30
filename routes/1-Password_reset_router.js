//controllers
const PasswordReset = require("../controllers/1PasswordReset")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.get("/password_reset", PasswordReset.generate_email)
router.post("/password_reset", PasswordReset.change_password)

module.exports = router;