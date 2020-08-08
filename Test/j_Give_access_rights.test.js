const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//*Give access rights expected passes 

describe("Give access rights - \x1b[32m expected passes \x1b[37m", () => {


    test.post("Shares access to their first friend", "/share_access", 200, "Rights granted",

    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("Shares access to another friend friend", "/share_access", 200, "Rights granted",

    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.all_caps_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("Shares access to another note", "/share_access", 200, "Rights granted",

    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.all_caps_id,
        note_or_process_id:testing_variables.testing_note_4,
        type:"note"
    })

    test.post("Shares access rights to second note", "/share_access", 200, "Rights granted",

    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_2,
        type:"note"
    })

    test.post("Shares access rights to a process (first friend)", "/share_access", 200, "Rights granted",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_process_1,
        type:"process"
    })

    test.post("Shares access rights to a process (second friend)", "/share_access", 200, "Rights granted",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.long_id,
        note_or_process_id:testing_variables.testing_process_1,
        type:"process"
    })

    test.post("Shares access rights to a second process", "/share_access", 200, "Rights granted",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.long_id,
        note_or_process_id:testing_variables.testing_process_2,
        type:"process"
    })

    
})

//!Give access rights expected failures 

describe("Give access rights - \x1b[31m expected failures \x1b[37m", () => {

    test.post("Empty user id", "/share_access", 400, "Bad request",

    {
        user_id: "",
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("Null user id", "/share_access", 400, "Bad request",

    {
        user_id: null,
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("Null friend id", "/share_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:null,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("empty friend id", "/share_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:"",
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("null note id", "/share_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:null,
        type:"note"
    })

    test.post("empty note id", "/share_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:"",
        type:"note"
    })

    test.post("null type", "/share_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:null
    })

    test.post("empty type", "/share_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:""
    })

    test.post("invalid type", "/share_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"invalid"
    })

    test.post("Gives rights to someone who already has rights(note)", "/share_access", 400, "Bad request",

    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.standard_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("Gives rights to someone who already has rights(process)", "/share_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.long_id,
        note_or_process_id:testing_variables.testing_process_1,
        type:"process"
    })

    test.post("Tries to give rights to a note owned by someone else", "/share_access",  400, "Bad request",

    {
        user_id: testing_variables.all_caps_id,
        friend_id:testing_variables.long_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("Tries to give rights to a process owned by someone else", "/share_access",  400, "Bad request",

    {
        user_id: testing_variables.all_caps_id,
        friend_id:testing_variables.long_id,
        note_or_process_id:testing_variables.testing_process_1,
        type:"process"
    })

    test.post("Tries to give rights to someone who isn't their friend (note)", "/share_access", 400, "Bad request",

    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.numbers_id,
        note_or_process_id:testing_variables.testing_note_1,
        type:"note"
    })

    test.post("Tries to give rights to someone who isn't their friend (process)", "/share_access", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.numbers_id,
        note_or_process_id:testing_variables.testing_process_2,
        type:"process"
    })

    test.post("Note which does not exist", "/share_access", 400, "Bad request",

    {
        user_id: testing_variables.short_id,
        friend_id:testing_variables.standard_id,
        note_or_process_id:"5eda5d88602e3e2bc0ac2458",
        type:"note"
    })

    test.post("Process which does not exist", "/share_access",  400, "Bad request",
    {
        user_id: testing_variables.standard_id,
        friend_id:testing_variables.short_id,
        note_or_process_id:"5eda5d88602e3e2bc0ac2458",
        type:"process"
    })


})
