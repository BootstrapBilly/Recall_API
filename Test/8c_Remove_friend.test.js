const test = require("../util/testing_functions")
const testing_variables = require("../util/testing_variables")

//*Remove friend expected passes 

describe("Remove friend - \x1b[32m expected passes \x1b[37m", () => {

    test.delete("User with 2 friends deletes one, leaving 1 friend remaining", "/friend", 200, "Friend removed",

    {
        user_id: testing_variables.friend_testing_user,
        user_to_delete_id:"5eda1cd16f60d4238429bc69",

    })

    test.delete("User with 1 friend deletes it, leaving none", "/friend", 200, "Friend removed",

    {
        user_id: testing_variables.friend_testing_user,
        user_to_delete_id:"5eda1cd06f60d4238429bc66",

    })

    test.delete("edge deletes caps, leaving no friends", "/friend", 200, "Friend removed",

    {
        user_id: testing_variables.edge_friend_testing_user,
        user_to_delete_id:testing_variables.caps_friend_testing_user,

    })

    test.delete("caps deletes long, leaving no friends", "/friend", 200, "Friend removed",

    {
        user_id: testing_variables.caps_friend_testing_user,
        user_to_delete_id:testing_variables.long_friend_testing_user,

    })


    
})
