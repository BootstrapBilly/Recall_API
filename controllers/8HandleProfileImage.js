const User = require("../models/User")//import the note schema to interact with the database

exports.Set_url = async (req,res,next) => {

    const url = req.body.url.url
    const user_id = req.body.url.user_id

    try{

        const url_set = await User.findOneAndUpdate({_id:user_id}, {image_url:url})
        if(url_set) return res.status(201).json({success:true, message:"Image uploaded successfully"})
    }


    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    }

}

exports.Get_url = async (req,res,next) => {

    const user_id = req.body.user_id

    try{

        const user_found = await User.findOne({_id:user_id})

        user_found && res.status(200).json({success:true, message:"Image fetched successfully", url:user_found.image_url})
    }


    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    }

}