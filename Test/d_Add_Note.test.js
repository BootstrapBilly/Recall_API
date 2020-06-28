const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//! Add a note Expected failures

describe("Add a note - \x1b[31m expected failures \x1b[37m", () => {

    test.post("Adds a note with no title", "/notes", 424, "A note must have a title and body",

        {
            user_id: testing_variables.standard_id,
            title: null,
            subject: "Subject",
            body: "body",
            search_tags: ["tag1", "tag2", "tag3"].join(" "),
            syntax: "some syntax",

        })

    test.post("Adds a note with an empty title", "/notes", 424, "A note must have a title and body",

        {
            user_id: testing_variables.standard_id,
            title: "",
            subject: "Subject",
            body: "body",
            search_tags: ["tag1", "tag2", "tag3"].join(" "),
            syntax: "some syntax",

        })

    test.post("Adds a note with no body", "/notes", 424, "A note must have a title and body",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title,
            subject: "Subject",
            body: null,
            search_tags: ["tag1", "tag2", "tag3"].join(" "),
            syntax: "some syntax",

        })

    test.post("Adds a note with an empty body", "/notes", 424, "A note must have a title and body",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title2,
            subject: "Subject",
            body: "",
            search_tags: ["tag1", "tag2", "tag3"].join(" "),
            syntax: "some syntax",

        })

    test.post("Adds a note with an empty user id", "/notes", 400, "Bad request",

        {
            user_id: "",
            title: testing_variables.title2,
            subject: "Subject",
            body: "sdfsdf",
            search_tags: ["tag1", "tag2", "tag3"].join(" "),
            syntax: "some syntax",

        })

    test.post("Adds a note with a null user id", "/notes", 400, "Bad request",

        {
            user_id: null,
            title: testing_variables.title2,
            subject: "Subject",
            body: "fdsfs",
            search_tags: ["tag1", "tag2", "tag3"].join(" "),
            syntax: "some syntax",

        })

})

//* Add a note Expected passes

