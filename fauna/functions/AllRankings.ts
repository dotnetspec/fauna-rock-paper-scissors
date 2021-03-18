import { query } from "faunadb";
// import { RandomString, Switch } from "faunadb-fql-lib";
// import DetermineResult from '../lib/DetermineResult';
const { Lambda, Let, Query, Var, Select, Map, Paginate, Match, Index, Get } = query;


const AllRankings = {
    name: "all_rankings",
    body: Query(
        Lambda(
            [],
            Select(
                "data",
                Map(Paginate(Match(Index("allRankings"))), Lambda("x", Get(Var("x"))))
            )
        )
    ),
};

export = AllRankings;

//PlayGround:
//query AllRankings{allRankings{_id rankingname}}
