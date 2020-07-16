//controllers
const Process = require("../controllers/3Process")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.post("/processes", Process.create_process)
router.post("/update_process", Process.update_process)
router.delete("/processes", Process.delete_process)
router.post("/get_processes", Process.get_processes)

router.post("/check_process_title", Process.check_title)

module.exports = router;