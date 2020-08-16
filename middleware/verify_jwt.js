const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {

    if (!req.get("Authorization")) return res.status(400).json({ Unauthorized: true })

    const token = req.get("Authorization").split(" ")[1]//get the jwt from the header

    let decodedToken

    try {

        decodedToken = jwt.verify(token, `${process.env.JWT_SECRET}`)//try and decode the token using the token sent by the client and the secret string defined when the real token was created in authController.js
    }

    catch (error) {

        const decoded_token = jwt.decode(token, `${process.env.JWT_SECRET}`)

            if (Date.now() >= decoded_token.exp * 1000) {

                return res.status(400).json({ Unauthorized: true, message: "expired" })

            }

        return res.status(400).json({ Unauthorized: true, message: "error" })

    }

    if (!decodedToken) {

        return res.status(400).json({ Unauthorized: true, message: "failure" })

    }

    else next()

}