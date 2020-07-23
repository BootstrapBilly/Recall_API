const User = require("../models/User")//import the note schema to interact with the database

exports.Set_url = async (req,res,next) => {

    const url = req.body.url.url
    const user_id = req.body.url.user_id

    try{

        const url_set = await User.findOneAndUpdate({_id:user_id}, {image_url:url})

        url_set && res.status(201).json({success:true, message:"Image uploaded successfully"})
    }


    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    }


    // const url_set = await Book.findOneAndUpdate({year:year, condition:condition}, {image_url:url})

    // url_set ? res.status(204) : res.status(500).json({ error: "Database error" })

    // console.log(req.body.form_values)
}