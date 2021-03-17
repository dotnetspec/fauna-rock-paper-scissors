import { ExprArg, ExprVal, query } from "faunadb";
const { And, Equals, If, Or } = query;

export default function DetermineChallengeResult(selection: ExprArg, opponentSelection: ExprArg): ExprVal {
    return {
        selection,
        opponentSelection,
        message: If(
            Equals(selection, opponentSelection),
            "It's a tie!",
            If(
                Or(
                    And(
                        Equals(selection, "Won"),
                        Equals(opponentSelection, "Lost")
                    ),
                    And(
                        Equals(selection, "Abandoned"),
                        Equals(opponentSelection, "Won")
                    ),
                    And(
                        Equals(selection, "Lost"),
                        Equals(opponentSelection, "Abandoned")
                    ),
                ),
                "You win!",
                "You lose!"
            )
        )
    }
}
