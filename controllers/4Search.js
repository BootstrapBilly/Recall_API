const Note = require("../models/Note")//Import the note model to interact with the note collection
const Process = require("../models/Process")//Import the process model to interact with the process collection
const User = require("../models/User")//Import the user model to interact with it

exports.find_content = async (req, res, next) => {

    if (!req.body.search_string) return res.status(424).json({ message: "A search string is required" })//no search string ? return a 424 and inform them

    if (!req.body.user_id) return res.status(400).json({ message: "Bad request" })//No user id? return a 400 and inform them

    const user_id = req.body.user_id//extract the user id from the request body
    const search_string = req.body.search_string.toString()//extract the search string from the request body

    try {

        //search for all notes         with the given user id
        const notes = await Note.find({

            $and: [//$and is required to combine two $or statements without them clashing

                {
                    $or: [//Any notes which were created by, or have access rights pointing to the given user id
                        { created_by: user_id },
                        { access_rights: { $elemMatch: { _id: user_id } } }
                    ]
                },

                //and ANY OF THE FOLLOWING FIELDS -> $or means any field can match (title, subject, body, syntax or search tags)
                {
                    $or: [

                        //the following criteria = Does the given field e.g. title, contain the search string, 'i' means case insensitive
                        //e.g. if the search string is "test", does the title contain "test" anywhere inside
                        //e.g. "test" would match title:"test paper"
                        { title: { '$regex': search_string, '$options': 'i' } },//does the title contain the given search string ?
                        { subject: { '$regex': search_string, '$options': 'i' } },//does the subject contain the given search string ?
                        // { body: { '$regex': search_string, '$options': 'i' } },//does the body contain the given search string ?
                        { syntax: { '$regex': search_string, '$options': 'i' } },//does the syntax contain the given search string ?
                        { search_tags: { '$regex': search_string, '$options': 'i' } }//do any of the search tags contain the given search string ?

                    ]
                }

            ]

        })

        //search for all processes         with the given user id
        const processes = await Process.find({

            $and: [//$and is required to combine two $or statements without them clashing

                {
                    $or: [//Any notes which were created by, or have access rights pointing to the given user id
                        { created_by: user_id },
                        { access_rights: { $elemMatch: { _id: user_id } } }
                    ]
                },

                {            //and ANY OF THE FOLLOWING FIELDS -> $or means any field can match (title, subject, body, syntax or search tags)
                    $or: [

                        //the following criteria = Does the given field e.g. title, contain the search string, 'i' means case insensitive
                        //e.g. if the search string is "test", does the title contain "test" anywhere inside
                        //e.g. "test" would match title:"test paper"
                        { title: { '$regex': search_string, '$options': 'i' } },//does the title contain the given search string ?
                        { subject: { '$regex': search_string, '$options': 'i' } },//does the subject contain the given search string ?
                        // { body: { '$regex': search_string, '$options': 'i' } },//does the body contain the given search string ?
                        { search_tags: { '$regex': search_string, '$options': 'i' } }//do any of the search tags contain the given search string ?

                    ]
                }

            ]

        })

        const sorted_notes = notes.sort((a, b) => (a.title > b.title) ? 1 : -1)//sort the notes in alphabetical based on title
        const sorted_processes = processes.sort((a, b) => (a.title > b.title) ? 1 : -1)//sort the processes in alphabetical based on title
        const sorted_both = sorted_notes.concat(sorted_processes).sort((a, b) => (a.title > b.title) ? 1 : -1)//sort everything in alphabetical based on title

        return res.status(200).json({ notes: sorted_notes, processes: sorted_processes, both: sorted_both, message: "search executed" })
    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })

    }
}

exports.find_user = async (req, res, next) => {

    if (!req.body.search_string) return res.status(424).json({ message: "A search string is required" })//no search string ? return a 424 and inform them

    if (!req.body.user_id) return res.status(400).json({ message: "Bad request" })//No user id? return a 400 and inform them

    const user_id = req.body.user_id//extract the user id from the request body
    const search_string = req.body.search_string.toString()//extract the search string from the request body
    const unique = req.body.unique

    try {

        //search for all notes         with the given user id
        const users = await User.find({ username: { '$regex': search_string, '$options': 'i' } })

        const users_without_requester = users.filter(user => user._id.toString() !== user_id.toString())//remove the person who made the request so they cannot add themselves

        const existing_friends = await get_existing_users("friends", user_id)//get the users who are already friends
        const existing_requests = await get_existing_users("friend_requests", user_id)//get any pending incoming requests
        const outgoing_requests = await get_existing_users("outgoing_friend_requests", user_id)//get any pending outgoing requests

        //concat the arrays to make an array of users not to show in the search result
        const users_to_hide = existing_friends.concat(existing_requests).concat(outgoing_requests)

        const filtered_users = []//define an array to hold users which should be shown

        users_without_requester.forEach(user => {//run through each user

            let omit_user = false;//define a flag which will be set if the user's id matches that of the user to hide

            users_to_hide.forEach(friend => {//run through the array of users to hide

                //if the current user matches any of the users which should be hidden, set the flag tp true so they are not added
                if (user._id.toString() === friend.toString()) omit_user = true
            })

            if (!omit_user) filtered_users.push(user)//if the flag hasn't been set, add the user to the array of filtered users to show on the frontend
        })



        return res.status(200).json({ users: filtered_users, message: "search executed" })
    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })

    }
}

const get_existing_users = async (array, id) => {

    const requester = await User.findOne({ _id: id })

    const existing_friends = []

    requester[array].forEach(friend => existing_friends.push(friend.user_details))

    return existing_friends

}
