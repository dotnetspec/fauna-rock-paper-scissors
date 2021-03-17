import { query } from "faunadb";
// import { RandomString, Switch } from "faunadb-fql-lib";
// import DetermineResult from '../lib/DetermineResult';
const { Lambda, Let, Query, Var, Select, Map, Paginate, Match, Index, Get } = query;


const AllUsers = {
    //must match resolver name:
    name: "all_users",
    body: Query(
        Lambda(
            [],
            Select(
                "data",
                Map(Paginate(Match(Index("allUsers"))), Lambda("x", Get(Var("x"))))
            )
        )
    ),
};

export = AllUsers;
