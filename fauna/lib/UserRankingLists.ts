import { ExprArg, ExprVal, query } from "faunadb";
const { And, Equals, If, Or, LT } = query;

export default function UserRankingLists(_id: ExprArg): ExprVal {
    return {
        _id,
        message: "hi there"
        //     username: username,
        //     description,
        //     ownerOf {
        //     data {
        //         _id
        //         rankingname
        //         rankingdesc
        //     }
        // }
        // memberOf {
        //     data {
        //         _id
        //         active
        //         playerInfo {
        //             username
        //         }
        //         ladder {
        //             _id
        //             rankingname
        //             rankingdesc
        //         }
        //     }

        //     )
    }
}

//nb. 'higher' rank is a lower int, so to app. playerrank must be less than oppentrank to be 'higher'
// function isWinnerHigherRank(playerrank: ExprVal, opponentrank: ExprVal): Boolean {
//     return If(LT(playerrank, opponentrank), true, false)

// }
