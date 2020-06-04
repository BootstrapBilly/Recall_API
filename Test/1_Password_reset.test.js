// const test = require("../util/testing_functions")
// const testing_variables = require("../util/testing_variables")

//* Get password reset email Expected passes

// describe("Get password reset email - \x1b[32m expected passes \x1b[37m", ()=> {

//     test.post("Enter an email which doesn't exist -> 'No_existo@test.com'", "/password_reset", 200, "If your email address was found, we just sent you an email with instructions to reset your password", 
//     {
//         email: "No_existo@test.com",
//     })

//     test.post("Enter an email which does exist -> 'test@test.com'", "/password_reset", 200, "If your email address was found, we just sent you an email with instructions to reset your password", 
//     {
//         email: "billy.development.practise@gmail.com",
//     })


// })

// const reset_token = "cf8b44eafdd22a3c8f18644108143af49f72316a62c17f6fbff4355f73e023cc"//!get from the database, changes every time a reset email is generated
// const user_id = testing_variables.user_id//grab the testing user id from the util file (billy.development.practise@gmail.com)

// // //! Reset password expected failures

// describe("Handle password reset - \x1b[31m  expected failures \n\nTHIS WILL NOT WORK WITHOUT A HARDCODED RESET TOKEN AND USER_ID, GET THEM FROM THE USERS COLLECTION\n \x1b[37m", ()=> {

//     test.post("Enter a user id which does exist, but invalid reset token", "/change_password", 418, "You do not have permission to change this password", 
//     {
//         user_id:user_id,
//         token: "invalid token",
//         password: "Password68",
//         repeat_password: "Password68"
//     })

//     test.post("Password which is less than 8 characters -> 'Passwor'", "/change_password", 424, "Your password must be at least 8 characters.", 
//     {
//         user_id:user_id,
//         token: reset_token,
//         password: "Passwor",
//         repeat_password: "Passwor"
    
//     })

//     test.post("No password at all", "/change_password", 424, "Your password must be at least 8 characters.", 
//     {
//         user_id:user_id,
//         token: reset_token,
//         password: "",
//         repeat_password: ""
    
//     })

//     test.post("Password with no capitals -> 'password67'", "/change_password", 424, "Your password must contain at least 1 uppercase letter.", 
//     {
//         user_id:user_id,
//         token: reset_token,
//         password: "password67",
//         repeat_password: "password67"
    
//     })

//     test.post("Passwords which do not match", "/change_password", 424, "Your passwords must match.", 
//     {
//         user_id:user_id,
//         token: reset_token,
//         password: "password67",
//         repeat_password: "no matcho"
    
//     })

// })

// //* Reset password Expected passes

// describe("Handle password reset - \x1b[32m expected passes \x1b[37m", ()=> {

//     test.post("Valid user id, token and password", "/change_password", 201, "Your password has been updated", 
//     {
//         user_id:user_id,
//         token: reset_token,
//         password: "Password67",
//         repeat_password: "Password67"
    
//     })

// })
