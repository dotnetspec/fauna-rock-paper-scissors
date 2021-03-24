import { Function, query } from "faunadb";
const { Collection, Index } = query;

const Player_ranking_by_user = {
    name: "player_ranking_by_user",
    privileges: [
        {
            resource: Collection("User"),
            actions: {
                read: true
            }
        },
        {
            //player_ranking_by_user index is now tied to the player_ranking_by_user role:
            resource: Index('player_ranking_by_user'),
            actions: {
                read: true
            }
        }
    ],
    membership: []
};

export = Player_ranking_by_user;
