//controllers
const Search = require("../controllers/4Search")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.post("/search", Search.find_content)

module.exports = router;