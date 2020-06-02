const User = require("../models/User")//import the user model for interacting with the database
const crypto = require("crypto");//import the built in crypto feature from node
const bcrypt = require("bcryptjs")//import bcrypt to encrypt the password

//util
const send_email = require("../util/send_email")//import the email util function
const validate_password = require("../util/validate_password")

exports.generate_email = async (req, res, next) => {

    const email = req.body.email//extract the email from the request body

    try {

        const token = crypto.randomBytes(32).toString('hex');//generate a random 32 char token

        exports.token = token;

        const user = await User.findOne({ email_address: email })//find the given email in the database

        //if it does not exist, send the same response to prevent people from abusing it to find real emails
        if (!user) return res.status(200).json({ message: "If your email address was found, we just sent you an email with instructions to reset your password" })

        //find the user, then set their reset token and expiration date                                                     1 hour from now
        const token_set = await User.findOneAndUpdate({ _id: user._id }, { reset_token: token, token_expiration: Date.now() + 36000000 })

        //then send the response, informing the user -> DO NOT SAY THAT THEIR EMAIL DOES/DOES NOT EXIST, TO PREVENT PEOPLE FROM ABUSING IT AND LEAKING EMAILS
        if (token_set) {

            send_email.password_reset(email, token, user._id)//send a password reset email, with the token and user id included

            //return a successful response and inform the user
            return res.status(200).json({ message: "If your email address was found, we just sent you an email with instructions to reset your password" })
        }

    }

    catch (error) {

        return res.status(500).json({ message: "Sorry, something went wrong with our server" })

    }

}

exports.change_password = async (req, res, next) => {

    const user_id = req.body.user_id//extract the userid from the request
    const token = req.body.token//extract the token from the request
    const password = req.body.password//extract the password from the request
    const repeat_password = req.body.repeat_password//extract the repeated password from the request

    try {

        const user = await User.findOne({ _id: user_id, reset_token: token })//find the user with the given user id and reset token

        //if they don't exist, someone is trying to abuse this endpoint, send a 418 and inform them
        if (!user) return res.status(418).json({ message: "You do not have permission to change this password" })

        //if their token is out of date, send a 401 and inform them
        if (user.token_expiration < Date.now()) return res.status(401).json({ message: "Your link has expired, please request a new one" })

        //*Token valid and in date, check the password

        const result = validate_password.validate(password, repeat_password)//Scan the password, checking that it conforms

        if(result !== "okay") return res.status(424).json({message: result})//if the password is not valid, send a response with the reason why

        //*Password is valid, encrypt the password
        const hashed_password = await bcrypt.hash(password, 12)//encrypt the new password

        if(hashed_password){//once it is encrypted

            user.password = hashed_password//set the users new password
            user.reset_token = undefined,//clear the reset token
            user.token_expiration = undefined//clear the expiration date

            const password_updated = await user.save()//save the user

            if(password_updated){//once they are saved

                return res.status(201).json({message:"Your password has been updated"})//return a success response

            }
        }



    }

    catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Sorry, something went wrong with our server" })
    }

}


