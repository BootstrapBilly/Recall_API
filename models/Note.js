const mongoose = require("mongoose");//Import mongoose 

const Schema = mongoose.Schema;

const note_schema = new Schema({//create a schema object

    title: {
        type: String,
        required: true //Must be defined when a note object is created
    },

    subject: {
        type: String,
        required: true //Must be defined when a note object is created
    },

    search_tags: [{//an array

        tag: {//of search tags
            type: String
        }

    }],

    body: {
        type: String,
        required: true //Must be defined when a note object is created
    },

    syntax: {
        type: String,
    },

    createdBy: {//who created the note
        type: String,
        required: true //Must be defined when a note object is created
    },

    access_rights: [{//people who will be able to see this note

        user_id: {//id of the friend
            type: Schema.Types.ObjectId,//special schema type object id 
            ref: "User"//Refers to another user_id
        },

    }]

});

//Export the schema for usage by controller methods
module.exports = mongoose.model("Note", note_schema); 