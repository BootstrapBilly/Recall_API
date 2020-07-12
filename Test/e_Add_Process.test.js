const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//! Add a process Expected failures

describe("Add a process - \x1b[31m expected failures \x1b[37m", () => {

    test.post("adds a process a null title", "/processes", 400, "Bad request",

        {
            user_id: testing_variables.standard_id,
            title: null,
            subject: "Subject",
            body: "body",
            search_tags: ["tag1", "tag2", "tag3"],
            selected_notes: [testing_variables.testing_note_1],

        })

    test.post("adds a process with an empty title", "/processes", 400, "Bad request",

        {
            user_id: testing_variables.standard_id,
            title: "",
            subject: "Subject",
            body: "body",
            search_tags: ["tag1", "tag2", "tag3"],
            selected_notes: [testing_variables.testing_note_1],

        })

    test.post("adds a process with no notes", "/processes", 400, "Bad request",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title,
            subject: "Subject",
            body: "body",
            search_tags: ["tag1", "tag2", "tag3"],
            selected_notes: [],

        })

    test.post("adds a process with null notes", "/processes", 400, "Bad request",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title,
            subject: "Subject",
            body: "body",
            search_tags: ["tag1", "tag2", "tag3"],
            selected_notes: null,

        })

    test.post("Adds a note with an empty user id", "/processes", 400, "Bad request",

        {
            user_id: "",
            title: testing_variables.title2,
            subject: "Subject",
            body: "sdfsdf",
            search_tags: ["tag1", "tag2", "tag3"],
            selected_notes: [testing_variables.testing_note_1],

        })

    test.post("Adds a note with a null user id", "/processes", 400, "Bad request",

        {
            user_id: null,
            title: testing_variables.title2,
            subject: "Subject",
            body: "fdsfs",
            search_tags: ["tag1", "tag2", "tag3"],
            selected_notes: [testing_variables.testing_note_1],

        })


})
//* Add a process Expected passes

