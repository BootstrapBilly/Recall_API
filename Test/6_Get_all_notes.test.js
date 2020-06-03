// const test = require("../util/testing_functions")
// const testing_variables = require("../util/testing_variables")

// //* Get all notes expected passes 

// describe("Get all notes - \x1b[32m expected passes \x1b[37m", () => {

//     test.post("First user, has 21 notes", "/get_notes", 200, "notes retrieved",

//     {
//         user_id: testing_variables.user_id,
//     },
//     "notes", 21)//Expect res.body.notes to have a length of 21

//     test.post("Second user, has has 2 notes", "/get_notes", 200, "notes retrieved",

//     {
//         user_id: testing_variables.second_user_id,
//     },
//     "notes", 2)//Expect res.body.notes to have a length of 21

//     test.post("Third user, has 0 notes", "/get_notes", 200, "notes retrieved",

//     {
//         user_id: testing_variables.third_user_id,
//     },
//     "notes", 0)//Expect res.body.notes to have a length of 21
    

// })