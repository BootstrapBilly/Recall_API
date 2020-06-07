const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

// //* Create account Expected passes

describe("Create account - \x1b[32m expected passes \x1b[37m", ()=> {

    test.post("Standard email, password and username", "/user", 201, "User created", 
    {
        _id:testing_variables.standard_id,
        email: testing_variables.standard_email,
        password: testing_variables.standard_password,
        repeat_password: testing_variables.standard_password,
        username:testing_variables.standard_username

    })

    test.post("Short email, password and username", "/user", 201, "User created",
    {   
        _id:testing_variables.short_id,
        email: testing_variables.short_email,
        password: testing_variables.short_password,
        repeat_password: testing_variables.short_password,
        username:testing_variables.short_username,

    })

    test.post("Long email, password and max character username", "/user", 201, "User created", 
    {
        _id:testing_variables.long_id,
        email: testing_variables.long_email,
        password: testing_variables.long_password,
        repeat_password: testing_variables.long_password,
        username:testing_variables.long_username

    })

    test.post("Signs up with a standard email, but numbers (with 1 capital letter) password and numbers username", "/user", 201, "User created", 
    {
        _id:testing_variables.numbers_id,
        email: testing_variables.numbers_email,
        password: testing_variables.numbers_password,
        repeat_password: testing_variables.numbers_password,
        username:testing_variables.numbers_username

    })

    test.post("Signs up with all caps email, password and username", "/user", 201, "User created", 
    {
        _id:testing_variables.all_caps_id,
        email: testing_variables.all_caps_email,
        password: testing_variables.all_caps_password,
        repeat_password: testing_variables.all_caps_password,
        username:testing_variables.all_caps_username

    })


})

//   //!Create account Expected failures

  describe("Create account - \x1b[31m expected failures \x1b[37m", ()=> {

    test.post("Signs up with an email in use by someone else", "/user", 424, "Sorry, that email in unavailable", 
    {

        email: testing_variables.standard_email,
        password: testing_variables.standard_password,
        repeat_password: testing_variables.standard_password,
        username:testing_variables.standard_username

    })

    test.post("Signs up with a password which is less than 8 characters -> 'Passwor'", "/user", 424, "Your password must be at least 8 characters.", 
    {
        email: "test@testa.com",
        password: "Passwor",
        repeat_password: "Passwor",
        username:"pw wrong"

    })


    test.post("Sign up with a password with no capitals -> 'password67'", "/user", 424, "Your password must contain at least 1 uppercase letter.", 
    {
        email: "test@testa.com",
        password: "password67",
        repeat_password: "password67",
        username:"no caps"

    })

    test.post("Sign up with passwords which do not match", "/user", 424, "Your passwords must match.", 
    {
        email: "test@testa.com",
        password: "password67",
        repeat_password: "no matcho",
        username:"no match"

    })

    test.post("Signs up with a valid email, but username which is in use", "/user", 424, "Sorry, that username in unavailable", 
    {
        email: "non-used@test.com",
        password: "passWord",
        repeat_password: "passWord",
        username:testing_variables.standard_username

    })

    test.post("Email field missing ", "/user", 400, "Bad request", 
    {
        email: null,
        password: testing_variables.standard_password,
        repeat_password: testing_variables.standard_password,
        username:"no email"

    })

    test.post("Email field empty ", "/user", 400, "Bad request", 
    {
        email: "",
        password: testing_variables.standard_password,
        repeat_password: testing_variables.standard_password,
        username:"no email"

    })

    test.post("Password field missing", "/user", 400, "Bad request", 
    {
        email: "test@testa.com",
        password: null,
        repeat_password: testing_variables.standard_password,
        username:"no pw"

    })

    test.post("Password field empty", "/user", 400, "Bad request", 
    {
        email: "test@testa.com",
        password: "",
        repeat_password: testing_variables.standard_password,
        username:"no pw"

    })

    test.post("Repeat password field missing", "/user", 400, "Bad request", 
    {
        email: "test@testa.com",
        password: testing_variables.standard_password,
        repeat_password:null, 
        username:"no pw"

    })

    test.post("Repeat password field empty", "/user", 400, "Bad request", 
    {
        email: "test@testa.com",
        password: testing_variables.standard_password,
        repeat_password:"", 
        username:"no pw"

    })

    test.post("Username field missing", "/user", 400, "Bad request", 
    {
        email: "test@testa.com",
        password: testing_variables.standard_password,
        repeat_password:testing_variables.standard_password, 
        username:null

    })

    test.post("Username field empty", "/user", 400, "Bad request", 
    {
        email: "test@testa.com",
        password: testing_variables.standard_password,
        repeat_password:testing_variables.standard_password, 
        username:""

    })

})

// //!Login Expected failures

describe("Login - \x1b[31m expected failures \x1b[37m", ()=> {

    test.post("Logs with an email which doesn't exist", "/login", 424, "Sorry, that email does not exist in our database", 
    {
        email: "No_existo@test.com",
        password: testing_variables.standard_password

    })

    test.post("Logs in with a valid email, incorrect password", "/login", 424, "Sorry, your password is incorrect", 
    {
        email: testing_variables.standard_email,
        password: "Wrongpassword"

    })

    test.post("Logs with an empty email", "/login", 400, "Bad request", 
    {
        email: "",
        password: testing_variables.standard_password

    })

    test.post("Logs in with no email", "/login", 400, "Bad request", 
    {
        email: null,
        password: testing_variables.standard_password

    })

    test.post("Logs with an empty password", "/login", 400, "Bad request", 
    {
        email:testing_variables.standard_email,
        password: ""

    })

    test.post("Logs in with no password", "/login", 400, "Bad request", 
    {
        email:testing_variables.standard_email,
        password: null

    })

    // test.brute_force_attempt()

})

//* Login Expected passes

describe("Login - \x1b[32m expected passes \x1b[37m", ()=> {

    test.post_check_res_user_id("Logs in with a standard email and password", "/login", 200, "Login successful", testing_variables.standard_id,
    {
        email:testing_variables.standard_email,
        password: testing_variables.standard_password
    },
    )

    test.post_check_res_user_id("Logs in with a short email and password", "/login", 200, "Login successful", testing_variables.short_id,
    {
        email:testing_variables.short_email,
        password: testing_variables.short_password
    },
    )

    test.post_check_res_user_id("Logs in with a long email and password", "/login", 200, "Login successful", testing_variables.long_id,
    {
        email:testing_variables.long_email,
        password: testing_variables.long_password
    },
    )

    test.post_check_res_user_id("Logs in with a numbers email and password", "/login", 200, "Login successful", testing_variables.numbers_id,
    {
        email:testing_variables.numbers_email,
        password: testing_variables.numbers_password
    },
    )

    test.post_check_res_user_id("Logs in with a caps email and password", "/login", 200, "Login successful", testing_variables.all_caps_id,
    {
        email:testing_variables.all_caps_email,
        password: testing_variables.all_caps_password
    },
    )

})

