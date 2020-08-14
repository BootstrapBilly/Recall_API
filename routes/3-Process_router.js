//controllers
const Process = require("../controllers/3Process")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.post("/processes", Process.create_process)
router.post("/update_process", Process.update_process)
router.post("/delete_process", Process.delete_process)
router.post("/get_processes", Process.get_processes)
router.post("/get_single_collection", Process.get_single_collection)
router.post("/reorder_collection_notes", Process.reorder_collection_notes)
router.post("/add_to_collection", Process.add_to_collection)

router.post("/check_process_title", Process.check_title)

module.exports = router;