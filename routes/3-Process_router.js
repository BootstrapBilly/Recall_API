//controllers
const Process = require("../controllers/3Process")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.post("/processes", Process.create_process)
router.patch("/processes", Process.update_process)
router.delete("/processes", Process.delete_process)
router.get("/processes", Process.get_processes)


module.exports = router;