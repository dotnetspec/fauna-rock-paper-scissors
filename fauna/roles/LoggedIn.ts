import { Function, query } from "faunadb";
const { Collection } = query;

const LoggedIn = {
    name: "logged-in",
    privileges: [
        //list all the functions user needs to be logged-in to use:
        {
            //user_find_by_id function is now tied to the user_find_by_id role:
            resource: Function('user_find_by_id'),
            actions: {
                call: true
            }
        }
    ],
    membership: [{
        resource: Collection("User")
    }]
};

export = LoggedIn;
