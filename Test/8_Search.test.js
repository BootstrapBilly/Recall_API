const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//! Search query expected failures 

describe("Search query - \x1b[31m expected failures \x1b[37m", () => {

    test.post("Supplies no search string", "/search", 424, "A search string is required",
        {
            user_id: testing_variables.user_id,
            search_string: null
        },
        "notes", 0,//Expect res.body.notes to have a length of 0
        "processes", 0)//Expect res.body.processes to have a length of 0

    test.post("Supplies an empty string", "/search", 424, "A search string is required",
        {
            user_id: testing_variables.user_id,
            search_string: ""
        },
        "notes", 0,//Expect res.body.notes to have a length of 0
        "processes", 0)//Expect res.body.processes to have a length of 0

})
//* Search query expected passes 

describe("Search query - \x1b[32m expected passes \x1b[37m", () => {

    test.post("First user searches for something which doesn't get any results=> 'x_3fsdfXDHP'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: "x_3fsdfXDHP"
        },
        "notes", 0,//Expect res.body.notes to have a length of 0
        "processes", 0)//Expect res.body.processes to have a length of 0

    test.post("User with no notes or processes makes search for data owned by someone else => 'title16'", "/search", 200, "search executed",
        {
            user_id: testing_variables.third_user_id,
            search_string: testing_variables.title16
        },
        "notes", 0,//Expect res.body.notes to have a length of 0
        "processes", 0)//Expect res.body.processes to have a length of 0

    test.post("First user searches for a partial title(string) => 'title'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: testing_variables.title
        },
        "notes", 17,//Expect res.body.notes to have a length of 1
        "processes", 17)//Expect res.body.processes to have a length of 1

    test.post("First user searches for an exact title (string) => 'title16'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: testing_variables.title16
        },
        "notes", 1,//Expect res.body.notes to have a length of 1
        "processes", 1)//Expect res.body.processes to have a length of 1

    test.post("First user searches for a partial title (number) => '345'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: 345
        },
        "notes", 2,//Expect res.body.notes to have a length of 2
        "processes", 2)//Expect res.body.processes to have a length of 2

    test.post("First user searches for a exact title (number) => '43895734897589440'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: 43895734897589440
        },
        "notes", 1,//Expect res.body.notes to have a length of 2
        "processes", 1)//Expect res.body.processes to have a length of 2


    test.post("First user searches by partial syntax, a note only field => 'some new_sy'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: "some new_sy"
        },
        "notes", 2,//Expect res.body.notes to have a length of 2
        "processes", 0)//Expect res.body.processes to have a length of 0

    test.post("First user searches by exact syntax, a note only field => 'some new_syntax'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: "some new_syntax"
        },
        "notes", 2,//Expect res.body.notes to have a length of 2
        "processes", 0)//Expect res.body.processes to have a length of 0

    test.post("First user searches exact note/process with same title as a note/process as owned by second user => 'title17'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: testing_variables.title17
        },
        "notes", 2,//Expect res.body.notes to have a length of 2
        "processes", 2)//Expect res.body.processes to have a length of 0

    test.post("First user searches partial note/process with same title as a note/process as owned by second user => 'le17'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: "le17"
        },
        "notes", 2,//Expect res.body.notes to have a length of 2
        "processes", 2)//Expect res.body.processes to have a length of 0

    test.post("Second user searches by  exact unique search tag (number)=> 342", "/search", 200, "search executed",
        {
            user_id: testing_variables.second_user_id,
            search_string: 342
        },
        "notes", 1,//Expect res.body.notes to have a length of 2
        "processes", 1)//Expect res.body.processes to have a length of 0

    test.post("First user searches by shared search tag (String) => 'tag1'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: "tag1"
        },
        "notes", 7,//Expect res.body.notes to have a length of 2
        "processes", 7)//Expect res.body.processes to have a length of 0

    test.post("First user searches by partial shared search tag (String) => 'g1'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: "g1"
        },
        "notes", 7,//Expect res.body.notes to have a length of 2
        "processes", 7)//Expect res.body.processes to have a length of 0

    test.post("First user searches by partial subject (String) => 'gashjgg'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: "gashjgg"
        },
        "notes", 1,//Expect res.body.notes to have a length of 2
        "processes", 1)//Expect res.body.processes to have a length of 0

    test.post("First user searches by exact subject (String) => 'new_subject'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: "new_subject"
        },
        "notes", 3,//Expect res.body.notes to have a length of 2
        "processes", 3)//Expect res.body.processes to have a length of 0

    test.post("First user searches by partial subject (Number) => '74389'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: 74389
        },
        "notes", 1,//Expect res.body.notes to have a length of 2
        "processes", 1)//Expect res.body.processes to have a length of 0

    test.post("First user searches by exact subject (Number) => '245874389743'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: 245874389743
        },
        "notes", 1,//Expect res.body.notes to have a length of 2
        "processes", 1)//Expect res.body.processes to have a length of 0

    test.post("First user searches by partial body (String) => 'new_bo'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: "new_bo"
        },
        "notes", 7,//Expect res.body.notes to have a length of 2
        "processes", 7)//Expect res.body.processes to have a length of 0

    test.post("First user searches by exact body (String) => 'new_body'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: "new_body"
        },
        "notes", 7,//Expect res.body.notes to have a length of 2
        "processes", 7)//Expect res.body.processes to have a length of 0

    test.post("First user searches by partial body (number) => '353453435'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: 353453435
        },
        "notes", 1,//Expect res.body.notes to have a length of 2
        "processes", 1)//Expect res.body.processes to have a length of 0

    test.post("First user searches by exact body (number) => '34543534534354'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: 34543534534354
        },
        "notes", 1,//Expect res.body.notes to have a length of 2
        "processes", 1)//Expect res.body.processes to have a length of 0

    test.post("First user searches by partial, multi category string => 'e'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: "e"
        },
        "notes", 19,//Expect res.body.notes to have a length of 2
        "processes", 19)//Expect res.body.processes to have a length of 0

    test.post("First user searches by multi category string => 'e'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: "e"
        },
        "notes", 19,//Expect res.body.notes to have a length of 2
        "processes", 19)//Expect res.body.processes to have a length of 0

    test.post("First user searches by multi category number => '3'", "/search", 200, "search executed",
        {
            user_id: testing_variables.user_id,
            search_string: 3
        },
        "notes", 6,//Expect res.body.notes to have a length of 2
        "processes", 6)//Expect res.body.processes to have a length of 0





})