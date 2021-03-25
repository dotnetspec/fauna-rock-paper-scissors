import { Function, query } from "faunadb";
const { Collection, Index } = query;

//all below can only happen once the Bearer has a token
//i.e. after login

const LoggedIn = {
    name: "logged-in",
    privileges: [
        {
            resource: Index('ownerranking_by_user'),
            actions: {
                read: true
            }
        },
        {
            resource: Index('playerranking_by_user'),
            actions: {
                read: true
            }
        }
    ],
    membership: [{
        resource: Collection("User")
    }]
};

export = LoggedIn;
