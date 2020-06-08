// const test = require("../util/testing_functions")
// const testing_variables = require("../util/testing_variables")

// //! delete a process Expected failures

// describe("delete a process - \x1b[31m expected failures \x1b[37m", () => {

//     test.delete("deletes a process which doesn't exist (title)", "/processes", 424, "We couldn't find that process",

//         {
//             user_id: testing_variables.standard_id,
//             title: "no existo",
//         })

//     test.delete("deletes a process which doesn't exist (userID)", "/processes", 424, "We couldn't find that process",

//         {
//             user_id: "324233244324234234",
//             title: testing_variables.title,
//         })

//     test.delete("Empty user id", "/processes", 400, "Bad request",

//         {
//             user_id: "",
//             title: "no existo",
//         })

//     test.delete("null user id", "/processes", 400, "Bad request",

//         {
//             user_id: null,
//             title: testing_variables.title,
//         })

//     test.delete("Empty title", "/processes", 400, "Bad request",

//         {
//             user_id: testing_variables.standard_id,
//             title: "",
//         })

//     test.delete("null title", "/processes", 400, "Bad request",

//         {
//             user_id: testing_variables.standard_id,
//             title: null,
//         })

// })

// //* delete a process Expected passes

// describe("delete a process - \x1b[32m expected passes \x1b[37m", () => {

//     test.delete("deletes a process with only title and body, null everything else", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title,
//         })

//     test.delete("deletes a process with a number for a title", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: 34543435435344534,
//         })

//     test.delete("deletes a process with a capital title, providing wrong case string", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.incorrect_case_cap_title,
//         })

//     test.delete("deletes a process with a number for a new_body", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title2,
//         })

//     test.delete("deletes a process with a number for a title and body", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: 43895734897589437,
//         })

//     test.delete("deletes a process with a short title", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: "b",
//         })

//     test.delete("deletes a process with a long title", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: "dsfbsdahjgfseaft764wqcv5c7692 69759 76sdg rfhsjf ghjdgfyusdgfjhsdfhjdsgf hjdksfjhds gfhsdgkfjhdsjhkfgjhksdafgjhsdgfjhsdgfhjsdgjhkfgkslfjhsdg fhjsdghfhjdsagfghjfgjksdhfgsdkfgsdgfjhksdgfkfgakjdfsgfdjhkgfk",
//         })

//     test.delete("deletes a process with a short new_body", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title3,
//         })

//     test.delete("deletes a process with a long new_body", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title4,
//         })

//     test.delete("deletes a process with a short new_subject", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title5,
//         })

//     test.delete("deletes a process with a long subject", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title6,
//         })

//     test.delete("deletes a process with a number subject", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title10,
//         })

//     test.delete("deletes a process with short syntax", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title8,
//         })

//     test.delete("deletes a process with long syntax", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title9,
//         })

//     test.delete("deletes a process with no search tags", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title11,
//         })

//     test.delete("deletes a process with one search tag", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title16,
//         })

//     test.delete("deletes a process with many search tags", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title13,
//         })

//     test.delete("deletes a process with many search tags including numbers", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title14,

//         })

//     test.delete("deletes a process with empty syntax", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title12,

//         })

//     test.delete("deletes a standard note", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title15,

//         })

//     test.delete("deletes another standard, but modified note", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title7,

//         })

//         test.delete("User 2 deletes a non-unique note with a title in use by another user", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.short_id,
//             title: testing_variables.title17,
//         })

//     test.delete("deletes a process with mixed number and string search tags", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title17,

//         })

//     test.delete("User 2 deletes a process with unique title", "/processes", 200, "process deleted successfully",

//         {
//             user_id: testing_variables.short_id,
//             title: testing_variables.unique_title,

//         })



// })