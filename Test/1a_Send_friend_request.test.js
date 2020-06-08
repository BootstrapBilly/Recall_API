const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//!Friend request expected failures 

describe("Send friend request - \x1b[31m expected failures \x1b[37m", () => {

    test.post("User sends request with no username", "/friend", 400, "Bad request",

    {
        user_id: testing_variables.standard_username,
        username:null
    })

    test.post("User sends request with an empty username", "/friend", 400, "Bad request",
    {
        user_id: testing_variables.standard_username,
        username:""
    })

    test.post("User sends request with an null user id", "/friend", 400, "Bad request",

    {
        user_id: null,
        username:testing_variables.short_username
    })

    test.post("User sends request with an empty user id", "/friend", 400, "Bad request",

    {
        user_id: "",
        username:testing_variables.short_username
    })

    test.post("User sends request to a username which doesn't exist", "/friend", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        username:"no_existo"
    })

})

//*Friend request expected passes 

describe("Send friend request - \x1b[32m expected passes \x1b[37m", () => {

    test.post("User sends their first friend request(to a short username)", "/friend", 200, "Request sent",

    {
        user_id: testing_variables.standard_id,
        username:testing_variables.short_username
    })

    test.post("User sends their second friend request (to a long username)", "/friend", 200, "Request sent",

    {
        user_id: testing_variables.standard_id,
        username:testing_variables.long_username
    })
    
    test.post("User sends request to someone who already has a pending request", "/friend", 200, "You already have already sent a request to that person",

    {
        user_id: testing_variables.standard_id,
        username:testing_variables.short_username
    })
    
    test.post("User sends friend request to someone who they have a pending request from", "/friend", 201, "Friend added",

    {
        user_id: testing_variables.long_id,
        username:testing_variables.standard_username
    })
    
    test.post("User sends friend request to someone with numbers for a username", "/friend", 200, "Request sent",

    {
        user_id: testing_variables.long_id,
        username:testing_variables.numbers_username
    })
    
    
    test.post("Generic test to populate the data for processing request testing ", "/friend", 200, "Request sent",

    {
        user_id: testing_variables.all_caps_id,
        username:testing_variables.numbers_username
    })
    
    test.post("Generic test to populate the data for processing request testing ", "/friend", 200, "Request sent",

    {
        user_id: testing_variables.all_caps_id,
        username:testing_variables.long_username
    })
    
    test.post("Generic test to populate the data for processing request testing ", "/friend", 200, "Request sent",

    {
        user_id: testing_variables.all_caps_id,
        username:testing_variables.short_username
    })
    
})
