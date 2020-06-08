const Note = require("../models/Note")//Import the note model to interact with the note collection
const Process = require("../models/Process")//Import the process model to interact with the process collection

exports.find_content = async (req, res, next) => {

    if(!req.body.search_string) return res.status(424).json({ message:"A search string is required" })//no search string ? return a 424 and inform them

    if(!req.body.user_id) return res.status(400).json({message:"Bad request"})//No user id? return a 400 and inform them

    const user_id = req.body.user_id//extract the user id from the request body
    const search_string = req.body.search_string.toString()//extract the search string from the request body

    try {

        //search for all notes         with the given user id
        const notes = await Note.find({
            created_by: user_id,

            //and ANY OF THE FOLLOWING FIELDS -> $or means any field can match (title, subject, body, syntax or search tags)
            $or: [

                //the following criteria = Does the given field e.g. title, contain the search string, 'i' means case insensitive
                //e.g. if the search string is "test", does the title contain "test" anywhere inside
                //e.g. "test" would match title:"test paper"
                { title: { '$regex': search_string, '$options': 'i' } },//does the title contain the given search string ?
                { subject: { '$regex': search_string, '$options': 'i' } },//does the subject contain the given search string ?
                { body: { '$regex': search_string, '$options': 'i' } },//does the body contain the given search string ?
                { syntax: { '$regex': search_string, '$options': 'i' } },//does the syntax contain the given search string ?
                { search_tags: { '$regex': search_string, '$options': 'i' } }//do any of the search tags contain the given search string ?

            ]

        })

        //search for all notes         with the given user id
        const processes = await Process.find({created_by: user_id,

            //and ANY OF THE FOLLOWING FIELDS -> $or means any field can match (title, subject, body, syntax or search tags)
            $or: [

                //the following criteria = Does the given field e.g. title, contain the search string, 'i' means case insensitive
                //e.g. if the search string is "test", does the title contain "test" anywhere inside
                //e.g. "test" would match title:"test paper"
                { title: { '$regex': search_string, '$options': 'i' } },//does the title contain the given search string ?
                { subject: { '$regex': search_string, '$options': 'i' } },//does the subject contain the given search string ?
                { body: { '$regex': search_string, '$options': 'i' } },//does the body contain the given search string ?
                { search_tags: { '$regex': search_string, '$options': 'i' } }//do any of the search tags contain the given search string ?

            ]

        })

        return res.status(200).json({ notes: notes, processes:processes, message:"search executed" })
    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })

    }
}
