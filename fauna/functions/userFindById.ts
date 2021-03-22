import { query } from "faunadb";
// import { RandomString, Switch } from "faunadb-fql-lib";
// import DetermineResult from '../lib/DetermineResult';
const { Lambda, Query, Var, Select, If, Exists, Match, Index, Get, Let } = query;


const UserFindById = {
    //must match resolver name:
    name: "user_find_by_id",
    body: Query(
        Lambda(
            ["uid"],
            Let(
                {
                    match: Match(Index("user_find_by_id"), Var("uid")),
                    user: If(Exists(Var("match")), Get(Var("match")), "false"),
                },
                {
                    user: Select("data", Var("user"))
                }
            )
        )
    ),
};

export = UserFindById;

//PlayGround:
// {
//     findUserByID(id: "290125575057572353") {
//       _id
//       username
//       description
//       ownerOf {
//         data {
//           _id
//           rankingname
//           rankingdesc
//         }
//       }
//       memberOf {
//         data {
//           _id
//           active
//           playerInfo {
//             username
//           }
//           ladder {
//             _id
//             rankingname
//             rankingdesc
//           }
//         }
//       }
//     }
//   }
