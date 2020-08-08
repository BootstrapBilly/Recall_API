const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//*remove access rights expected passes 

describe("remove access rights - \x1b[32m expected passes \x1b[37m", () => {

    test.post("Removes access rights from a note with 2 people who have rights", "/remove_access", 200, "Rights removed",

    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.all_caps_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("Removes access rights from note with 1 person with rights, leaving no one who can access it(except the owner)", "/remove_access", 200, "Rights removed",

    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("Removes access rights from a process with 2 people who have rights", "/remove_access", 200, "Rights removed",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.long_id,
        note_or_process_id:testing_variables.testing_process_1,
        type:"process"
    })


    test.post("Removes access rights from note with 1 person with rights, leaving no one who can access it(except the owner)", "/remove_access", 200, "Rights removed",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_process_1,
        type:"process"
    })

    test.post("Removes rights on a note with no rights", "/remove_access",  200, "Rights removed",
    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_4,
        type:"note"
    })

    test.post("Removes rights on a process with no rights", "/remove_access",  200, "Rights removed",
    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_process_4,
        type:"process"
    })

    
})

//!remove access rights expected failures 

describe("remove access rights - \x1b[31m expected failures \x1b[37m", () => {

    test.post("Empty user id", "/remove_access", 400, "Bad request",

    {
        user_id: "",
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("Null user id", "/remove_access", 400, "Bad request",

    {
        user_id: null,
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("Null friend id", "/remove_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:null,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("empty friend id", "/remove_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:"",
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("null note id", "/remove_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:null,
        type:"note"
    })

    test.post("empty note id", "/remove_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:"",
        type:"note"
    })

    test.post("null type", "/remove_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:null
    })

    test.post("empty type", "/remove_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:""
    })

    test.post("invalid type", "/remove_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"invalid"
    })


    test.post("Tries to remove rights from a note owned by someone else", "/remove_access",  400, "Bad request",

    {
        user_id: testing_variables.all_caps_id,
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("Tries to remove rights from a process owned by someone else", "/remove_access",  400, "Bad request",

    {
        user_id: testing_variables.long_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_process_1,
        type:"process"
    })


    test.post("Note which does not exist", "/remove_access", 400, "Bad request",

    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.standard_id,
        note_or_process_id:"5eda5d88602e3e2bc0ac2458",
        type:"note"
    })

    test.post("Process which does not exist", "/remove_access",  400, "Bad request",
    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:"5eda5d88602e3e2bc0ac2458",
        type:"process"
    })

})
