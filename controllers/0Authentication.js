const User = require("../models/User")//import the user schema to interact with the database
const bcrypt = require("bcryptjs")//import bcrypt to encrypt the password
const jwt = require("jsonwebtoken")//Import json web tokens 

const validate_password = require("../util/validate_password")

exports.create_user = async (req, res, next) => {

    const email = req.body.email //extract the email
    const password = req.body.password//password
    const repeat_password = req.body.repeat_password//and second password from the response
    const username = req.body.username//the username

    try {

        const email_in_use = await User.findOne({ email_address: email })//Does the email already exist in the database?
        if (email_in_use) return res.status(424).json({ message: "Sorry, that email in unavailable" })//if so, abort and inform the user

        const username_in_use = await User.findOne({ username: username })//Check to see if the username already exists in the database
        if (username_in_use) return res.status(424).json({ message: "Sorry, that username in unavailable" })//if so, abort and inform the user

        const result = validate_password.validate(password, repeat_password)//Scan the password, checking that it conforms
        if (result !== "okay") return res.status(424).json({ message: result })//if the password is not valid, send a response with the reason why

        //*All password checks passed, hash the password
        const hashed_password = await bcrypt.hash(password, 12)//bcrypt.hash encrypts the user password, 12 is the salt

        if (!hashed_password) return res.status(500).json({ message: "Sorry, something went wrong with our server" })//if the password was not hashed properly

        //*Password hashed correctly, create a new user
        const user = new User({//create a new user object from the schema

            email_address: email,//set their email
            password: hashed_password, //set the hashed_password NOT THE PLAIN TEXT PASSWORD
            username: username,//set their username
            friends: [],//initialize friends as an empty array
            friend_requests: [],//initialize the friends requests as an empty array 
            reset_token: null,//reset token for resetting passwords
            token_expiration: null,//token expiration date

        })

        const user_saved = await user.save()//save the new user

        //if they saved correctly, send a 201 success response          If there was an error, send a 500 server error
        user_saved ? res.status(201).json({ message: "User created" }) : res.status(500).json({ message: "Sorry, something went wrong with our server" })

    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    }

}

exports.login = async (req, res, next) => {

    const email = req.body.email //extract the email
    const password = req.body.password//password
    const request_ip = req.connection.remoteAddress//grab the request IP

    try {

        const user = await User.findOne({ email_address: email })//Search the database for the given email

        if (!user) return res.status(424).json({ message: "Sorry, that email does not exist in our database" })//if it doesn't exist, return a 424 and inform them

        const password_matches = await bcrypt.compare(password, user.password)//use bcyrpt to check if the hashed password in the db matches the given password

        if (!password_matches) {

            track_login_failure(request_ip, email)//keep track of the login failure by adding it to the loginfailures array

            const brute_force_detected = check_failed_attempts(request_ip, email)//check if the request IP has more than 3 failed attempts at the given email

            if (brute_force_detected) return res.status(418).json({ message: "Sorry, your password is incorrect", captcha: true })//if the password doesn't match, return a 424 and inform the user

            return res.status(424).json({ message: "Sorry, your password is incorrect" })//if the password doesn't match, return a 424 and inform the user

        }

        //*Passed all checks generate the token
        const token = generate_jwt(user._id)//generate a json web token with the user's id

        clear_login_failure(request_ip, email)//clear any login failures to remove the captcha in the response next time they log in

        //token generated, login successful, respond with a message, along with the jwt and the userid
        return res.status(200).json({ message: "Login successful", token: token, user_id: user._id })

    }

    catch (error) {

        console.log(error)//if there was an error, log it and send a 500 server error
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })

    }

}

//_ Helper methods and variables

let login_failures = []//keep track of login failures

const generate_jwt = (user_id) => {

    const token = jwt.sign({//create the web token here
        user_id: user_id.toString()//Store the user id inside the token  - Must be converted to string because its a mongodb id object
    }, "You'll-_!neverguessthis!",//Secret to the token
        { expiresIn: "1h" }//Expiry time set here - 1 hour is common
    );

    return token

}

const track_login_failure = (ip, email) => {

    const email_found = login_failures.find(failure => failure.email === email)//see if the email address has any failed attempts

    if (email_found) return email_found.attempts += 1//if it does, add another failed attempt on

    else login_failures.push({ ip: ip, email: email, attempts: 1 })//Otherwise, add the ip and email of the failed attempt

}

const check_failed_attempts = (ip, email) => {

    //check if there are more than 3 failed attempts for the given email and IP address
    const brute_force_detected = login_failures.find(failure => failure.email === email && failure.ip === ip && failure.attempts > 3)

    if (brute_force_detected) return true
    else return false

}

const clear_login_failure = (ip, email) => {
    //return the same array, without any objects that contain the given ip and email
    login_failures = login_failures.filter(failure => failure.ip !== ip && failure.email !== email)

}