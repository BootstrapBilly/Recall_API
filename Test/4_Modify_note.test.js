// const test = require("../util/testing_functions")
// const testing_variables = require("../util/testing_variables")

// //! Modify a note Expected failures

// describe("Modify a note - \x1b[31m expected failures \x1b[37m", () => {

//     test.patch("modifies a note and gives no body", "/notes", 424, "A note must have a title and body",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title,
//             new_title: testing_variables.title,
//             new_subject: "new_subject",
//             new_body: null,
//             new_search_tags: ["tag1", "tag2", "tag3"],
//             new_syntax: "some new_syntax",

//         })

//     test.patch("modifies a note and gives an empty body", "/notes", 424, "A note must have a title and body",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title2,
//             new_title: testing_variables.title2,
//             new_subject: "new_subject",
//             new_body: "",
//             new_search_tags: ["tag1", "tag2", "tag3"],
//             new_syntax: "some new_syntax",

//         })

//     test.patch("modifies a note and gives no title", "/notes", 424, "A note must have a title and body",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title,
//             new_title: null,
//             new_subject: "new_subject",
//             new_body: "new_body",
//             new_search_tags: ["tag1", "tag2", "tag3"],
//             new_syntax: "some new_syntax",

//         })

//     test.patch("modifies a note and gives an empty title", "/notes", 424, "A note must have a title and body",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title,
//             new_title: "",
//             new_subject: "new_subject",
//             new_body: "new_body",
//             new_search_tags: ["tag1", "tag2", "tag3"],
//             new_syntax: "some new_syntax",

//         })

//     test.patch("modifies a note , empty user id", "/notes", 400, "Bad request",

//         {
//             user_id: "",
//             title: testing_variables.title,
//             new_title: "title",
//             new_subject: "new_subject",
//             new_body: "new_body",
//             new_search_tags: ["tag1", "tag2", "tag3"],
//             new_syntax: "some new_syntax",

//         })

//     test.patch("modifies a note , null user id", "/notes", 400, "Bad request",

//         {
//             user_id: null,
//             title: testing_variables.title,
//             new_title: "tot;e",
//             new_subject: "new_subject",
//             new_body: "new_body",
//             new_search_tags: ["tag1", "tag2", "tag3"],
//             new_syntax: "some new_syntax",

//         })
// })

// //* Modify a note Expected passes

// describe("Mofify a note - \x1b[32m expected passes \x1b[37m", () => {

