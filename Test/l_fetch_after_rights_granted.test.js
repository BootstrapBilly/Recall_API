const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//*Notes

describe("Get all notes after rights granted - \x1b[32m expected passes \x1b[37m", () => {

    test.post("Usually has 22 notes, granted rights to 2 extra", "/get_notes", 200, "notes retrieved",

        {
            user_id: testing_variables.standard_id,
        },
        "notes", 24)//Expect res.body.notes to have a length of 24


    test.post("Usually has 0 notes, granted rights to 2 note", "/get_notes", 200, "notes retrieved",

        {
            user_id: testing_variables.all_caps_id,
        },
        "notes", 2)//Expect res.body.notes to have a length of 1



    //*Processes

    describe("Get all processes after rights granted- \x1b[32m expected passes \x1b[37m", () => {

        test.post("usually has has 2 processes, granted rights to 1 extra process", "/get_processes", 200, "processes retrieved",

            {
                user_id: testing_variables.short_id,
            },
            "processes", 3)//Expect res.body.processes to have a length of 3

        test.post("Usually has 0 processes, granted rights to 2 processes", "/get_processes", 200, "processes retrieved",

            {
                user_id: testing_variables.long_id,
            },
            "processes", 2)//Expect res.body.processes to have a length of 2


    })

    //*Searching
    describe("Searching after rights granted - \x1b[32m expected passes \x1b[37m", () => {

        test.post("User with no owned notes, only granted rights, searches for a note => '3'", "/search", 200, "search executed",
            {
                user_id: testing_variables.long_id,
                search_string: 3
            },
            "notes", 0,//Expect res.body.notes to have a length of 0
            "processes", 1)//Expect res.body.processes to have a length of 1


        test.post("User with many owned notes, and an additional 2 through access rights, searches using 'e'", "/search", 200, "search executed",
            {
                user_id: testing_variables.standard_id,
                search_string: "e"
            },
            "notes", 23,//Expect res.body.notes to have a length of 23
            "processes", 21)//Expect res.body.processes to have a length of 21


    })

})


