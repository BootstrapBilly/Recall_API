// const test = require("../util/testing_functions")

// // //!Create account Expected failures

// describe("Create account - \x1b[31m expected failures \x1b[37m", ()=> {

//     test.post("Sign up with an account which is in use -> 'Test@test.com'", "/user", 424, "Sorry, that email in unavailable", 
//     {
//         email: "test@test.com",
//         password: "Password898",
//         repeat_password: "Password898"
    
//     })

//     test.post("Sign up with a password which is less than 8 characters -> 'Passwor'", "/user", 424, "Your password must be at least 8 characters.", 
//     {
//         email: "test@testa.com",
//         password: "Passwor",
//         repeat_password: "Passwor"
    
//     })

//     test.post("Sign up with no password at all", "/user", 424, "Your password must be at least 8 characters.", 
//     {
//         email: "test@testa.com",
//         password: "",
//         repeat_password: ""
    
//     })

//     test.post("Sign up with a password with no capitals -> 'password67'", "/user", 424, "Your password must contain at least 1 uppercase letter.", 
//     {
//         email: "test@testa.com",
//         password: "password67",
//         repeat_password: "password67"
    
//     })

//     test.post("Sign up with passwords which do not match", "/user", 424, "Your passwords must match.", 
//     {
//         email: "test@testa.com",
//         password: "password67",
//         repeat_password: "no matcho"
    
//     })

// })

// // //* Create account Expected passes

// describe("Create account - \x1b[32m expected passes \x1b[37m", ()=> {

//     test.post("Sign up with valid email, and capital at the beginning password -> 'Test1@test.com', 'Password67'", "/user", 201, "User created", 
//     {
//         email: "Test1@test.com",
//         password: "Password67",
//         repeat_password: "Password67"
    
//     })

//     test.post("Sign up with valid email, and edge case password -> 'edge@test.com', 'Passwo67'", "/user", 201, "User created", 
//     {
//         email: "edge@test.com",
//         password: "Passwo67",
//         repeat_password: "Passwo67"
    
//     })

//     test.post("Sign up with valid email, and ALL CAPS PASSWORD -> 'caps@test.com', 'PASSWORD'", "/user", 201, "User created", 
//     {
//         email: "caps@test.com",
//         password: "PASSWORD",
//         repeat_password: "PASSWORD"
    
//     })

//     test.post("Sign up with valid email, and mainly numbers password, and capital at the end -> 'numbers@test.com', '1274943D'", "/user", 201, "User created", 
//     {
//         email: "numbers@test.com",
//         password: "1274943D",
//         repeat_password: "1274943D"
    
//     })

//     test.post("Sign up with valid email, and very long password -> 'long@test.com', '1274943Ddsadq343sadddffdsfsdfsdfdsfsd'", "/user", 201, "User created", 
//     {
//         email: "long@test.com",
//         password: "1274943Ddsadq343sadddffdsfsdfsdfdsfsd",
//         repeat_password: "1274943Ddsadq343sadddffdsfsdfsdfdsfsd"
    
//     })

//     test.post("Sign up with valid email, and capital letter in the center -> 'centercap@test.com', 'passWord'", "/user", 201, "User created", 
//     {
//         email: "centercap@test.com",
//         password: "passWord",
//         repeat_password: "passWord"
    
//     })

// })

// //!Login Expected failures

// describe("Login - \x1b[31m expected failures \x1b[37m", ()=> {

//     test.post("Login with an email which doesn't exist in the db -> 'No_existo@test.com'", "/login", 424, "Sorry, that email does not exist in our database", 
//     {
//         email: "No_existo@test.com",
//         password: "Password898"
    
//     })

//     test.post("Login with no email at all", "/login", 424, "Sorry, that email does not exist in our database", 
//     {
//         email: "",
//         password: "Password898"
    
//     })

//     test.post("Login with a valid email, but incorrect password -> 'test@test.com'", "/login", 424, "Sorry, your password is incorrect", 
//     {
//         email: "test@test.com",
//         password: "Wrongpassword"
    
//     })

//     test.brute_force_attempt()

// })

// //* Login Expected passes

// describe("Login - \x1b[32m expected passes \x1b[37m", ()=> {

//     test.post("Login a valid email and password -> 'test@test.com', 'Password989'", "/login", 200, "Login successful", 
//     {
//         email: "test@test.com",
//         password: "Password898"
    
//     })

//     test.post("Login a valid email and edge case password -> 'edge@test.com', 'Passwo67'", "/login", 200, "Login successful", 
//     {
//         email: "edge@test.com",
//         password: "Passwo67"
    
//     })

//     test.post("Login a valid email and numbers password -> 'numbers@test.com', '1274943D'", "/login", 200, "Login successful", 
//     {
//         email: "numbers@test.com",
//         password: "1274943D"
    
//     })

//     test.post("Login a valid email and very long password -> 'long@test.com', '1274943Ddsadq343sadddffdsfsdfsdfdsfsd'", "/login", 200, "Login successful", 
//     {
//         email: "long@test.com",
//         password: "1274943Ddsadq343sadddffdsfsdfsdfdsfsd"
    
//     })

//     test.post("Login a valid email and password with capital in the center -> 'centercap@test.com', 'passWord'", "/login", 200, "Login successful", 
//     {
//         email: "centercap@test.com",
//         password: "passWord"
    
//     })

// })
