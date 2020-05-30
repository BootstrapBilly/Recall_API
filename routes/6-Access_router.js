//controllers
const Access = require("../controllers/6Access")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

router.post("/access", Access.give_access)
router.delete("/access", Access.revoke_access)

module.exports = router;
