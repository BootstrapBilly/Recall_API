const Process = require("../models/Process")

exports.check_title = async (req,res,next) => {

    if(!req.body.title || !req.body.user_id) return res.status(400).json({ message: "Bad request" })//if there is no title, return 400 bad request

    const title = req.body.title.toLowerCase() //extract the title and convert it to toLowerCase
    const user_id = req.body.user_id // extract the user id from the request

    try{
        const title_in_use = await Process.findOne({ title: title, created_by: user_id })//see if a process with that title already exists for the given user
        if (title_in_use) return res.status(424).json({ message: "You already have a process with that title, please choose another" })//if it is, send a 424 and inform the user
        else return res.status(200).json({message:"Title is okay"})//otherwise send a 200, title is okay
    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    }

}

exports.create_process = async (req, res, next) => {

    if (!req.body.user_id) return res.status(400).json({ message: "Bad request" })//if no user id return a 400, bad request

    //if there is no title, or no notes, or notes is an empty array, send a 424 and inform the user
    if (!req.body.title || !req.body.notes || req.body.notes && !req.body.notes.length) return res.status(424).json({ message: "A process must have a title and at least 1 note" })

    const user_id = req.body.user_id;//extract the user id from the request
    const title = req.body.title.toString().toLowerCase();//extract the title from the request and convert it to a lowercase string
    const subject = req.body.subject;//extract the subject from the request
    const body = req.body.body;//extract the body from the request
    let search_tags = req.body.search_tags;//extract the search tags from the request
    const notes = req.body.notes//extract the notes from the request

    try {

        const title_in_use = await Process.findOne({ title: title, created_by: user_id })//see if a note with that title already exists for the given user

        if (title_in_use) return res.status(424).json({ message: "You already have a process with that title, please choose another" })//if it is, send a 424 and inform the user

        //if there are any search tags, 
        if (search_tags) search_tags = Array.from(new Set(search_tags))//create a new array from a set of the old search tags(removes any duplicates)  
            .map(String)//and convert all elements to a string 

        //?if there are any duplicate notes, let them enter (users may have duplicate notes in a process) 

        //* Checks passed

        const process = new Process({//create a new process, with the given details

            _id: req.body._id || null,//for testing purposes, if an object id was supplied, manually set it, otherwise set it as null and let mongodb generate it
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

    if (!req.body.user_id || !req.body.title) return res.status(400).json({ message: "Bad request" })//if no user id return a 400, bad request

    //if there is no title, or no notes, or notes is an empty array, send a 424 and inform the user
    if (!req.body.new_title || !req.body.new_notes || req.body.new_notes && !req.body.new_notes.length) return res.status(424).json({ message: "A process must have a title and at least 1 note" })

    const user_id = req.body.user_id;//extract the user id from the request
    const title = req.body.title.toString().toLowerCase();//extract the title from the request and convert it to a lowercase string
    const new_title = req.body.new_title.toString().toLowerCase();//extract the title from the request and convert it to a lowercase string
    const new_subject = req.body.new_subject;//extract the subject from the request
    const new_body = req.body.new_body;//extract the body from the request
    let new_search_tags = req.body.new_search_tags;//extract the search tags from the request
    const new_notes = req.body.new_notes //extract the notes

    try {

        if (title !== new_title) {//if they have supplied a new title

            const title_in_use = await Process.findOne({ title: new_title, created_by: user_id })//check to see if it is in use already

            if (title_in_use) return res.status(424).json({ message: "You already have a process with that title, please choose another" })//if it is, send a 424 and inform them

        }

        //if there are any search tags, 
        if (new_search_tags) new_search_tags = Array.from(new Set(new_search_tags))//create a new array from a set of the old search tags(removes any duplicates)  
            .map(String)//and convert all elements to a string  

        const process_updated = await Process.findOneAndUpdate({ title: title, created_by: user_id }, {

            title: new_title,
            subject: new_subject,
            body: new_body,
            search_tags: new_search_tags,
            notes: new_notes

        })

        if (process_updated) return res.status(201).json({ message: "process updated successfully" })
    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    }

}

exports.delete_process = async (req, res, next) => {

    if (!req.body.user_id || !req.body.title) return res.status(400).json({ message: "Bad request" })//if no user id return a 400, bad request

    const user_id = req.body.user_id;//extract the user id from the request
    const title = req.body.title.toString().toLowerCase();//extract the title from the request and convert it to a lowercase string

    try {

        const process_deleted = await Process.findOneAndDelete({ title: title, created_by: user_id })//find and delete the process with the given title who was created by the given user

        //send the corresponding response
        process_deleted ? res.status(200).json({ message: "process deleted successfully" }) : res.status(424).json({ message: "We couldn't find that process" })

    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    }

}

exports.get_processes = async (req, res, next) => {

    if (!req.body.user_id) return res.status(400).json({ message: "Bad request" })//if no user id return a 400, bad request

    const user_id = req.body.user_id;//extract the user id from the request body

    try {

        const processes_fetched = await Process.find({

            $or:[//either of the following criteria will return a match
                { created_by: user_id },//created by the user ?
                {access_rights: { $elemMatch: { _id: user_id } }}//User has access rights to the process?
            ]})//fetch all processes which were created by the given user

        //once the processes have been fetched (even if 0 was found)
        processes_fetched && res.status(200).json({ message: "processes retrieved", processes: processes_fetched })//return a 200 with all found processes attached

    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    }

}