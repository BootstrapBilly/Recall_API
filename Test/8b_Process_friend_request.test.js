const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")


//*Process request expected passes 

describe("Process friend request - \x1b[32m expected passes \x1b[37m", () => {


    test.post("User accepts their first friend request", "/process_friend_request", 201, "Request accepted",

    {
        requestee_user_id:testing_variables.caps_friend_testing_user,
        requester_user_id: testing_variables.long_friend_testing_user,
        decision:true
        
    })

    test.post("User denies their first friend request", "/process_friend_request", 200, "Request denied",

    {
        requestee_user_id:testing_variables.numbers_friend_testing_user,
        requester_user_id: testing_variables.edge_friend_testing_user,
        decision:false
        
    })

    test.post("Long accepts a friend request from test 1", "/process_friend_request", 201, "Request accepted",

    {
        requestee_user_id:testing_variables.long_friend_testing_user,
        requester_user_id: testing_variables.friend_testing_user,
        decision:true
        
    })

    
    test.post("User with 1 friend denies their second friend request", "/process_friend_request", 200, "Request denied",

    {
        requestee_user_id:testing_variables.edge_friend_testing_user,
        requester_user_id: testing_variables.long_friend_testing_user,
        decision:false
        
    })
    
    test.post("User with 1 friend accepts their second friend request", "/process_friend_request", 201, "Request accepted",

    {
        requestee_user_id:testing_variables.edge_friend_testing_user,
        requester_user_id: testing_variables.caps_friend_testing_user,
        decision:true
        
    })

  
    
})
