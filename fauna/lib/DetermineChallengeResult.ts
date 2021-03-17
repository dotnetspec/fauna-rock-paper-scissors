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
                //Or(
                //And(
                Equals(selection, "Won"),
                //Equals(opponentSelection, "Lost")
                //),
                // And(
                //     Equals(selection, "Abandoned"),
                //     //Equals(opponentSelection, "Won")
                // ),
                // And(
                //     Equals(selection, "Lost"),
                //     //Equals(opponentSelection, "Abandoned")
                // ),
                //),
                "You win!",
                "You lose!"
            )
        )
    }
}
