import { Function, query } from "faunadb";
const { Collection, Index } = query;

const Owner_ranking_by_user = {
    name: "owner_ranking_by_user",
    privileges: [
        {
            resource: Collection("User"),
            actions: {
                read: true
            }
        },
        {
            //if you make a ref to an index here it must be defined in VSCode under indexes as well.
            //owner_ranking_by_user index is now tied to the owner_ranking_by_user role:
            resource: Index('owner_ranking_by_user'),
            actions: {
                read: true
            }
        }
    ],
    membership: []
};

export = Owner_ranking_by_user;
