//controllers
const Handle_image = require("../controllers/8HandleProfileImage")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.post("/set_image_url", Handle_image.Set_url)
router.post("/fetch_image_url", Handle_image.Get_url )


module.exports = router;