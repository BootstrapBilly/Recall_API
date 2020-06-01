const test = require("../util/testing_functions")


//* Get password reset email Expected passes

describe("Get password reset email - \x1b[32m expected passes \x1b[37m", ()=> {

    test.post("Enter an email which doesn't exist -> 'No_existo@test.com'", "/password_reset", 200, "If your email address was found, we just sent you an email with instructions to reset your password", 
    {
        email: "No_existo@test.com",
    })

    test.post("Enter an email which does exist -> 'test@test.com'", "/password_reset", 200, "If your email address was found, we just sent you an email with instructions to reset your password", 
    {
        email: "test@test.com",
    })


})