//     test.patch("modifies a note and gives only a title and body, null or empty everything else", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title,
//             new_title: testing_variables.title,
//             new_subject: null,
//             new_body: "new_body",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("modifies a note and gives a number for a title", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: 4353453453454,
//             new_title: 34543435435344534,
//             new_subject: null,
//             new_body: "new_body",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("modifies a note which has a capital title, with exact CAPITAL title", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.capital_title,
//             new_title: testing_variables.capital_title2,
//             new_subject: null,
//             new_body: "new_body",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("modifies a note which has a capital title, with incorrect case CapItAL title", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.capital_title2,
//             new_title: testing_variables.incorrect_case_cap_title,
//             new_subject: null,
//             new_body: "new_body",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("modifies a note and gives a number for a new_body", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title2,
//             new_title: testing_variables.title2,
//             new_subject: null,
//             new_body: 43534543534435,
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("modifies a note and gives a number for a title and body", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: 32543543543,
//             new_title: 43895734897589437,
//             new_subject: null,
//             new_body: 34543534534354,
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("modifies a note and gives a short title", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: "a",
//             new_title: "b",
//             new_subject: null,
//             new_body: "new_body",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("modifies a note and gives a long title", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: "asjhadgashjdgasjhdgasjhdgasjhdgashjdgashjdgashjgggggggggggggggggggggggggggjdgbasjhgdahjsgdhjasgdhjasgdjhasgdhjasgdhjasgdhjasgahjdgasdjhgdhasjgdhjasgdhjasgdhjsasdklajdsalkdjsalkdjslkajdlksajdlkasjdlkasjdlksajdlksajdlksadhjkfrhrewhjfghsdgrfhgsdafghdsfgjhkdsgfhljsdgfjhsdgfjhdsgbfjhsdhhjfsd hgsdfjhdsgfjhkdsg khdjsgfksdfjhkdsgfhsdafkjhdsgfhjsdfhjgfhjgdsjhfghjfdsagfhkgfdhjskdfhjgfdhjkagfhjagfdhjkgfjhadsgfhkjsdgfahfdsgjhfgksfg hjfadg fhjkagfkjh fkjhdgfjhk sgfkhjgfjhkagfsdahjgf ksforyewfewou6324y 3ghj344 g34g 34hkj g4343gkh43g43hj 4hk43gk 3g4343784343876fvd",
//             new_title: "dsfbsdahjgfseaft764wqcv5c7692 69759 76sdg rfhsjf ghjdgfyusdgfjhsdfhjdsgf hjdksfjhds gfhsdgkfjhdsjhkfgjhksdafgjhsdgfjhsdgfhjsdgjhkfgkslfjhsdg fhjsdghfhjdsagfghjfgjksdhfgsdkfgsdgfjhksdgfkfgakjdfsgfdjhkgfk",
//             new_subject: null,
//             new_body: "new_body",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("modifies a note and gives a short new_body", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title3,
//             new_title: testing_variables.title3,
//             new_subject: null,
//             new_body: "b",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("modifies a note and gives a long new_body", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title4,
//             new_title: testing_variables.title4,
//             new_subject: null,
//             new_body: "asjhadgashjdgasjhdgasjgdfgdfgdfgfdgdfgfdhdgasjhdgashjdgashjdgashjgggggggggggggggggggggggggggjdgbasjhgdahjsgdhjasgdhjasgdjhasgdhjasgdhjasgdhjasgahjdgasdjhgdhasjgdhjasgdhjasgdhjsasdklajdsalkdjsalkdjslkajdlksajdlkasjdlkasjdldfgdfgdfgdfbvtdfgh543645645654 564 654 654645654 65454@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@4343876fvd",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("modifies a note and gives a short new_subject", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title5,
//             new_title: testing_variables.title5,
//             new_subject: "b",
//             new_body: "new_body",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("modifies a note and gives a long new_subject", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title2,
//             new_title: testing_variables.title2,
//             new_subject: "asjhadgashjdgasjhdgasjhdgsdfsdfsdfasjhdgashjdgashjdgashjgggggggggggggggggggggggggggjdgbasjhgdahjsgdhjasgdhjasgdjhasgdhjasgdhjasgdhjasgahjdgasdjhgdhasjgdhjasgdhjasgdhjsasdklagkh43g43hj 4hk43gk 3g4343784343876fvd",
//             new_body: "new_body",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("modifies a note and gives a number new_subject", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title2,
//             new_title: testing_variables.title2,
//             new_subject: 245874389743,
//             new_body: "new_body",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("modifies a note and gives short new_syntax", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title5,
//             new_title: testing_variables.title5,
//             new_subject: "new_subject",
//             new_body: "new_body",
//             new_search_tags: [],
//             new_syntax: "a",

//         })

//     test.patch("modifies a note and gives long new_syntax", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title5,
//             new_title: testing_variables.title5,
//             new_subject: "new_subject",
//             new_body: "new_body",
//             new_search_tags: [],
//             new_syntax: `const email = req.new_body.email //extract the email
//         const password = req.new_body.password//password
//         const repeat_password = req.new_body.repeat_password//and second password from the response
    
//         const email_in_use = await User.findOne({email_address:email})//Does the email already exist in the database?
    
//         if(email_in_use) return res.status(424).json({message: "Sorry, that email in unavailable"})//if so, abort and inform the user
    
//         const result = validate_password.validate(password, repeat_password)//Scan the password, checking that it conforms
    
//         if(result !== "okay") return res.status(424).json({message: result})//if the password is not valid, send a response with the reason why
    
//         //*All password checks passed, hash the password
//         const hashed_password = await bcrypt.hash(password, 12)//bcrypt.hash encrypts the user password, 12 is the salt
    
//         if(!hashed_password) return res.status(500).json({message:"Sorry, something went wrong with our server"})//if the password was not hashed properly
    
//         //*Password hashed correctly, create a new user
//         const user = new User({//create a new user object from the schema
    
//             email_address:email,//set their email
//             password:hashed_password, //set the hashed_password NOT THE PLAIN TEXT PASSWORD
//             friends:[],//initialize friends as an empty array
//             friend_requests:[],//initialize the friends requests as an empty array 
//             reset_token:null,//reset token for resetting passwords
//             token_expiration:null,//token expiration date
    
//         })
    
//         const user_saved = await user.save()//save the new user
    
//         //if they saved correctly, send a 201 success response          If there was an error, send a 500 server error
//         user_saved ? res.status(201).json({message:"User created"}) : res.status(500).json({message:"Sorry, something went wrong with our server"})
//     `,

//         })

//     test.patch("modifies a note and gives number new_syntax", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title2,
//             new_title: testing_variables.title2,
//             new_subject: 245874389743,
//             new_body: "new_body",
//             new_search_tags: [],
//             new_syntax: 38435345489324783274892374,

//         })

//     test.patch("modifies a note and gives no search tags", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title2,
//             new_title: testing_variables.title2,
//             new_subject: "new_subject",
//             new_body: "new_body",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("modifies a note and gives one search tag", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title5,
//             new_title: testing_variables.title5,
//             new_subject: "new_subject",
//             new_body: "new_body",
//             new_search_tags: ["tag1"],
//             new_syntax: ``,

//         })

//     test.patch("modifies a note and gives many search tags", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title5,
//             new_title: testing_variables.title5,
//             new_subject: "new_subject",
//             new_body: "new_body",
//             new_search_tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
//             new_syntax: ``,

//         })

//     test.patch("modifies a note and gives many search tags including numbers", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title5,
//             new_title: testing_variables.title5,
//             new_subject: "new_subject",
//             new_body: "new_body",
//             new_search_tags: ["tag1", "tag2", 37643782, 32984903, "tag3", "tag4", "tag5"],
//             new_syntax: ``,

//         })

//     test.patch("modifies a note and gives duplicate search tags", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title5,
//             new_title: testing_variables.title5,
//             new_subject: "new_subject",
//             new_body: "new_body",
//             new_search_tags: ["tag1", "tag1"],
//             new_syntax: "some new_syntax",

//         })

//     test.patch("modifies a note and gives duplicate number search tags", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title7,
//             new_title: testing_variables.title7,
//             new_subject: "new_subject",
//             new_body: "new_body",
//             new_search_tags: [435345, 435345],
//             new_syntax: "some new_syntax",

//         })

//     test.patch("modifies a note and gives mixed duplicate search tags", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title7,
//             new_title: testing_variables.title7,
//             new_subject: "new_subject",
//             new_body: "new_body",
//             new_search_tags: [435345, 435345, "tag1"],
//             new_syntax: "some new_syntax",

//         })

//     test.patch("User 2 modifies a note with a unique title", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.short_id,
//             title: testing_variables.unique_title,
//             new_title:testing_variables.unique_title,
//             new_subject: "subject",
//             new_body: "3242323",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("User 2 changes a note with a unique title, to a title in use by another user", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.short_id,
//             title: testing_variables.unique_title,
//             new_title:testing_variables.title16,
//             new_subject: "subject",
//             new_body: "3242323",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("User 2 changes a previous note back to a unique title (Modifies a note what has previously been modified)", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.short_id,
//             title: testing_variables.title16,
//             new_title:testing_variables.unique_title,
//             new_subject: "subject",
//             new_body: "3242323",
//             new_search_tags: [],
//             new_syntax: "",

//         })

//     test.patch("User modifies a note with a non-unique title (in use by another user)", "/notes", 201, "note updated successfully",

//         {
//             user_id: testing_variables.short_id,
//             title: testing_variables.title17,
//             new_title:testing_variables.title17,
//             new_subject: "Subject",
//             new_body: "body",
//             new_search_tags: [342, 435345, "tag1", "tag1"],
//             new_syntax: "some syntax",

//         })

// })

// //! modify a note Expected failures

// describe("Modify a note - \x1b[31m expected failures \x1b[37m", () => {

//     test.patch("modifies a note and gives title which already exists", "/notes", 424, "You already have a note with that title, please choose another",

//         {
//             user_id: testing_variables.standard_id,
//             title: testing_variables.title,
//             new_title: testing_variables.title7,
//             new_subject: "new_subject",
//             new_body: "new_body",
//             new_search_tags: ["tag1", "tag2", "tag3"],
//             new_syntax: "some new_syntax",

//         })

// })