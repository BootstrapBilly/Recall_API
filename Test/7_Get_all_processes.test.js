// const test = require("../util/testing_functions")
// const testing_variables = require("../util/testing_variables")

// //* Get all processes expected passes 

// // //! Get all notes expected failures 

// describe("Get all notes - \x1b[31m expected failures \x1b[37m", () => {

//     test.post("Null user id supplied", "/get_processes", 400, "Bad request",

//     {
//         user_id: null,
//     })

//     test.post("Empty user id supplied", "/get_processes", 400, "Bad request",

//     {
//         user_id: "",
//     })


// })

// describe("Get all processes - \x1b[32m expected passes \x1b[37m", () => {

//     test.post("First user, has 21 processes", "/get_processes", 200, "processes retrieved",
//         {
//             user_id: testing_variables.standard_id,
//         },
//         "processes", 22)//Expect res.body.processes to have a length of 21
//     test.post("Second user, has has 2 processes", "/get_processes", 200, "processes retrieved",

//         {
//             user_id: testing_variables.short_id,
//         },
//         "processes", 2)//Expect res.body.processes to have a length of 3

//     test.post("Third user, has 0 processes", "/get_processes", 200, "processes retrieved",
//         { user_id: testing_variables.all_caps_id, },
//         "processes", 0)//Expect res.body.processes to have a length of 0

//     test.post("User which doesn't exist/fake user id, has 0 processes", "/get_processes", 200, "processes retrieved",
//         { user_id: "5eda2ca8a8148642c80e64f6", },
//         "processes", 0)//Expect res.body.processes to have a length of 0


// })
