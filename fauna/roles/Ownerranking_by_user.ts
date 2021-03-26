import { Function, query } from "faunadb";
const { Collection, Index } = query;

const Owner_ranking_by_user = {
    name: "ownerranking_by_user",
    privileges: [
        {
            resource: Collection("User"),
            actions: {
                read: true
            }
        },
        // {
        //     resource: Collection("Ranking"),
        //     actions: {
        //         read: true
        //     }
        // },
        {
            //if you make a ref to an index here it must be defined in VSCode under indexes as well.
            //owner_ranking_by_user index is now tied to the owner_ranking_by_user role:
            resource: Index('ownerranking_by_user'),
            actions: {
                read: true
            }
        }
    ]
    // ,
    // membership: [{ resource: Collection("User") }, { resource: Collection("Ranking") }]
};

export = Owner_ranking_by_user;
