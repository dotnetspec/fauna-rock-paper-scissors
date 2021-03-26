import { Function, query } from "faunadb";
const { Collection, Index } = query;

const Playerinranking_by_user = {
    name: "playerinranking_by_user",
    privileges: [
        {
            resource: Collection("User"),
            actions: {
                read: true
            }
        },
        {
            //playerinranking_by_user index is now tied to the playerinranking_by_user role:
            resource: Index('playerinranking_by_user'),
            actions: {
                read: true
            }
        }
    ],
    membership: []
};

export = Playerinranking_by_user;
