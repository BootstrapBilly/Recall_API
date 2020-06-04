const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//*Friend request expected passes 

describe("Send friend request - \x1b[32m expected passes \x1b[37m", () => {

    test.post("User sends their first friend request", "/friend", 200, "Request sent",

    {
        user_id: testing_variables.friend_testing_user,
        friend_username:"edge"
    })

    test.post("User sends their second friend request", "/friend", 200, "Request sent",

    {
        user_id: testing_variables.friend_testing_user,
        friend_username:"long"
    })
    
})

//!Friend request expected failures 

describe("Send friend request - \x1b[31m expected failures \x1b[37m", () => {

    test.post("User sends request to someone who already has a pending request", "/friend", 200, "You already have already sent a request to that person",

    {
        user_id: testing_variables.friend_testing_user,
        friend_username:"edge"
    })

})