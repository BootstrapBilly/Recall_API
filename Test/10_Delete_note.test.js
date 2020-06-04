// const test = require("../util/testing_functions")
// const testing_variables = require("../util/testing_variables")

// //! Delete a note Expected failures

// describe("Delete a note - \x1b[31m expected failures \x1b[37m", () => {

//     test.delete("Deletes a note which doesn't exist (title)", "/notes", 424, "We couldn't find that note",

//         {
//             user_id: testing_variables.user_id,
//             title: "no existo",
//         })

//     test.delete("Deletes a note which doesn't exist (userID)", "/notes", 424, "We couldn't find that note",

//         {
//             user_id: "324233244324234234",
//             title: testing_variables.title,
//         })

// })

// //* Delete a note Expected passes

// describe("Delete a note - \x1b[32m expected passes \x1b[37m", () => {

//     test.delete("deletes a note with only title and body, null everything else", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title,
//         })

//     test.delete("deletes a note with a number for a title", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: 34543435435344534,
//         })

//     test.delete("deletes a note with a number for a new_body", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title2,
//         })

//     test.delete("deletes a note with a number for a title and body", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: 43895734897589437,
//         })

//     test.delete("deletes a note with a short title", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: "b",
//         })

//     test.delete("deletes a note with a long title", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: "dsfbsdahjgfseaft764wqcv5c7692 69759 76sdg rfhsjf ghjdgfyusdgfjhsdfhjdsgf hjdksfjhds gfhsdgkfjhdsjhkfgjhksdafgjhsdgfjhsdgfhjsdgjhkfgkslfjhsdg fhjsdghfhjdsagfghjfgjksdhfgsdkfgsdgfjhksdgfkfgakjdfsgfdjhkgfk",
//         })

//     test.delete("deletes a note with a short new_body", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title3,
//         })

//     test.delete("deletes a note with a long new_body", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title4,
//         })

//     test.delete("deletes a note with a short new_subject", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title5,
//         })

//     test.delete("deletes a note with a long subject", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title6,
//         })

//     test.delete("deletes a note with a number subject", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title10,
//         })

//     test.delete("deletes a note with short syntax", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title8,
//         })

//     test.delete("deletes a note with long syntax", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title9,
//         })

//     test.delete("deletes a note with no search tags", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title11,
//         })

//     test.delete("deletes a note with one search tag", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title16,
//         })

//     test.delete("deletes a note with many search tags", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title13,
//         })

//     test.delete("deletes a note with many search tags including numbers", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title14,

//         })

//     test.delete("deletes a note with empty syntax", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title12,

//         })

//     test.delete("deletes a standard note", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title15,

//         })

//     test.delete("deletes another standard, but modified note", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title7,

//         })

//         test.delete("User 2 deletes a non-unique note with a title in use by another user", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.second_user_id,
//             title: testing_variables.title17,
//         })

//     test.delete("deletes a note with mixed number and string search tags", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.user_id,
//             title: testing_variables.title17,

//         })

//     test.delete("User 2 deletes a note with unique title", "/notes", 200, "note deleted successfully",

//         {
//             user_id: testing_variables.second_user_id,
//             title: testing_variables.unique_title,

//         })



// })