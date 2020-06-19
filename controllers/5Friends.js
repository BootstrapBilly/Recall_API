const User = require("../models/User")//Import the user model to interact with the user collection
const Note = require("../models/Note")//Import the note model to interact with the user collection
const Process = require("../models/Process")//Import the process model to interact with the user collection

exports.add_friend = async (req, res, next) => {

    //if the username or user id is null or an empty string, send a 424 and inform the user
    if (!req.body.username || !req.body.user_id) return res.status(400).json({ message: "Bad request" })

    const requester_user_id = req.body.user_id//extract the user id from the request
    const username = req.body.username.toString().toLowerCase()//extract the username receiving the friend request

    try {

        const requestee = await User.findOne({ username: username })//check the database for the given username
        if (!requestee) return res.status(400).json({ message: "Bad request" })//if the requestee was not found, send a 400 and inform the user

        const requester = await User.findOne({ _id: requester_user_id })//get the requester from the database
        if (!requester) return res.status(400).json({ message: "Bad request" })//if the requester was not found, send a 400 and inform the user

        //check the requestee's friend requests, and see if there already is one from the requester
        const request_already_pending = await User.findOne({ username: username, friend_requests: { $elemMatch: { _id: requester_user_id } } })
        if (request_already_pending) return res.status(200).json({ message: "You already have already sent a request to that person" })//if there is, send a 200 and inform them

        //_Requester already has a pending request from the requestee - Add them both automatically

        const requester_already_has_request_from_requestee = await User.findOne({ _id: requester_user_id, friend_requests: { $elemMatch: { _id: requestee._id } } })

        if (requester_already_has_request_from_requestee) return create_friendship(requester, requestee, res)

        //*All checks passed, they don't have pending friend requests

        requestee.friend_requests.push(requester_user_id)//Save the requester's user id to the requestee's friend requests

        const request_inserted = await requestee.save()//save the document

        if (request_inserted) return res.status(200).json({ message: "Request sent" })//send a 200 with a success message

    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })

    }

}


exports.process_request = async (req, res, next) => {

    //if theres no user id's or the decision is not a boolean, return a 400 and inform the user
    if (!req.body.requestee_user_id || !req.body.requester_user_id || typeof req.body.decision !== "boolean") return res.status(400).json({ message: "Bad request" })

    const requestee_user_id = req.body.requestee_user_id//grab the requestee user id (person making the decision)
    const requester_user_id = req.body.requester_user_id//grab the requester user id (person who sent the friend request)
    const decision = req.body.decision//decision to accept or deny

    try {

        //!denied request
        if (decision === false) {//if they deny the friend request

            const request_removed = await User.findOneAndUpdate(

                { _id: requestee_user_id },//find the requestee

                //And remove the request from their friend requests array
                { $pull: { friend_requests: { _id: requester_user_id } } }
            )

            //if the request was removed from the array of requests
            if (request_removed) return res.status(200).json({ message: "Request denied" })//send a 200 and inform the user

        }

        //* accepted request

        const requestee = await User.findOne({ _id: requestee_user_id })//check the database for the given username
        if (!requestee) return res.status(400).json({ message: "Bad request" })//if the requestee was not found, send a 400 and inform the user

        const requester = await User.findOne({ _id: requester_user_id })//get the requester from the database
        if (!requester) return res.status(400).json({ message: "Bad request" })//if the requester was not found, send a 400 and inform the user

        //*all checks passed, called the create friendship method to add the friends
        return create_friendship(requestee, requester, res)

    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })

    }

}

exports.delete_friend = async (req, res, next) => {

    if(!req.body.user_id || !req.body.user_to_delete_id) return res.status(400).json({message:"Bad request"})//if any require fields are missing, send a 400 and inform them

    const user_id = req.body.user_id//extract the user id
    const user_to_delete_id = req.body.user_to_delete_id//and the friend to remove id

    try {

        const first_friend_removal = await User.findOneAndUpdate({ _id: user_id }, { $pull: { friends: { _id: user_to_delete_id } } })
        const second_friend_removal = await User.findOneAndUpdate({ _id: user_to_delete_id }, { $pull: { friends: { _id: user_id } } })

        const first_user_notes_access_rights_removed = await Note.updateMany(//find and update all notes
            
            {created_by:user_id, access_rights: { $elemMatch: { _id: user_to_delete_id } }},//which match this criteria
            { $pull: { access_rights: { _id: user_to_delete_id } } }//pull the access rights out of the array
            
            )

        const first_user_process_access_rights_removed = await Process.updateMany(//find and update all notes
            
            {created_by:user_id, access_rights: { $elemMatch: { _id: user_to_delete_id } }},//which match this criteria
            { $pull: { access_rights: { _id: user_to_delete_id } } }//pull the access rights out of the array

            )

        const second_user_notes_access_rights_removed = await Note.updateMany(//find and update all notes
            
            {created_by:user_id, access_rights: { $elemMatch: { _id: user_to_delete_id } }},//which match this criteria
            { $pull: { access_rights: { _id: user_to_delete_id } } }//pull the access rights out of the array
            
            )

        const second_user_process_access_rights_removed = await Process.updateMany(//find and update all notes
            
            {created_by:user_to_delete_id, access_rights: { $elemMatch: { _id: user_id } }},
            { $pull: { access_rights: { _id: user_id } } }//pull the access rights out of the array

            )

        if (first_friend_removal && second_friend_removal && first_user_notes_access_rights_removed && first_user_process_access_rights_removed && second_user_notes_access_rights_removed && second_user_process_access_rights_removed) return res.status(200).json({ message: "Friend removed" })
    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })

    }
}

const create_friendship = async (user1, user2, res) => {

    //check the requesters friend requests, and see if there is already one from the requestee
    const pending_request_removed = await User.findOneAndUpdate(

        //search criteria = user id matches, and they have a request in their friend_requests array, from the person they are sending a request to
        { _id: user1._id, friend_requests: { $elemMatch: { _id: user2._id } } },

        //If found, remove the friend request from their array of friend requests
        { $pull: { friend_requests: { _id: user2._id } } }
    )

    if (pending_request_removed) {//if the requester already has a pending request from the requestee,

        user1.friends.push(user2._id)//add them to their friends list
        user2.friends.push(user1._id)//and the same with the requestee

        const user2_saved = await user2.save()//save both documents
        const user1_saved = await user1.save()

        if (user1_saved && user2_saved) return res.status(201).json({ message: "Friend added" })//and send a 201, friend added 

    }

}
