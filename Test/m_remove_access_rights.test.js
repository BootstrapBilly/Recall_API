const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//*remove access rights expected passes 

describe("remove access rights - \x1b[32m expected passes \x1b[37m", () => {

    test.delete("Removes access rights from a note with 2 people who have rights", "/access", 200, "Rights removed",

    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.all_caps_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.delete("Removes access rights from note with 1 person with rights, leaving no one who can access it(except the owner)", "/access", 200, "Rights removed",

    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.delete("Removes access rights from a process with 2 people who have rights", "/access", 200, "Rights removed",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.long_id,
        note_or_process_id:testing_variables.testing_process_1,
        type:"process"
    })


    test.delete("Removes access rights from note with 1 person with rights, leaving no one who can access it(except the owner)", "/access", 200, "Rights removed",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_process_1,
        type:"process"
    })

    test.delete("Removes rights on a note with no rights", "/access",  200, "Rights removed",
    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_4,
        type:"note"
    })

    test.delete("Removes rights on a process with no rights", "/access",  200, "Rights removed",
    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_process_4,
        type:"process"
    })

    
})

//!remove access rights expected failures 

describe("remove access rights - \x1b[31m expected failures \x1b[37m", () => {

    test.delete("Empty user id", "/access", 400, "Bad request",

    {
        user_id: "",
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.delete("Null user id", "/access", 400, "Bad request",

    {
        user_id: null,
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.delete("Null friend id", "/access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:null,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.delete("empty friend id", "/access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:"",
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.delete("null note id", "/access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:null,
        type:"note"
    })

    test.delete("empty note id", "/access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:"",
        type:"note"
    })

    test.delete("null type", "/access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:null
    })

    test.delete("empty type", "/access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:""
    })

    test.delete("invalid type", "/access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"invalid"
    })


    test.delete("Tries to remove rights from a note owned by someone else", "/access",  400, "Bad request",

    {
        user_id: testing_variables.all_caps_id,
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.delete("Tries to remove rights from a process owned by someone else", "/access",  400, "Bad request",

    {
        user_id: testing_variables.long_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_process_1,
        type:"process"
    })


    test.delete("Note which does not exist", "/access", 400, "Bad request",

    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.standard_id,
        note_or_process_id:"5eda5d88602e3e2bc0ac2458",
        type:"note"
    })

    test.delete("Process which does not exist", "/access",  400, "Bad request",
    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:"5eda5d88602e3e2bc0ac2458",
        type:"process"
    })

})