describe("Add a note - \x1b[32m expected passes \x1b[37m", () => {

    test.post("Adds a note with only a title and body", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title,
            subject: null,
            body: "body",
            search_tags: [].join(" "),
            syntax: "",

        })

    test.post("Adds a note with a number for a title", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: 4353453453454,
            subject: null,
            body: "body",
            search_tags: [].join(" "),
            syntax: "",

        })

    test.post("Adds a note with a number for a body", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title2,
            subject: null,
            body: 43534543534435,
            search_tags: [].join(" "),
            syntax: "",

        })

    test.post("Adds a note with a number for a title and body", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: 32543543543,
            subject: null,
            body: 43534543534435,
            search_tags: [].join(" "),
            syntax: "",

        })

    test.post("Adds a note with a short title", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: "a",
            subject: null,
            body: "body",
            search_tags: [].join(" "),
            syntax: "",

        })

    test.post("Adds a note with a capital title", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.capital_title,
            subject: null,
            body: "body",
            search_tags: [].join(" "),
            syntax: "",

        })

    test.post("Adds a note with a long title", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: "asjhadgashjdgasjhdgasjhdgasjhdgashjdgashjdgashjgggggggggggggggggggggggggggjdgbasjhgdahjsgdhjasgdhjasgdjhasgdhjasgdhjasgdhjasgahjdgasdjhgdhasjgdhjasgdhjasgdhjsasdklajdsalkdjsalkdjslkajdlksajdlkasjdlkasjdlksajdlksajdlksadhjkfrhrewhjfghsdgrfhgsdafghdsfgjhkdsgfhljsdgfjhsdgfjhdsgbfjhsdhhjfsd hgsdfjhdsgfjhkdsg khdjsgfksdfjhkdsgfhsdafkjhdsgfhjsdfhjgfhjgdsjhfghjfdsagfhkgfdhjskdfhjgfdhjkagfhjagfdhjkgfjhadsgfhkjsdgfahfdsgjhfgksfg hjfadg fhjkagfkjh fkjhdgfjhk sgfkhjgfjhkagfsdahjgf ksforyewfewou6324y 3ghj344 g34g 34hkj g4343gkh43g43hj 4hk43gk 3g4343784343876fvd",
            subject: null,
            body: "body",
            search_tags: [].join(" "),
            syntax: "",

        })

    test.post("Adds a note with a short body", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title3,
            subject: null,
            body: "a",
            search_tags: [].join(" "),
            syntax: "",

        })

    test.post("Adds a note with a long body", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title4,
            subject: null,
            body: "asjhadgashjdgasjhdgasjhdgasjhdgashjdgashjdgashjgggggggggggggggggggggggggggjdgbasjhgdahjsgdhjasgdhjasgdjhasgdhjasgdhjasgdhjasgahjdgasdjhgdhasjgdhjasgdhjasgdhjsasdklajdsalkdjsalkdjslkajdlksajdlkasjdlkasjdldfgdfgdfgdfbvtdfgh543645645654 564 654 654645654 65454@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ksajdlksajdlksadhjkfrhrewhjfghsdgrfhgsdafghdsfgjhkdsgfhljsdgfjhsdgfjhdsgbfjhsdhhjfsd hgsdfjhdsgfjhkdsg khdjsgfksdfjhkdsgfhsdafkjhdsgfhjsdfhjgfhjgdsjhfghjfdsagfhkgfdhjskdfhjgfdhjkagfhjagfdhjkgfjhadsgfhkjsdgfahfdsgjhfgksfg hjfadg fhjkagfkjh fkjhdgfjhk sgfkhjgfjhkagfsdahjgf ksforyewfewou6324y 3ghj344 g34g 34hkj g4343gkh43g43hj 4hk43gk 3g4343784343876fvd",
            search_tags: [].join(" "),
            syntax: "",

        })

    test.post("Adds a note with a short subject", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title5,
            subject: "a",
            body: "body",
            search_tags: [].join(" "),
            syntax: "",

        })

    test.post("Adds a note with a long subject", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title6,
            subject: "asjhadgashjdgasjhdgasjhdgsdfsdfsdfasjhdgashjdgashjdgashjgggggggggggggggggggggggggggjdgbasjhgdahjsgdhjasgdhjasgdjhasgdhjasgdhjasgdhjasgahjdgasdjhgdhasjgdhjasgdhjasgdhjsasdklajdsalkdjsalkdjslkajdlksajdlkasjdlkasjdlksajdlksajdlksadhjkfrhrewhjfghsdgrfhgsdafghdsfgjhkdsgfhljsdgfjhsdgfjhdsgbfjhsdhhjfsd hgsdfjhdsgfjhkdsg khdjsgfksdfjhkdsgfhsdafkjhdsgfhjsdfhjgfhjgdsjhfghjfdsagfhkgfdhjskdfhjgfdhjkagfhjagfdhjkgfjhadsgfhkjsdgfahfdsgjhfgksfg hjfadg fhjkagfkjh fkjhdgfjhk sgfkhjgfjhkagfsdahjgf ksforyewfewou6324y 3ghj344 g34g 34hkj g4343gkh43g43hj 4hk43gk 3g4343784343876fvd",
            body: "body",
            search_tags: [].join(" "),
            syntax: "",

        })

    test.post("Adds a note with a number subject", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title7,
            subject: 245874389743,
            body: "body",
            search_tags: [].join(" "),
            syntax: "",

        })

    test.post("Adds a note with short syntax", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title8,
            subject: "subject",
            body: "body",
            search_tags: [].join(" "),
            syntax: "a",

        })

    test.post("Adds a note with long syntax", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title9,
            subject: "subject",
            body: "body",
            search_tags: [].join(" "),
            syntax: `const email = req.body.email //extract the email
        const password = req.body.password//password
        const repeat_password = req.body.repeat_password//and second password from the response
    
        const email_in_use = await User.findOne({email_address:email})//Does the email already exist in the database?
    
        if(email_in_use) return res.status(424).json({message: "Sorry, that email in unavailable"})//if so, abort and inform the user
    
        const result = validate_password.validate(password, repeat_password)//Scan the password, checking that it conforms
    
        if(result !== "okay") return res.status(424).json({message: result})//if the password is not valid, send a response with the reason why
    
        //*All password checks passed, hash the password
        const hashed_password = await bcrypt.hash(password, 12)//bcrypt.hash encrypts the user password, 12 is the salt
    
        if(!hashed_password) return res.status(500).json({message:"Sorry, something went wrong with our server"})//if the password was not hashed properly
    
        //*Password hashed correctly, create a new user
        const user = new User({//create a new user object from the schema
    
            email_address:email,//set their email
            password:hashed_password, //set the hashed_password NOT THE PLAIN TEXT PASSWORD
            friends:[],//initialize friends as an empty array
            friend_requests:[],//initialize the friends requests as an empty array 
            reset_token:null,//reset token for resetting passwords
            token_expiration:null,//token expiration date
    
        })
    
        const user_saved = await user.save()//save the new user
    
        //if they saved correctly, send a 201 success response          If there was an error, send a 500 server error
        user_saved ? res.status(201).json({message:"User created"}) : res.status(500).json({message:"Sorry, something went wrong with our server"})
    `,

        })

    test.post("Adds a note with number syntax", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title10,
            subject: 245874389743,
            body: "body",
            search_tags: [].join(" "),
            syntax: 38927432897489324783274892374,

        })

    test.post("Adds a note no search tags", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title11,
            subject: "subject",
            body: "body",
            search_tags: [].join(" "),
            syntax: "",

        })

    test.post("Adds a note with one search tag", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title12,
            subject: "subject",
            body: "body",
            search_tags: ["tag1"].join(" "),
            syntax: ``,

        })

    test.post("Adds a note with many search tags", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title13,
            subject: "subject",
            body: "body",
            search_tags: ["tag1", "tag2", "tag3", "tag4", "tag5"].join(" "),
            syntax: ``,

        })

    test.post("Adds a note with many search tags including numbers", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title14,
            subject: "subject",
            body: "body",
            search_tags: ["tag1", "tag2", 37643782, 32984903, "tag3", "tag4", "tag5"].join(" "),
            syntax: ``,

        })

    test.post("Adds a note with duplicate search tags", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title15,
            subject: "Subject",
            body: "body",
            search_tags: ["tag1", "tag1"].join(" "),
            syntax: "some syntax",

        })

    test.post("Adds a note with duplicate number search tags", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title16,
            subject: "Subject",
            body: "body",
            search_tags: [435345, 435345].join(" "),
            syntax: "some syntax",

        })

    test.post("Adds a note with mixed duplicate search tags", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title17,
            subject: "Subject",
            body: "body",
            search_tags: [435345, 435345, "tag1"].join(" "),
            syntax: "some syntax",

        })

    test.post("User 2 adds a note with a unique title", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.unique_title,
            subject: null,
            body: "a",
            search_tags: [].join(" "),
            syntax: "",

        })

    test.post("User 2 Adds a title in-use by another user", "/notes", 201, "Note added successfully",

        {
            user_id: testing_variables.short_id,
            title: testing_variables.title17,
            subject: "Subject",
            body: "body",
            search_tags: [435345, 435345, "tag1"].join(" "),
            syntax: "some syntax",

        })

    test.post("Hard coded note id for adding a note 1", "/notes", 201, "Note added successfully",

        {
            _id:testing_variables.testing_note_1,
            user_id: testing_variables.short_id,
            title: testing_variables.title5,
            subject: "Subject",
            body: "body",
            search_tags: [435345, 435345, "tag1"].join(" "),
            syntax: "some syntax",
        })

    test.post("Hard coded note id for adding a note 2", "/notes", 201, "Note added successfully",

        {
            _id:testing_variables.testing_note_2,
            user_id: testing_variables.short_id,
            title: testing_variables.title6,
            subject: "Subject",
            body: "body",
            search_tags: [435345, 435345, "tag1"].join(" "),
            syntax: "some syntax",

        })

    test.post("Hard coded note id for adding a note 3", "/notes", 201, "Note added successfully",

        {
            _id:testing_variables.testing_note_3,
            user_id: testing_variables.short_id,
            title: testing_variables.title8,
            subject: "Subject",
            body: "body",
            search_tags: [435345, 435345, "tag1"].join(" "),
            syntax: "some syntax",

        })

    test.post("Hard coded note id for adding a note 4", "/notes", 201, "Note added successfully",

        {
            _id:testing_variables.testing_note_4,
            user_id: testing_variables.short_id,
            title: testing_variables.title9,
            subject: "Subject",
            body: "body",
            search_tags: [435345, 435345, "tag1"].join(" "),
            syntax: "some syntax",

        })

})

//! Add a note Expected failures

describe("Add a note - \x1b[31m expected failures \x1b[37m", () => {

    test.post("Adds a note with title which already exists", "/notes", 424, "You already have a note with that title, please choose another",

        {
            user_id: testing_variables.standard_id,
            title: testing_variables.title,
            subject: "Subject",
            body: "body",
            search_tags: ["tag1", "tag2", "tag3"].join(" "),
            syntax: "some syntax",

        })

})