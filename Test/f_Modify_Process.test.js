const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//! Modify a process Expected failures

describe("Modify a process - \x1b[31m expected failures \x1b[37m", () => {


    test.post("modifies a process and gives a null title", "/update_process", 400, "Bad request",

        {
            user_id: testing_variables.standard_id,
            title: null,
            new_title: "titleee",
            new_subject: "new_subject",
            new_body: "new_body",
            new_search_tags: ["tag1", "tag2", "tag3"],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process and gives an empty title", "/update_process", 400, "Bad request",

        {
            user_id: testing_variables.standard_id,
            title: "",
            new_title: "",
            new_subject: "new_subject",
            new_body: "new_body",
            new_search_tags: ["tag1", "tag2", "tag3"],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process and gives no new title", "/update_process", 424, "A collection must have a title and at least 1 note",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title,
            new_title: null,
            new_subject: "new_subject",
            new_body: "new_body",
            new_search_tags: ["tag1", "tag2", "tag3"],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process and gives an empty new title", "/update_process", 424, "A collection must have a title and at least 1 note",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title,
            new_title: "",
            new_subject: "new_subject",
            new_body: "new_body",
            new_search_tags: ["tag1", "tag2", "tag3"],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process gives a null user id", "/update_process", 400, "Bad request",

        {
            user_id:null,
            title: testing_variables.title,
            new_title: "",
            new_subject: "new_subject",
            new_body: "new_body",
            new_search_tags: ["tag1", "tag2", "tag3"],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process gives a null user id", "/update_process", 400, "Bad request",

        {
            user_id:null,
            title: testing_variables.title,
            new_title: "",
            new_subject: "new_subject",
            new_body: "new_body",
            new_search_tags: ["tag1", "tag2", "tag3"],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })


})

//* Modify a process Expected passes

describe("modify a note - \x1b[32m expected passes \x1b[37m", () => {

    test.post("modifies a process and gives only a title and notes, null or empty everything else", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title,
            new_title: testing_variables.title,
            new_subject: null,
            new_body: "",
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process and gives a number for a title", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: 4353453453454,
            new_title: 34543435435344534,
            new_subject: null,
            new_body: "new_body",
            new_search_tags: [],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process and gives a capital letter title", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.capital_title,
            new_title: testing_variables.capital_title2,
            new_subject: null,
            new_body: "new_body",
            new_search_tags: [],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process and gives an incorrect case capital title", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.incorrect_case_cap_title2,
            new_title: testing_variables.capital_title,
            new_subject: null,
            new_body: "new_body",
            new_search_tags: [],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process and gives a number for a new_body", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title2,
            new_title: testing_variables.title2,
            new_subject: null,
            new_body: 43534543534435,
            new_search_tags: [],
            new_notes: [testing_variables.note_id1],
            filter:"Collection"

        })

    test.post("modifies a process and gives a number for a title and body", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: 32543543543,
            new_title: 43895734897589437,
            new_subject: null,
            new_body: 34543534534354,
            new_search_tags: [],
            new_notes: [testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process and gives a short title", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: "a",
            new_title: "b",
            new_subject: null,
            new_body: "new_body",
            new_search_tags: [],
            new_notes: [testing_variables.note_id3],
            filter:"Collection"

        })

    test.post("modifies a process and gives a long title", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: "asjhadgashjdgasjhdgasjhdgasjhdgashjdgashjdgashjgggggggggggggggggggggggggggjdgbasjhgdahjsgdhjasgdhjasgdjhasgdhjasgdhjasgdhjasgahjdgasdjhgdhasjgdhjasgdhjasgdhjsasdklajdsalkdjsalkdjslkajdlksajdlkasjdlkasjdlksajdlksajdlksadhjkfrhrewhjfghsdgrfhgsdafghdsfgjhkdsgfhljsdgfjhsdgfjhdsgbfjhsdhhjfsd hgsdfjhdsgfjhkdsg khdjsgfksdfjhkdsgfhsdafkjhdsgfhjsdfhjgfhjgdsjhfghjfdsagfhkgfdhjskdfhjgfdhjkagfhjagfdhjkgfjhadsgfhkjsdgfahfdsgjhfgksfg hjfadg fhjkagfkjh fkjhdgfjhk sgfkhjgfjhkagfsdahjgf ksforyewfewou6324y 3ghj344 g34g 34hkj g4343gkh43g43hj 4hk43gk 3g4343784343876fvd",
            new_title: "dsfbsdahjgfseaft764wqcv5c7692 69759 76sdg rfhsjf ghjdgfyusdgfjhsdfhjdsgf hjdksfjhds gfhsdgkfjhdsjhkfgjhksdafgjhsdgfjhsdgfhjsdgjhkfgkslfjhsdg fhjsdghfhjdsagfghjfgjksdhfgsdkfgsdgfjhksdgfkfgakjdfsgfdjhkgfk",
            new_subject: null,
            new_body: "new_body",
            new_search_tags: [],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process and gives a short body", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title3,
            new_title: testing_variables.title3,
            new_subject: null,
            new_body: "b",
            new_search_tags: [],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process and gives a long body", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title4,
            new_title: testing_variables.title4,
            new_subject: null,
            new_body: "asjhadgashjdgasjhdgasjgdfgdfgdfgfdgdfgfdhdgasjhdgashjdgashjdgashjgggggggggggggggggggggggggggjdgbasjhgdahjsgdhjasgdhjasgdjhasgdhjasgdhjasgdhjasgahjdgasdjhgdhasjgdhjasgdhjasgdhjsasdklajdsalkdjsalkdjslkajdlksajdlkasjdlkasjdldfgdfgdfgdfbvtdfgh543645645654 564 654 654645654 65454@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@4343876fvd",
            new_search_tags: [],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process and gives a short subject", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title5,
            new_title: testing_variables.title5,
            new_subject: "b",
            new_body: "new_body",
            new_search_tags: [],
            new_notes: [testing_variables.note_id1, testing_variables.note_id4],
            filter:"Collection"

        })

    test.post("modifies a process and gives a long subject", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title2,
            new_title: testing_variables.title2,
            new_subject: "asjhadgashjdgasjhdgasjhdgsdfsdfsdfasjhdgashjdgashjdgashjgggggggggggggggggggggggggggjdgbasjhgdahjsgdhjasgdhjasgdjhasgdhjasgdhjasgdhjasgahjdgasdjhgdhasjgdhjasgdhjasgdhjsasdklagkh43g43hj 4hk43gk 3g4343784343876fvd",
            new_body: "new_body",
            new_search_tags: [],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process and gives a number subject", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title2,
            new_title: testing_variables.title2,
            new_subject: 245874389743,
            new_body: "new_body",
            new_search_tags: [],
            new_notes: [testing_variables.note_id4],
            filter:"Collection"

        })

        test.post("modifies a process two notes", "/update_process", 201, "process updated successfully",

            {
                user_id: testing_variables.standard_id,
                title: testing_variables.title8,
                new_title: testing_variables.title8,
                new_subject: "subject",
                new_body: "body",
                new_search_tags: [],
                new_notes: [testing_variables.note_id1, testing_variables.note_id2],
                filter:"Collection"

            })

    test.post("modifies a process many notes", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title9,
            new_title: testing_variables.title9,
            new_subject: "subject",
            new_body: "body",
            new_search_tags: [],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2, testing_variables.note_id3, testing_variables.note_id4],
            filter:"Collection"

        })

    test.post("modifies a process with duplicate notes", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title10,
            new_title: testing_variables.title10,
            new_subject: "subject",
            new_body: "body",
            new_search_tags: [],
            new_notes: [testing_variables.note_id1, testing_variables.note_id1],
            filter:"Collection"

        })

    test.post("modifies a process and gives no search tags", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title2,
            new_title: testing_variables.title2,
            new_subject: "new_subject",
            new_body: "new_body",
            new_search_tags: [],
            new_notes: [testing_variables.note_id1],
            filter:"Collection"

        })

    test.post("modifies a process and gives one search tag", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title5,
            new_title: testing_variables.title5,
            new_subject: "new_subject",
            new_body: "new_body",
            new_search_tags: ["tag1"],
            new_notes: [testing_variables.note_id1],
            filter:"Collection"

        })

    test.post("modifies a process and gives many search tags", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title5,
            new_title: testing_variables.title5,
            new_subject: "new_subject",
            new_body: "new_body",
            new_search_tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
            new_notes: [testing_variables.note_id1, testing_variables.note_id4],
            filter:"Collection"

        })

    test.post("modifies a process and gives many search tags including numbers", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title5,
            new_title: testing_variables.title5,
            new_subject: "new_subject",
            new_body: "new_body",
            new_search_tags: ["tag1", "tag2", 37643782, 32984903, "tag3", "tag4", "tag5"],
            new_notes: [testing_variables.note_id1, testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("modifies a process and gives duplicate search tags", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title5,
            new_title: testing_variables.title5,
            new_subject: "new_subject",
            new_body: "new_body",
            new_search_tags: ["tag1", "tag1"],
            new_notes: [testing_variables.note_id1],
            filter:"Collection"

        })

    test.post("modifies a process and gives duplicate number search tags", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title7,
            new_title: testing_variables.title7,
            new_subject: "new_subject",
            new_body: "new_body",
            new_search_tags: [435345, 435345],
            new_notes: [testing_variables.note_id1],
            filter:"Collection"
        })

    test.post("modifies a process and gives mixed duplicate search tags", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title7,
            new_title: testing_variables.title7,
            new_subject: "new_subject",
            new_body: "new_body",
            new_search_tags: [435345, 435345, "tag1"],
            new_notes: [testing_variables.note_id1],
            filter:"Collection"

        })

    test.post("User 2 modifies a process with a unique title", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.unique_title,
            new_title: testing_variables.unique_title,
            new_subject: "subject",
            new_body: "3242323",
            new_search_tags: [],
            new_notes: [testing_variables.note_id3],
            filter:"Collection"

        })

    test.post("User 2 changes a note with a unique title, to a title in use by another user", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.unique_title,
            new_title: testing_variables.title16,
            new_subject: "subject",
            new_body: "3242323",
            new_search_tags: [],
            new_notes: [testing_variables.note_id4],
            filter:"Collection"

        })

    test.post("User 2 changes a previous note back to a unique title", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.title16,
            new_title: testing_variables.unique_title,
            new_subject: "subject",
            new_body: "3242323",
            new_search_tags: [],
            new_notes: [testing_variables.note_id2],
            filter:"Collection"

        })

    test.post("User modifies a process with a non-unique title (in use by another user)", "/update_process", 201, "process updated successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.title17,
            new_title: testing_variables.title17,
            new_subject: "Subject",
            new_body: "body",
            new_search_tags: [342, 435345, "tag1", "tag1"],
            new_notes: [testing_variables.note_id4],
            filter:"Collection"

        })

})

//! Modify a process Expected failures

describe("Modify a process - \x1b[31m expected failures \x1b[37m", () => {

    test.post("modifies a process and gives title which already exists", "/update_process", 424, "You already have a process with that title, please choose another" ,

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title,
            new_title: testing_variables.title7,
            new_subject: "new_subject",
            new_body: "new_body",
            new_search_tags: ["tag1", "tag2", "tag3"],
            new_notes: [testing_variables.note_id4],
            filter:"Collection"

        })

})