const Process = require("../models/Process")

exports.create_process = async (req, res, next) => {

    const user_id = req.body.user_id;//extract the user id from the request
    const title = req.body.title;//extract the title from the request
    const subject = req.body.subject;//extract the subject from the request
    const body = req.body.body;//extract the body from the request
    let search_tags = req.body.search_tags;//extract the search tags from the request
    const notes = req.body.notes//extract the notes from the request

    try {

        //if there is no title, or no notes, or notes is an empty array, send a 424 and inform the user
        if (!title || !notes || notes && !notes.length) return res.status(424).json({ message: "A process must have a title and at least 1 note" })

        const title_in_use = await Process.findOne({ title: title, created_by: user_id })//see if a note with that title already exists for the given user

        if (title_in_use) return res.status(424).json({ message: "You already have a process with that title, please choose another" })//if it is, send a 424 and inform the user

        //if there are any search tags, 
        if (search_tags) search_tags = Array.from(new Set(search_tags))//create a new array from a set of the old search tags(removes any duplicates)  

        //?if there are any duplicate notes, let them enter (users may have duplicate notes in a process) 

        //* Checks passed

        const process = new Process({//create a new process, with the given details

            title: title,
            subject: subject,
            body: body,
            search_tags: search_tags,
            notes: notes,
            created_by: user_id,
            access_rights: []//initialse access rights as an empty array

        })

        const process_saved = await process.save()//save the new notes

        //if it was saved successfully, send the corresponding response
        if (process_saved) return res.status(201).json({ message: "process added successfully" })

    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    }
}

exports.update_process = async (req, res, next) => {

    const user_id = req.body.user_id;//extract the user id from the request
    const title = req.body.title;//extract the title from the request
    const new_title = req.body.new_title;//extract the new title from the request
    const new_subject = req.body.new_subject;//extract the subject from the request
    const new_body = req.body.new_body;//extract the body from the request
    let new_search_tags = req.body.new_search_tags;//extract the search tags from the request
    const new_notes = req.body.new_notes //extract the notes

    try {

        //if there is no title, or no notes, or notes is an empty array, send a 424 and inform the user
        if (!new_title || !new_notes || new_notes && !new_notes.length) return res.status(424).json({ message: "A process must have a title and at least 1 note" })

        if (title !== new_title) {//if they have supplied a new title

            const title_in_use = await Process.findOne({ title: new_title, created_by: user_id })//check to see if it is in use already

            if (title_in_use) return res.status(424).json({ message: "You already have a process with that title, please choose another" })//if it is, send a 424 and inform them

        }

        //if there are any search tags, 
        if (new_search_tags) new_search_tags = Array.from(new Set(new_search_tags))//create a new array from a set of the old search tags(removes any duplicates)  

        const process_updated = await Process.findOneAndUpdate({ title: title, created_by: user_id }, {

            title: new_title,
            subject: new_subject,
            body: new_body,
            search_tags: new_search_tags,
            notes:new_notes

        })

        if (process_updated) return res.status(201).json({ message: "process updated successfully" })
    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    }

}

exports.delete_process = (req, res, next) => {

    console.log("delete note")
}

exports.get_processes = (req, res, next) => {

    console.log("Get notes")
}