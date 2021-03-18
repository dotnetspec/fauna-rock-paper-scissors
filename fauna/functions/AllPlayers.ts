import { query } from "faunadb";
// import { RandomString, Switch } from "faunadb-fql-lib";
// import DetermineResult from '../lib/DetermineResult';
const { Lambda, Let, Query, Var, Select, Map, Paginate, Match, Index, Get } = query;


const AllPlayers = {
    //must match resolver name:
    name: "all_players",
    body: Query(
        Lambda(
            [],
            Select(
                "data",
                Map(Paginate(Match(Index("allPlayers"))), Lambda("x", Get(Var("x"))))
            )
        )
    ),
};

export = AllPlayers;

//PlayGround:
//query AllPlayers{allPlayers{_id}}
