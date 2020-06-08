const Note = require("../models/Note")//import the note schema to interact with the database
const Process = require("../models//Process")//import the process schema to interact with the database
const User = require("../models//User")//import the user schema to interact with the database

exports.give_access = async (req, res, next) => {

    //if any required request fields are missing, or wrong, send a 400 and inform the user
    if (!req.body.user_id || !req.body.friend_id || !req.body.note_or_process_id || !type_is_valid(req.body.type)) return res.status(400).json({ message: "Bad request" })

    const user_id = req.body.user_id//extract the user id
    const friend_id = req.body.friend_id//extract the friend's user id
    const note_or_process_id = req.body.note_or_process_id//extract the note or process id
    const type = req.body.type//extract the type (note or process)

    try {

        //search for the user, and check if their friends list contains the given friend id
        const users_are_friends = await User.findOne({ _id: user_id, friends: { $elemMatch: { _id: friend_id } } })
        //if they are not friends, send a 424 and inform them
        if (!users_are_friends) return res.status(400).json({ message: "Bad request" })

        //?note
        if (type === "note") {

            const note = await Note.findOne({ _id: note_or_process_id, created_by: user_id })//check to see if the note exists in the database
            //check to see if the note already has access rights for the friend's id
            const rights_already_granted = await Note.findOne({ _id: note_or_process_id, created_by: user_id, access_rights: { $elemMatch: { _id: friend_id } } })

            if (!note || rights_already_granted) return res.status(400).json({ message: "Bad request" })//if any checks fail, send a 400 bad request

            //*checks passed

            note.access_rights.push(friend_id)//add the friend's id to the access rights
            const rights_granted = await note.save()//save the note

            if (rights_granted) return res.status(200).json({ message: "Rights granted" })//return a 200 and inform the user
        }

        //_process
        if (type === "process") {

            const process = await Process.findOne({ _id: note_or_process_id, created_by: user_id })//check to see if the process exists in the database
            //check to see if the process already has access rights for the friend's id
            const rights_already_granted = await Process.findOne({ _id: note_or_process_id, created_by: user_id, access_rights: { $elemMatch: { _id: friend_id } } })

            if (!process || rights_already_granted) return res.status(400).json({ message: "Bad request" })//if any checks fail, send a 400 bad request

            //*checks passed
            process.access_rights.push(friend_id)//add the friend's id to the access rights
            const rights_granted = await process.save()//save the note

            if (rights_granted) return res.status(200).json({ message: "Rights granted" })//return a 200 and inform the user
        }

    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })

    }
}

exports.revoke_access = (req, res, next) => {

    console.log("revoke access")
}

const type_is_valid = type => {

    if (type === "note") return true
    if (type === "process") return true
    else return false

}