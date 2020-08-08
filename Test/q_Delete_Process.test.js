const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//! delete a process Expected failures

describe("delete a process - \x1b[31m expected failures \x1b[37m", () => {

    test.post("deletes a process which doesn't exist (title)", "/delete_process", 424, "We couldn't find that process",

        {
            user_id: testing_variables.standard_id,
            title: "no existo",
        })

    test.post("deletes a process which doesn't exist (userID)", "/delete_process", 424, "We couldn't find that process",

        {
            user_id: "5f2bebd1b6e696001792b7bb",
            title: testing_variables.title,
        })

    test.post("Empty user id", "/delete_process", 400, "Bad request",

        {
            user_id: "",
            title: "no existo",
        })

    test.post("null user id", "/delete_process", 400, "Bad request",

        {
            user_id: null,
            title: testing_variables.title,
        })

    test.post("Empty title", "/delete_process", 400, "Bad request",

        {
            user_id: testing_variables.standard_id,
            title: "",
        })

    test.post("null title", "/delete_process", 400, "Bad request",

        {
            user_id: testing_variables.standard_id,
            title: null,
        })

})

//* delete a process Expected passes

describe("delete a process - \x1b[32m expected passes \x1b[37m", () => {

    test.post("deletes a process with only title and body, null everything else", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title,
        })

    test.post("deletes a process with a number for a title", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: 34543435435344534,
        })

    test.post("deletes a process with a capital title, providing wrong case string", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.incorrect_case_cap_title,
        })

    test.post("deletes a process with a number for a new_body", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title2,
        })

    test.post("deletes a process with a number for a title and body", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: 43895734897589437,
        })

    test.post("deletes a process with a short title", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: "b",
        })

    test.post("deletes a process with a long title", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: "dsfbsdahjgfseaft764wqcv5c7692 69759 76sdg rfhsjf ghjdgfyusdgfjhsdfhjdsgf hjdksfjhds gfhsdgkfjhdsjhkfgjhksdafgjhsdgfjhsdgfhjsdgjhkfgkslfjhsdg fhjsdghfhjdsagfghjfgjksdhfgsdkfgsdgfjhksdgfkfgakjdfsgfdjhkgfk",
        })

    test.post("deletes a process with a short new_body", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title3,
        })

    test.post("deletes a process with a long new_body", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title4,
        })

    test.post("deletes a process with a short new_subject", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title5,
        })

    test.post("deletes a process with a long subject", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title6,
        })

    test.post("deletes a process with a number subject", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title10,
        })

    test.post("deletes a process with short syntax", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title8,
        })

    test.post("deletes a process with long syntax", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title9,
        })

    test.post("deletes a process with no search tags", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title11,
        })

    test.post("deletes a process with one search tag", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title16,
        })

    test.post("deletes a process with many search tags", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title13,
        })

    test.post("deletes a process with many search tags including numbers", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title14,

        })

    test.post("deletes a process with empty syntax", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title12,

        })

    test.post("deletes a standard note", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title15,

        })

    test.post("deletes another standard, but modified note", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title7,

        })

        test.post("User 2 deletes a non-unique note with a title in use by another user", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.title17,
        })

    test.post("deletes a process with mixed number and string search tags", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title17,

        })

    test.post("User 2 deletes a process with unique title", "/delete_process", 200, "process deleted successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.unique_title,

        })



})