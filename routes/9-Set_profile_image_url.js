//controllers
const Set_url = require("../controllers/8SetProfileImageURL")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.post("/set_image_url", Set_url.Set_url)


module.exports = router;