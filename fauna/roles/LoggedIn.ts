import { Function, query } from "faunadb";
const { Collection, Index, Ref } = query;

//all below can only happen once the Bearer has a token
//i.e. after login

const LoggedIn = {
    name: "logged-in",
    privileges: [
        {
            resource: Collection("User"),
            actions: {
                read: true
            }
        },
        {
            resource: Collection("Ranking"),
            actions: {
                read: true
            }
        },
        {
            resource: Collection("Player"),
            actions: {
                read: true
            }
        },
        {
            resource: Index('ownerranking_by_user'),
            actions: {
                read: true
            }
        },
        {
            resource: Index('playerinranking_by_user'),
            actions: {
                read: true
            }
        }
        ,
        {
            resource: Index('unique_User_username'),
            actions: {
                read: true
            }
        }
        ,

        {
            resource: Index("playerchallenger_by_player"),
            actions: {
                read: true
            }
        },
        {
            resource: Index("player_ladder_by_ranking"),
            actions: {
                read: true
            }
        },
        {
            resource: Index("ladder_in_player_by_ranking"),
            actions: {
                read: true
            }
        }
    ],
    membership: [
        { resource: Collection("User") }
    ]
};

export = LoggedIn;