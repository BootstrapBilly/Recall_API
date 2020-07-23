const User = require("../models/User")//import the note schema to interact with the database

exports.Change_username = async (req,res,next) => {

    console.log(req.body)

    // try{

    //     const url_set = await User.findOneAndUpdate({_id:user_id}, {image_url:url})
    //     url_set && res.status(201).json({success:true, message:"Image uploaded successfully"})
    // }


    // catch (error) {

    //     console.log(error)//if there was an error, log it and send a 500 server error
    //     return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    // }

}

exports.Change_password = async (req,res,next) => {

    console.log(req.body)

    // try{

    //     const user_found = await User.findOne({_id:user_id})

    //     user_found && res.status(200).json({success:true, message:"Image fetched successfully", url:user_found.image_url})
    // }


    // catch (error) {

    //     console.log(error)//if there was an error, log it and send a 500 server error
    //     return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    // }

}