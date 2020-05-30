const mongoose = require("mongoose");//Import mongoose 

const Schema = mongoose.Schema;

const process_schema = new Schema({//create a schema object

    title: {
        type: String,
        required: true //Must be defined when a process object is created
    },

    subject: {
        type: String,
        required: true //Must be defined when a process object is created
    },

    search_tags: [{//an array

        tag: {//of search tags
            type: String
        }

    }],

    body: {
        type: String,
        required: true //Must be defined when a process object is created
    },

    notes: [{//Notes which make up this process

        note_id: {//id of the note
            type: Schema.Types.ObjectId,//special schema type object id 
            ref: "Note"//Refers to another note id
        },

        required: true //Must be defined when a process object is created
    }],

    createdBy: {//who created the process
        type: String,
        required: true //Must be defined when a process object is created
    },

    access_rights: [{//people who will be able to see this process

        user_id: {//id of the friend
            type: Schema.Types.ObjectId,//special schema type object id 
            ref: "User"//Refers to another user_id
        },

    }]

});

//Export the schema for usage by controller methods
module.exports = mongoose.model("Process", process_schema); 