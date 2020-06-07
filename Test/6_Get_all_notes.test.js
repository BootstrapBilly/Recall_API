const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//! Get all notes expected failures 

describe("Get all notes - \x1b[31m expected failures \x1b[37m", () => {

    test.post("Null user id supplied", "/get_notes", 400, "Bad request",

    {
        user_id: null,
    })

    test.post("Empty user id supplied", "/get_notes", 400, "Bad request",

    {
        user_id: "",
    })


})

//* Get all notes expected passes 

describe("Get all notes - \x1b[32m expected passes \x1b[37m", () => {

    test.post("First user, has 22 notes", "/get_notes", 200, "notes retrieved",

    {
        user_id: testing_variables.standard_id,
    },
    "notes", 22)//Expect res.body.notes to have a length of 22

    test.post("Second user, has has 6 notes", "/get_notes", 200, "notes retrieved",

    {
        user_id: testing_variables.short_id,
    },
    "notes", 6)//Expect res.body.notes to have a length of 6

    test.post("Third user, has 0 notes", "/get_notes", 200, "notes retrieved",

    {
        user_id: testing_variables.all_caps_id,
    },
    "notes", 0)//Expect res.body.notes to have a length of 0

    
    test.post("Fake user id supplied", "/get_notes", 200, "notes retrieved",

    {
        user_id: "5eda2ca8a8148642c80e64f6",
    },
    "notes", 0)
    

})