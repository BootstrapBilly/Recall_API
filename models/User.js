const mongoose = require("mongoose");//Import mongoose 

const Schema = mongoose.Schema;

const user_schema = new Schema({//create a schema object

    email_address: {
        type: String,//Of type string
        required: true//Must be defined when a user object is created
    },

    password: {
        type: String,//Of type string
        required: true//Must be defined when a user object is created
    },

    friends: [{

        user_id: {//id of the friend
            type: Schema.Types.ObjectId,//special schema type object id 
            ref: "User"//Refers to another user_id
        },

    }],

    friend_requests: [{

        user_id: {//id of the friend
            type: Schema.Types.ObjectId,//special schema type object id 
            ref: "User"//Refers to another user_id
        },

    }]

});

//Export the schema for usage by controller methods
module.exports = mongoose.model("User", user_schema); 