import { ExprArg, ExprVal, query } from "faunadb";
const { And, Equals, If, Or } = query;

export default function DetermineChallengeResult(selection: ExprArg, playerrank: ExprVal, opponentrank: ExprVal): ExprVal {
    return {
        selection,
        playerrank,
        opponentrank,
        message: If(
            Equals(selection, "Abandoned"),
            "Abandoned!",
            If(
                Equals(selection, "Won"),
                If(isWinnerHigherRank(), "You win!", "You lost in if"),
                "You lose!"
            )
        )
    }
}


function isWinnerHigherRank(): boolean {
    return false && undefined;
}
