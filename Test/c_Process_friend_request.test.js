const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")


//!Process request expected failure 

describe("Process friend request - \x1b[31m expected failures \x1b[37m", () => {

    test.post("Sends request with empty requestee id", "/process_friend_request", 400, "Bad request",

    {
        requestee_user_id:"",
        requester_user_id: testing_variables.standard_id,
        decision:true
        
    })

    test.post("Sends request with null requestee id", "/process_friend_request", 400, "Bad request",

    {
        requestee_user_id:null,
        requester_user_id: testing_variables.standard_id,
        decision:true
        
    })

    test.post("Sends request with an empty requester id", "/process_friend_request", 400, "Bad request",

    {
        requestee_user_id:testing_variables.standard_id,
        requester_user_id: "",
        decision:true
        
    })

    test.post("Sends request with a null requester id", "/process_friend_request", 400, "Bad request",

    {
        requestee_user_id:testing_variables.standard_id,
        requester_user_id: null,
        decision:true
        
    })

    test.post("No boolean desision (String)", "/process_friend_request", 400, "Bad request",

    {
        requestee_user_id:testing_variables.standard_id,
        requester_user_id: testing_variables.short_id,
        decision:"yes"
        
    })

    test.post("No boolean desision (number)", "/process_friend_request", 400, "Bad request",

    {
        requestee_user_id:testing_variables.standard_id,
        requester_user_id: testing_variables.short_id,
        decision:435435435435
        
    })

    test.post("No boolean desision (falsish)", "/process_friend_request", 400, "Bad request",

    {
        requestee_user_id:testing_variables.standard_id,
        requester_user_id: testing_variables.short_id,
        decision:null
        
    })


  


})

//*Process request expected passes 

describe("Process friend request - \x1b[32m expected passes \x1b[37m", () => {


    test.post("User accepts their first friend request", "/process_friend_request", 201, "Friend added",

    {
        requestee_user_id:testing_variables.short_id,
        requester_user_id: testing_variables.standard_id,
        decision:true
        
    })

    test.post("User denies their first friend request", "/process_friend_request", 200, "Request denied",

    {
        requestee_user_id:testing_variables.long_id,
        requester_user_id: testing_variables.all_caps_id,
        decision:false
        
    })

    test.post("Numbers accepts a request from all caps", "/process_friend_request", 201, "Friend added",

    {
        requestee_user_id:testing_variables.numbers_id,
        requester_user_id: testing_variables.all_caps_id,
        decision:true
        
    })

    
    test.post("User with 1 friend denies their second friend request", "/process_friend_request", 200, "Request denied",

    {
        requestee_user_id:testing_variables.numbers_id,
        requester_user_id: testing_variables.long_id,
        decision:false
        
    })
    
    test.post("User with 1 friend accepts their second friend request", "/process_friend_request", 201, "Friend added",

    {
        requestee_user_id:testing_variables.short_id,
        requester_user_id: testing_variables.all_caps_id,
        decision:true
        
    })
    
})
