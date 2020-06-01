const User = require("../models/User")//import the user model for interacting with the database
const crypto = require("crypto");//import the built in crypto feature from node
const sgMail = require('@sendgrid/mail');

exports.generate_email = async (req, res, next) => {

    const email = req.body.email//extract the email from the request body

    try {

        const user = await User.findOne({email_address:email})//search the database for the given email

        //if the user doesn't exist, send a 200 and inform the them, for security purposes, do not say that the email was not found
        if(!user) return res.status(200).json({message:"If your email address was found, we just sent you an email with instructions to reset your password"})
    
        //*email found
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);//set the api key for sendgrid
        const token = generate_security_token(res)//generate the security token, passing it the response object incase an error response is required
    
        user.reset_token = token;//set their reset token to the one we generated with crypto.randombytes

        const token_inserted = await user.save()

        user.token_expiration = Date.now() + 36000000; //set the token expiration to 1 hour from now

        const expiration_inserted = await user.save()
    
        if(!token_inserted || ! expiration_inserted) return res.status(500).json({message:"Sorry, something went wrong with our server"})

        const msg = {
            to: 'billy.development.practise@gmail.com',
            from: 'billy.development.practise@gmail.com',
            subject: 'Sending with Twilio SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
          };

          sgMail.send(msg);
    
          return res.status(200).json({message:"If your email address was found, we just sent you an email with instructions to reset your password"})

    }

    catch(error){
        console.log(error)
        return res.status(500).json({message:"Sorry, something went wrong with our server"})

    }

}

exports.change_password = (req, res, next) => {
    
    console.log("Change password")
}

const generate_security_token = (res) => {

    let token;

    crypto.randomBytes(32, (err, buffer) => { //create a random token using the node crypto package

        if (err) {//if theres an error
            return res.status(500).json({ message:"Sorry, something went wrong with our database, we are working on it."})//respond accordingly
        }

        //*if theres no error, set the security token
        token = buffer.toString("hex");//create the token and convert it to a string, then assign it to the token variable

        return token //return the token

    });

}