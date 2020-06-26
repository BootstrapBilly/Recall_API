//controllers
const Note = require("../controllers/2Note")

//External
const express = require("express");//import express 

//Config
const router = express.Router();//initialise the router

//routes
router.post("/notes", Note.create_note)
router.patch("/notes", Note.update_note)
router.delete("/notes", Note.delete_note)
router.post("/get_notes", Note.get_notes)

router.post("check_note_title", Note.check_title)

module.exports = router;