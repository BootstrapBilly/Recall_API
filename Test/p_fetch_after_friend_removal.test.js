const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//*Notes

describe("Get all notes after deleted by friend - \x1b[32m expected passes \x1b[37m", () => {

    test.post("Friend removed - access to 1 note removed, should return 0", "/get_notes", 200, "notes retrieved",

        {
            user_id: testing_variables.all_caps_id,
        },
        "notes", 0)//Expect res.body.notes to have a length of 0

    })



    //*Processes

    describe("Get all processes after deleted by friend- \x1b[32m expected passes \x1b[37m", () => {

        test.post("Loses friend which granted access rights to 1 process should return 0", "/get_processes", 200, "processes retrieved",

            {
                user_id: testing_variables.long_id,
            },
            "processes", 0)//Expect res.body.processes to have a length of 0


    })

    //*Searching
    describe("Searching after deleted by friend - \x1b[32m expected passes \x1b[37m", () => {

        test.post("0 notes and processes, lost friend which granted access rights, should return 0", "/search", 200, "search executed",
            {
                user_id: testing_variables.long_id,
                search_string: 3
            },
            "notes", 0,//Expect res.body.notes to have a length of 0
            "processes", 0)//Expect res.body.processes to have a length of 1


        test.post("User with many owned notes, lost friend who granted access to 1 additional note ",   "/search", 200, "search executed",
            {
                user_id: testing_variables.standard_id,
                search_string: "e"
            },
            "notes", 18,//Expect res.body.notes to have a length of 21
            "processes", 18)//Expect res.body.processes to have a length of 21


    })



