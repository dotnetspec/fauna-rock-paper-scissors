import { ExprArg, ExprVal, query } from "faunadb";
const { And, Equals, If, Or } = query;


export default function DetermineResult(selection: String, opponentSelection: string): String {
    //you need ExprArgs (imported from faunadb)_ in the function definition cos you're defining 
    //a function understood by fauna (FQL) not really ts, even though that's what you're using here.
    //So ExprArg etc. really bridges the gap.
    //the import allows you to talk about something that otherwise wouldn't make sense (to js/ts)
    return {
        selection,
        opponentSelection,
        message: If(
            Equals(selection, opponentSelection),
            "It's a tie!",
            If(
                Or(
                    And(
                        Equals(selection, "Rock"),
                        Equals(opponentSelection, "Scissors")
                    ),
                    And(
                        Equals(selection, "Paper"),
                        Equals(opponentSelection, "Rock")
                    ),
                    And(
                        Equals(selection, "Scissors"),
                        Equals(opponentSelection, "Paper")
                    ),
                ),
                "You win!",
                "You lose!"
            )
        )
    }
}
