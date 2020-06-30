const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//*Notes

describe("Get all notes after rights removed - \x1b[32m expected passes \x1b[37m", () => {

    test.post("Access removed from 1 note, should return 23 notes", "/get_notes", 200, "notes retrieved",

        {
            user_id: testing_variables.standard_id,
        },
        "notes", 23)//Expect res.body.notes to have a length of 24


    test.post("Access to 1/2 notes removed, should return 1 note", "/get_notes", 200, "notes retrieved",

        {
            user_id: testing_variables.all_caps_id,
        },
        "notes", 1)//Expect res.body.notes to have a length of 0

    })

    //*Processes

    describe("Get all processes after rights removed- \x1b[32m expected passes \x1b[37m", () => {

        test.post("Access to additional process removed, should return 2", "/get_processes", 200, "processes retrieved",

            {
                user_id: testing_variables.short_id,
            },
            "processes", 2)//Expect res.body.processes to have a length of 2

        test.post("Usually has 0 processes, granted rights to 2 processes, but one access rights removed, should return 1", "/get_processes", 200, "processes retrieved",

            {
                user_id: testing_variables.long_id,
            },
            "processes", 1)//Expect res.body.processes to have a length of 1


    })

    //*Searching
    describe("Searching after rights removed - \x1b[32m expected passes \x1b[37m", () => {

        test.post("User with no notes or processes. only granted rights, 0 rights removed, searches with => '3', should return 1", "/search", 200, "search executed",
            {
                user_id: testing_variables.long_id,
                search_string: 3
            },
            "notes", 0,//Expect res.body.notes to have a length of 0
            "processes", 1)//Expect res.body.processes to have a length of 1


        test.post("User with many owned notes, and an additional 2 through access rights, 1 removed, other doesn't match, searches using 'e'", "/search", 200, "search executed",
            {
                user_id: testing_variables.standard_id,
                search_string: "e"
            },
            "notes", 19,//Expect res.body.notes to have a length of 22
            "processes", 18)//Expect res.body.processes to have a length of 21


    })



