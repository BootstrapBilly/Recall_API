const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//* Get all processes expected passes 

describe("Get all processes - \x1b[32m expected passes \x1b[37m", () => {

    test.post("First user, has 21 processes", "/get_processes", 200, "processes retrieved",
        {
            user_id: testing_variables.user_id,
        },
        "processes", 21)//Expect res.body.processes to have a length of 21
    test.post("Second user, has has 2 processes", "/get_processes", 200, "processes retrieved",

        {
            user_id: testing_variables.second_user_id,
        },
        "processes", 2)//Expect res.body.processes to have a length of 3

    test.post("Third user, has 0 processes", "/get_processes", 200, "processes retrieved",
        { user_id: testing_variables.third_user_id, },
        "processes", 0)//Expect res.body.processes to have a length of 0


})