const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

// //!Delete user Expected failures

describe("Delete user - \x1b[31m expected failures \x1b[37m", () => {

    test.post("Tries to delete an account which doesn't exist", "/delete_user", 424, "No user found",
        {
            user_id: "5eda5d88602e3e2bc0ac2401",
            password: testing_variables.standard_password

        })

    test.post("Empty user id field", "/delete_user", 400, "Bad request",
        {
            user_id: "",
            password: testing_variables.standard_password

        })

    test.post("Null user id field", "/delete_user", 400, "Bad request",
        {
            user_id: null,
            password: testing_variables.standard_password

        })

    test.post("Tries to delete account with empty password", "/delete_user", 400, "Bad request",
        {
            user_id: testing_variables.standard_id,
            password: ""

        })

    test.post("Tries to delete account with null password", "/delete_user", 400, "Bad request",
        {
            user_id: testing_variables.standard_id,
            password: null

        })

    test.post("Tries to delete account with wrong password", "/delete_user", 424, "Sorry, your password is incorrect",
        {
            user_id: testing_variables.standard_id,
            password: "Wrongpassword"

        })


})

//* delete user Expected passes

describe("Delete user - \x1b[32m expected passes \x1b[37m", () => {

    test.post("Deletes account with correct, standard password", "/delete_user", 200, "Account deleted",
        {
            user_id: testing_variables.standard_id,
            password: testing_variables.standard_password
        },
    )

    test.post("Deletes account with correct, short password", "/delete_user", 200, "Account deleted",
        {
            user_id: testing_variables.short_id,
            password: testing_variables.short_password
        },
    )

    test.post("Deletes account with correct, long password", "/delete_user", 200, "Account deleted",
        {
            user_id: testing_variables.long_id,
            password: testing_variables.long_password
        },
    )

    test.post("Deletes account with correct, mainly numbers password", "/delete_user", 200, "Account deleted",
        {
            user_id: testing_variables.numbers_id,
            password: testing_variables.numbers_password
        },
    )

    test.post("Deletes account with correct, all_caps password", "/delete_user", 200, "Account deleted",
        {
            user_id: testing_variables.all_caps_id,
            password: testing_variables.all_caps_password
        },
    )

})
