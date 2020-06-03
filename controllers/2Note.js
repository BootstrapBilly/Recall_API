const Note = require("../models/Note")//import the Note model to interact with database

exports.create_note = async (req, res, next) => {

    const user_id = req.body.user_id;//extract the user id from the request
    const title = req.body.title;//extract the title from the request
    const subject = req.body.subject;//extract the subject from the request
    const body = req.body.body;//extract the body from the request
    let search_tags = req.body.search_tags;//extract the search tags from the request
    const syntax = req.body.syntax //extract the syntax from the request

    try {

        if (!title || !body) return res.status(424).json({ message: "A note must have a title and body" })//if the title is missing, send a 424 and inform the user

        const note_exists = await Note.findOne({ title: title, created_by: user_id })//see if a note with that title already exists for the given user

        if (note_exists) return res.status(424).json({ message: "You already have a note with that title, please choose another" })//if it is, send a 424 and inform the user

        //if there are any search tags, 
        if (search_tags) search_tags = Array.from(new Set(search_tags))//create a new array from a set of the old search tags(removes any duplicates)  

        //* Checks passed

        const note = new Note({//create a new note, with the given details

            title: title,
            subject: subject,
            body: body,
            search_tags: search_tags,
            syntax: syntax,
            created_by: user_id,
            access_rights: []//initialse access rights as an empty array

        })

        const note_saved = await note.save()//save the new notes

        //if it was saved successfully, send the corresponding response
        if (note_saved) return res.status(201).json({ message: "Note added successfully" })

    }

    catch (error) {

        console.log(error)
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    }
}

exports.update_note = async (req, res, next) => {

    const user_id = req.body.user_id;//extract the user id from the request
    const title = req.body.title;//extract the title from the request
    const new_title = req.body.new_title;//extract the new title from the request
    const new_subject = req.body.new_subject;//extract the subject from the request
    const new_body = req.body.new_body;//extract the body from the request
    let new_search_tags = req.body.new_search_tags;//extract the search tags from the request
    const new_syntax = req.body.new_syntax //extract the syntax from the request

    try {

        if (!new_title || !new_body) return res.status(424).json({ message: "A note must have a title and body" })//if the title is missing, send a 424 and inform the user

        if(title !== new_title){//if they have supplied a new title

            const title_in_use = await Note.findOne({title: new_title, created_by:user_id})//check to see if it is in use already

            if(title_in_use) return res.status(424).json({message:"You already have a note with that title, please choose another"})//if it is, send a 424 and inform them

        }

        //if there are any search tags, 
        if (new_search_tags) new_search_tags = Array.from(new Set(new_search_tags))//create a new array from a set of the old search tags(removes any duplicates)  

        const note_updated = await Note.findOneAndUpdate({ title: title, created_by: user_id }, {

            title: new_title,//if a new title was not specified, set the title to the old title
            subject: new_subject,
            body: new_body,
            search_tags: new_search_tags,
            syntax: new_syntax,
            created_by: user_id,
            access_rights:[]

        })

        if (note_updated) return res.status(201).json({ message: "note updated successfully"})
    }

    catch (error) {

        console.log(error)
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    }

}

exports.delete_note = async (req, res, next) => {

    const user_id = req.body.user_id;//extract the user id from the request
    const title = req.body.title;//extract the title from the request

    try{

        const note_deleted = await Note.findOneAndDelete({title:title, created_by:user_id})

        note_deleted ? res.status(200).json({ message: "note deleted successfully"}) : res.status(424).json({message:"We couldn't find that note"})

    }

    catch(error){

        console.log(error)
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })

    }


}

exports.get_notes = (req, res, next) => {

    console.log("Get notes")
}

exports.get_notes_by_subject = (req, res, next) => {

    console.log("get by subject")
}