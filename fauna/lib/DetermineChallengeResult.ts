import { ExprArg, ExprVal, query } from "faunadb";
const { And, Equals, If, Or, LT } = query;

export default function DetermineChallengeResult(challengeresult: ExprArg, playerrank: ExprVal, opponentrank: ExprVal): ExprVal {
    return {
        challengeresult,
        playerrank,
        opponentrank,
        message: If(
            Equals(challengeresult, "Abandoned"),
            "Abandoned!",
            //If(isWinnerHigherRank(playerrank, opponentrank), "You win in if!", "You lost in if")
            If(LT(playerrank, opponentrank), "You win in if!", "You lost in if")
        )
    }
}

//nb. 'higher' rank is a lower int, so to app. playerrank must be less than oppentrank to be 'higher'
// function isWinnerHigherRank(playerrank: ExprVal, opponentrank: ExprVal): Boolean {
//     return If(LT(playerrank, opponentrank), true, false)

// }
