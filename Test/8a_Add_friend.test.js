// const test = require("../util/testing_functions")
// const testing_variables = require("../util/testing_variables")


// //!Friend request expected failures 

// describe("Send friend request - \x1b[31m expected failures \x1b[37m", () => {

//     test.post("User sends request with no username", "/friend", 424, "Please provide the username of the person you wish to add",

//     {
//         user_id: testing_variables.friend_testing_user,
//         username:null
//     })

//     test.post("User sends request with an empty username", "/friend", 424, "Please provide the username of the person you wish to add",

//     {
//         user_id: testing_variables.friend_testing_user,
//         username:""
//     })


// })

// //*Friend request expected passes 

// describe("Send friend request - \x1b[32m expected passes \x1b[37m", () => {

//     test.post("User sends their first friend request", "/friend", 200, "Request sent",

//     {
//         user_id: testing_variables.friend_testing_user,
//         username:"edge"
//     })

//     test.post("User sends their second friend request", "/friend", 200, "Request sent",

//     {
//         user_id: testing_variables.friend_testing_user,
//         username:"long"
//     })

//     test.post("User sends request to a username which doesn't exist", "/friend", 200, "We couldn't find that person",

//     {
//         user_id: testing_variables.friend_testing_user,
//         username:"no_existo"
//     })
    
//     test.post("User sends request to someone who already has a pending request", "/friend", 200, "You already have already sent a request to that person",

//     {
//         user_id: testing_variables.friend_testing_user,
//         username:"edge"
//     })
    
//     test.post("User sends friend request to someone who they have a pending request from", "/friend", 201, "Friend added",

//     {
//         user_id: testing_variables.edge_friend_testing_user,
//         username:"test 1"
//     })
    
//     test.post("User sends friend request to someone with numbers for a username", "/friend", 200, "Request sent",

//     {
//         user_id: testing_variables.edge_friend_testing_user,
//         username:"7897989889"
//     })
    
    
//     test.post("Generic test to populate the data for processing request testing ", "/friend", 200, "Request sent",

//     {
//         user_id: testing_variables.long_friend_testing_user,
//         username:"edge"
//     })
    
//     test.post("Generic test to populate the data for processing request testing ", "/friend", 200, "Request sent",

//     {
//         user_id: testing_variables.long_friend_testing_user,
//         username:"caps"
//     })
    
//     test.post("Generic test to populate the data for processing request testing ", "/friend", 200, "Request sent",

//     {
//         user_id: testing_variables.caps_friend_testing_user,
//         username:"edge"
//     })
    
// })
