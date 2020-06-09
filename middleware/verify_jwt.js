const jwt = require("jsonwebtoken");//import the jwt package to decode the incoming token

/*The JWT is generated when logging in, the sent back to the client
This function ensures that any subsequent incoming requests contain the generated token
If they do not, they are not coming from recall's client */

module.exports = (req, res, next) => {

    
    let decodedToken;//Define a variable to hold the decoded token

    try {

        const token = req.get("Authorization").split(" ")[1]; //Extract the token from the header //!req.get(Header) extrats data from the header
        //decode the token and store it inside the decoded token variable
        decodedToken = jwt.verify(token, "You'll-_!neverguessthis!")//First parameter is the token to decode and second parameter is the key set on token creation
    }

    catch(err) {//if something went wrong
        
        console.log(err)

        return res.status(500).json({message:"Could not verify token"})

    }

    //? Didnt fail technically, but token was not verified

    if(!decodedToken){

        return res.status(424).json({message:"Could not verify token"})
    }

    //* Passed all checks
    //if the token was verified, move onto the next middleware and allow access to the api
    next();
}