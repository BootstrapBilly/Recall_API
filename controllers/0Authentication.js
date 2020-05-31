const User = require("../models/User")//import the user schema to interact with the database
const bcrypt = require("bcryptjs")//import bcrypt to encrypt the password

exports.create_user = async (req, res, next) => {

    const email = req.body.email //extract the email
    const password = req.body.password//password
    const repeat_password = req.body.password//and second password from the response

    const email_in_use = await User.findOne({email_address:email})//Does the email already exist in the database?

    if(email_in_use) return res.status(424).json({message: "Sorry, that email in unavailable"})//if so, abort and inform the user

    const password_check_result = check_password_is_valid(password, repeat_password)//Scan the password, checking that it conforms

    switch(password_check_result){//run through the erroneus results, responding accordingly

        case "no_match":
        return res.status(424).json({message: "Your passwords must match."})

        case "too_short":
        return res.status(424).json({message: "Your password must be at least 8 characters."})

        case "no_uppercase":
        return res.status(424).json({message: "Your password must contain at least 1 uppercase letter."})

    }

    //*All password checks passed, hash the password
    const hashed_password = await bcrypt.hash(password, 12)//bcrypt.hash encrypts the user password, 12 is the salt

    if(!hashed_password) return res.status(500).json({message:"Sorry, something went wrong with our server"})//if the password was not hashed properly

    //*Password hashed correctly, create a new user
    const user = new User({//create a new user object from the schema

        email_address:email,//set their email
        password:hashed_password, //set the hashed_password NOT THE PLAIN TEXT PASSWORD
        friends:[],//initialize friends as an empty array
        friend_requests:[]//initialize the friends requests as an empty array 

    })

    const user_saved = await user.save()//save the new user

    //if they saved correctly, send a 201 success response          If there was an error, send a 500 server error
    user_saved ? res.status(201).json({message:"User created"}) : res.status(500).json({message:"Sorry, something went wrong with our server"})

}

exports.login = (req, res, next) => {

    console.log("login")
}

const check_password_is_valid = (password, repeat_password) => {

    if(password !== repeat_password) return "no_match" //if the passwords do not match
    if(password.length < 8) return "too_short" //if the password is less than 8 characters
    if(!/[A-Z]/.test(password)) return "no_uppercase" //if the password does not have an uppercase character

    else return "okay" // All conditions matched, return "okay"

}
