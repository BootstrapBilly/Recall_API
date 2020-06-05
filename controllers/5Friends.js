const User = require("../models/User")//Import the user model to interact with the user collection
ObjectId = require('mongodb').ObjectID;

exports.add_friend = async (req, res, next) => {

    const requester_user_id = req.body.user_id//extract the user id from the request
    const username = req.body.username//extract the username receiving the friend request

    try {

        //if the username is null or an empty string, send a 424 and inform the user
        if (!username || username && !username.length) return res.status(424).json({ message: "Please provide the username of the person you wish to add" })

        const requestee = await User.findOne({ username: username })//check the database for the given username
        if (!requestee) return res.status(200).json({ message: "We couldn't find that person" })//if the requestee was not found, send a 424 and inform the user

        const requester = await User.findOne({ _id: requester_user_id })//get the requester from the database

        //check the requestee's friend requests, and see if there already is one from the requester
        const request_already_pending = await User.findOne({ username: username, friend_requests: { $elemMatch: { _id: requester_user_id } } })
        if (request_already_pending) return res.status(200).json({ message: "You already have already sent a request to that person" })//if there is, send a 200 and inform them

        //check the requesters friend requests, and see if there is already one from the requestee
        const requester_already_has_request_from_requestee = await User.findOneAndUpdate(

            //search criteria = user id matches, and they have a request in their friend_requests array, from the person they are sending a request to
            { _id: requester_user_id, friend_requests: { $elemMatch: { _id: requestee._id } } },

            //If found, remove the friend request from their array of friend requests
            { $pull: { friend_requests: { _id: requestee._id } } }
        )

        if (requester_already_has_request_from_requestee) {//if the requester already has a pending request from the requestee,

            requester.friends.push(requestee._id)//add them to their friends list
            requestee.friends.push(requester._id)//and the same with the requestee

            const requestee_saved = await requestee.save()//save both documents
            const requester_saved = await requester.save()

            if (requestee_saved && requester_saved) return res.status(201).json({ message: "Friend added" })//and send a 201, friend added 

        }


        //*All checks passed

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

        const requestee = await User.findOne({ _id: requestee_user_id })//find the requestee
        const requester = await User.findOne({ _id: requester_user_id })//find the requester

        requestee.friends.push(requester_user_id)//add the requester to the requestee's friends
        requester.friends.push(requestee_user_id)//and vice versa

        const requestee_saved = await requestee.save()//save the requestee
        const requester_saved = await requester.save()//save the requester

        const request_removed = await User.findOneAndUpdate(//then remove the pending friend request

            { _id: requestee_user_id },//find the requestee

            //And remove the request from their friend requests array
            { $pull: { friend_requests: { _id: requester_user_id } } }
        )

        //if the both documents were saved, and the pending request was removed, send a 201 and inform the user
        if (requestee_saved && requester_saved && request_removed)  return res.status(201).json({ message: "Request accepted" })
        
    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })

    }



}

exports.delete_friend = async (req, res, next) => {

    const user_id = req.body.user_id//extract the user id
    const user_to_delete_id = req.body.user_to_delete_id//and the friend to remove id

    try{

        const first_friend_removal = await User.findOneAndUpdate({_id:user_id}, { $pull: { friends: { _id: user_to_delete_id } } })
        const second_friend_removal = await User.findOneAndUpdate({_id:user_to_delete_id}, { $pull: { friends: { _id: user_id } } })

        if(first_friend_removal && second_friend_removal) return res.status(200).json({message:"Friend removed"})
    }
    
    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })

    }
}
