import { query } from "faunadb";
import { RandomString, Switch } from "faunadb-fql-lib";
import PracticeDetermineResult from '../lib/PracticeDetermineResult';
const { Lambda, Let, Query, Var } = query;

const selectionMap = {
    R: "Rock",
    P: "Paper",
    S: "Scissors"
};

//var result = DetermineResult(Var("selection"), Var("opponentSelection"))
//            RandomString(1, "RPS")

//var result = DetermineResult(RandomString(1, "RPS"), RandomString(1, "RPS"));

let randomCharacter: string = "Rock";
let opponentSelection: string = "Paper";
let result: String = PracticeDetermineResult(randomCharacter, opponentSelection)

console.log(result);

// const Play = {
//     name: "play",
//     body: Query(
//         Lambda(
//             ["selection"],
//             Let({
//                 randomCharacter: RandomString(1, "RPS"),
//                 opponentSelection: Switch(Var("randomCharacter"), selectionMap),
//             },
//                 DetermineResult(Var("selection"), Var("opponentSelection"))
//             )
//         )
//     ),
// };

// export = Play;