describe("Add a process - \x1b[32m expected passes \x1b[37m", () => {

    test.post("adds a process with only a title and 2 notes, everything else null", "/processes", 201, "process added successfully",

        {
            _id:testing_variables.testing_process_1,
            user_id: testing_variables.standard_id,
            title: testing_variables.title,
            subject: null,
            body: "",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1, testing_variables.testing_note_2],

        })

    test.post("adds a process with a number for a title", "/processes", 201, "process added successfully",

        {
            _id:testing_variables.testing_process_2,
            user_id: testing_variables.standard_id,
            title: 4353453453454,
            subject: null,
            body: "body",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1],

        })

    test.post("adds a process with a capital title", "/processes", 201, "process added successfully",

        {
            _id:testing_variables.testing_process_3,
            user_id: testing_variables.standard_id,
            title: testing_variables.capital_title,
            subject: null,
            body: "body",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1],

        })

    test.post("adds a process with a number for a body", "/processes", 201, "process added successfully",

        {
            _id:testing_variables.testing_process_4,
            user_id: testing_variables.standard_id,
            title: testing_variables.title2,
            subject: null,
            body: 43534543534435,
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1],

        })

    test.post("adds a process with a number for a title and body", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: 32543543543,
            subject: null,
            body: 43534543534435,
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1],

        })

    test.post("adds a process with a short title", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: "a",
            subject: null,
            body: "body",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1],

        })

    test.post("adds a process with a long title", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: "asjhadgashjdgasjhdgasjhdgasjhdgashjdgashjdgashjgggggggggggggggggggggggggggjdgbasjhgdahjsgdhjasgdhjasgdjhasgdhjasgdhjasgdhjasgahjdgasdjhgdhasjgdhjasgdhjasgdhjsasdklajdsalkdjsalkdjslkajdlksajdlkasjdlkasjdlksajdlksajdlksadhjkfrhrewhjfghsdgrfhgsdafghdsfgjhkdsgfhljsdgfjhsdgfjhdsgbfjhsdhhjfsd hgsdfjhdsgfjhkdsg khdjsgfksdfjhkdsgfhsdafkjhdsgfhjsdfhjgfhjgdsjhfghjfdsagfhkgfdhjskdfhjgfdhjkagfhjagfdhjkgfjhadsgfhkjsdgfahfdsgjhfgksfg hjfadg fhjkagfkjh fkjhdgfjhk sgfkhjgfjhkagfsdahjgf ksforyewfewou6324y 3ghj344 g34g 34hkj g4343gkh43g43hj 4hk43gk 3g4343784343876fvd",
            subject: null,
            body: "body",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1],


        })

    test.post("adds a process with a short body", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title3,
            subject: null,
            body: "a",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1],


        })

    test.post("adds a process with a long body", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title4,
            subject: null,
            body: "asjhadgashjdgasjhdgasjhdgasjhdgashjdgashjdgashjgggggggggggggggggggggggggggjdgbasjhgdahjsgdhjasgdhjasgdjhasgdhjasgdhjasgdhjasgahjdgasdjhgdhasjgdhjasgdhjasgdhjsasdklajdsalkdjsalkdjslkajdlksajdlkasjdlkasjdldfgdfgdfgdfbvtdfgh543645645654 564 654 654645654 65454@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ksajdlksajdlksadhjkfrhrewhjfghsdgrfhgsdafghdsfgjhkdsgfhljsdgfjhsdgfjhdsgbfjhsdhhjfsd hgsdfjhdsgfjhkdsg khdjsgfksdfjhkdsgfhsdafkjhdsgfhjsdfhjgfhjgdsjhfghjfdsagfhkgfdhjskdfhjgfdhjkagfhjagfdhjkgfjhadsgfhkjsdgfahfdsgjhfgksfg hjfadg fhjkagfkjh fkjhdgfjhk sgfkhjgfjhkagfsdahjgf ksforyewfewou6324y 3ghj344 g34g 34hkj g4343gkh43g43hj 4hk43gk 3g4343784343876fvd",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1],


        })

    test.post("adds a process with a short subject", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title5,
            subject: "a",
            body: "body",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1],


        })

    test.post("adds a process with a long subject", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title6,
            subject: "asjhadgashjdgasjhdgasjhdgsdfsdfsdfasjhdgashjdgashjdgashjgggggggggggggggggggggggggggjdgbasjhgdahjsgdhjasgdhjasgdjhasgdhjasgdhjasgdhjasgahjdgasdjhgdhasjgdhjasgdhjasgdhjsasdklajdsalkdjsalkdjslkajdlksajdlkasjdlkasjdlksajdlksajdlksadhjkfrhrewhjfghsdgrfhgsdafghdsfgjhkdsgfhljsdgfjhsdgfjhdsgbfjhsdhhjfsd hgsdfjhdsgfjhkdsg khdjsgfksdfjhkdsgfhsdafkjhdsgfhjsdfhjgfhjgdsjhfghjfdsagfhkgfdhjskdfhjgfdhjkagfhjagfdhjkgfjhadsgfhkjsdgfahfdsgjhfgksfg hjfadg fhjkagfkjh fkjhdgfjhk sgfkhjgfjhkagfsdahjgf ksforyewfewou6324y 3ghj344 g34g 34hkj g4343gkh43g43hj 4hk43gk 3g4343784343876fvd",
            body: "body",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1],


        })

    test.post("adds a process with a number subject", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title7,
            subject: 245874389743,
            body: "body",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1],


        })

    test.post("adds a process two notes", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title8,
            subject: "subject",
            body: "body",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1, testing_variables.testing_note_2],

        })

    test.post("adds a process many notes", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title9,
            subject: "subject",
            body: "body",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1, testing_variables.testing_note_2, testing_variables.testing_note_3, testing_variables.testing_note_4],

        })

    test.post("adds a process with duplicate notes", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title10,
            subject: "subject",
            body: "body",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1, testing_variables.testing_note_1],

        })

    test.post("adds a process with no search tags", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title11,
            subject: "subject",
            body: "body",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1, testing_variables.testing_note_2],
        })

    test.post("adds a process with one search tag", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title12,
            subject: "subject",
            body: "body",
            search_tags: ["tag1"],
            selected_notes: [testing_variables.testing_note_1, testing_variables.testing_note_4],

        })

    test.post("adds a process with many search tags", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title13,
            subject: "subject",
            body: "body",
            search_tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
            selected_notes: [testing_variables.testing_note_1, testing_variables.testing_note_3],


        })

    test.post("adds a process with many search tags including numbers", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title14,
            subject: "subject",
            body: "body",
            search_tags: ["tag1", "tag2", 37643782, 32984903, "tag3", "tag4", "tag5"],
            selected_notes: [testing_variables.testing_note_1, testing_variables.testing_note_2],


        })

    test.post("adds a process with duplicate search tags", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title15,
            subject: "Subject",
            body: "body",
            search_tags: ["tag1", "tag1"],
            selected_notes: [testing_variables.testing_note_2, testing_variables.testing_note_4],


        })

    test.post("adds a process with duplicate number search tags", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title16,
            subject: "Subject",
            body: "body",
            search_tags: [435345, 435345],
            selected_notes: [testing_variables.testing_note_1, testing_variables.testing_note_4],


        })

    test.post("adds a process with mixed duplicate search tags", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title17,
            subject: "Subject",
            body: "body",
            search_tags: [435345, 435345, "tag1"],
            selected_notes: [testing_variables.testing_note_3, testing_variables.testing_note_2],


        })

    test.post("User 2 adds a process with a unique title", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.unique_title,
            subject: null,
            body: "a",
            search_tags: [],
            selected_notes: [testing_variables.testing_note_1, testing_variables.testing_note_3],


        })

    test.post("User 2 Adds a title in-use by another user", "/processes", 201, "process added successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.title17,
            subject: "Subject",
            body: "body",
            search_tags: [435345, 435345, "tag1"],
            selected_notes: [testing_variables.testing_note_1, testing_variables.testing_note_2],


        })

})

//! Add a process Expected failures

describe("Add a process - \x1b[31m expected failures \x1b[37m", () => {

    test.post("adds a process with title which already exists", "/processes", 424, "You already have a process with that title, please choose another",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title,
            subject: "Subject",
            body: "body",
            search_tags: ["tag1", "tag2", "tag3"],
            selected_notes: [testing_variables.testing_note_1, testing_variables.testing_note_2],

        })

})