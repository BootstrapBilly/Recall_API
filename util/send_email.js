const dotenv = require('dotenv');

dotenv.config();

const mailjet = require ('node-mailjet').connect(process.env.key1, process.env.key2)//set up the mailjet API and enter the keys

exports.password_reset = (email, token, user_id) => {

    mailjet.post("send", {'version': 'v3.1'})
 
     .request({

       "Messages":[
         {
           "From": {
             "Email": "donotreply.recall@gmail.com",//sent from
             "Name": "Recall"
           },
           "To": [
             {
               "Email": email//sent to
             }
           ],
           "Subject": "Recall password reset",//subject
           "HTMLPart": `
           <h3>  You requested a password reset email </h3>
           <h5> If this was not you, please ignore this email </h5>
 
           <p> Click this <a href="frontendurl/${token}/?userId=${user_id}">link</a> to reset your password</p>
           `,
         }
       ]

     })
 
 }