// const jwt = require("jsonwebtoken");//import the jwt package to decode the incoming token

// /*The JWT is generated when logging in, the sent back to the client
// This function ensures that any subsequent incoming requests contain the generated token
// If they do not, they are not coming from recall's client */

// module.exports = (req, res, next) => {

    
//     let decodedToken;//Define a variable to hold the decoded token

//     try {

//         if(!req.get("Authorization")) return res.status(401).json({Unauthorized:true})

//         const token = req.get("Authorization").split(" ")[1]; //Extract the token from the header //!req.get(Header) extrats data from the header
//         //decode the token and store it inside the decoded token variable
//         decodedToken = jwt.verify(token, "You'll-_!neverguessthis!")//First parameter is the token to decode and second parameter is the key set on token creation

//     }

//     catch(err) {//if something went wrong
        
//         console.log(err)

//         return res.status(500).json({message:"Could not verify token"})

//     }

//     //? Didnt fail technically, but token was not verified

//     if(!decodedToken){

//         return res.status(424).json({message:"Could not verify token"})
//     }

//     //* Passed all checks
//     //if the token was verified, move onto the next middleware and allow access to the api
//     next();
// }

const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {

    if(!req.get("Authorization")) return res.status(400).json({Unauthorized:true})

    const token = req.get("Authorization").split(" ")[1]//get the jwt from the header

    let decodedToken

    try {

        decodedToken = jwt.verify(token, `${process.env.JWT_SECRET}`)//try and decode the token using the token sent by the client and the secret string defined when the real token was created in authController.js
    }

    catch (error) {

        return res.status(401).json({ Unauthorized: true, message:"error" })

    }

    if (!decodedToken) return res.status(424).json({ Unauthorized: true, message:"failure" })

    else next()

}