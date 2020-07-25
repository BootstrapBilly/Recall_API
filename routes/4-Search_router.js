//controllers
const Search = require("../controllers/4Search")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.post("/search", Search.find_content)
router.post("/search_user", Search.find_user)

module.exports = router;