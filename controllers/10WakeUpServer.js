//This endpoint is used to received a ping on initial start of the application, so it wakes up faster
exports.Wake_up = async (req, res, next) => {

    return res.status(200).json({ message: "Server is awake" })

}