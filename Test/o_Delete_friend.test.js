const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//*Remove friend expected passes 

describe("Remove friend - \x1b[32m expected passes \x1b[37m", () => {

    test.post("User with 2 friends deletes one, leaving 1 friend remaining", "/delete_friend", 200, "Friend removed",

    {
        user_id: testing_variables.short_id,
        user_to_delete_id:testing_variables.all_caps_id,

    })

    test.post("User with 1 friend deletes it, leaving none", "/delete_friend", 200, "Friend removed",

    {
        user_id: testing_variables.short_id,
        user_to_delete_id:testing_variables.standard_id,

    })

    test.post("Another User with 1 friend deletes it, leaving none", "/delete_friend", 200, "Friend removed",

    {
        user_id: testing_variables.standard_id,
        user_to_delete_id:testing_variables.long_id,

    })
    
})

//!Remove friend expected failures 

describe("Remove friend - \x1b[31m expected failures \x1b[37m", () => {

    test.post("Empty user id", "/delete_friend", 400, "Bad request",

    {
        user_id: "",
        user_to_delete_id:testing_variables.all_caps_id,

    })

    test.post("Null user id", "/delete_friend", 400, "Bad request",

    {
        user_id: null,
        user_to_delete_id:testing_variables.all_caps_id,

    })

    test.post("Empty friend id", "/delete_friend", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        user_to_delete_id:"",

    })

    test.post("Empty friend id", "/delete_friend", 400, "Bad request",

    {
        user_id: testing_variables.standard_id,
        user_to_delete_id:null,

    })


    
})
