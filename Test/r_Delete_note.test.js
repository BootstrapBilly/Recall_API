const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//! Delete a note Expected failures

describe("Delete a note - \x1b[31m expected failures \x1b[37m", () => {

    test.post("Deletes a note which doesn't exist (title)", "/delete_note", 424, "We couldn't find that note",

        {
            user_id: testing_variables.standard_id,
            title: "no existo",
        })

    test.post("Deletes a note which doesn't exist (userID)", "/delete_note", 424, "We couldn't find that note",

        {
            user_id: "5f2bebd1b6e696001792b7bb",
            title: testing_variables.title,
        })

    test.post("Null user id", "/delete_note", 400, "Bad request",

        {
            user_id:null,
            title: testing_variables.title,
        })

    test.post("Empty user id", "/delete_note", 400, "Bad request",

        {
            user_id:"",
            title: testing_variables.title,
        })

    test.post("Null note title", "/delete_note", 400, "Bad request",

        {
            user_id: testing_variables.standard_id,
            title: null,
        })

    test.post("Empty note title", "/delete_note", 400, "Bad request",

        {
            user_id: testing_variables.standard_id,
            title: "",
        })

})

//* Delete a note Expected passes

describe("Delete a note - \x1b[32m expected passes \x1b[37m", () => {

    test.post("deletes a note with only title and body, null everything else", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title,
        })

    test.post("deletes a note with a number for a title", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: 34543435435344534,
        })

    test.post("deletes a note with a number for a new_body", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title2,
        })

    test.post("deletes a note with a number for a title and body", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: 43895734897589437,
        })

    test.post("deletes a note with a short title", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: "b",
        })

    test.post("deletes a note with a long title", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: "dsfbsdahjgfseaft764wqcv5c7692 69759 76sdg rfhsjf ghjdgfyusdgfjhsdfhjdsgf hjdksfjhds gfhsdgkfjhdsjhkfgjhksdafgjhsdgfjhsdgfhjsdgjhkfgkslfjhsdg fhjsdghfhjdsagfghjfgjksdhfgsdkfgsdgfjhksdgfkfgakjdfsgfdjhkgfk",
        })

    test.post("deletes a note with a short new_body", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title3,
        })

    test.post("deletes a note with a long new_body", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title4,
        })

    test.post("deletes a note with a short new_subject", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title5,
        })

    test.post("deletes a note with a long subject", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title6,
        })

    test.post("deletes a note with a number subject", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title10,
        })

    test.post("deletes a note with short syntax", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title8,
        })

    test.post("deletes a note with long syntax", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title9,
        })

    test.post("deletes a note with no search tags", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title11,
        })

    test.post("deletes a note with one search tag", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title16,
        })

    test.post("deletes a note with many search tags", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title13,
        })

    test.post("deletes a note with many search tags including numbers", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title14,

        })

    test.post("deletes a note with empty syntax", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title12,

        })

    test.post("deletes a standard note", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title15,

        })

    test.post("deletes another standard, but modified note", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title7,

        })

        test.post("User 2 deletes a non-unique note with a title in use by another user", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.title17,
        })

    test.post("deletes a note with mixed number and string search tags", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title17,

        })

    test.post("User 2 deletes a note with unique title", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.unique_title,

        })
        
    test.post("Delete note with hard coded id", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.title5,

        })
        
    test.post("Delete note with hard coded id 2", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.title6,

        })
        
    test.post("Delete note with hard coded id 3", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.title8,

        })
        
    test.post("Delete note with hard coded id 4", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.title9,

        })
        
    test.post("Delete note with capital title, giving incorrect case", "/delete_note", 200, "note deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.incorrect_case_cap_title,

        })

   



})