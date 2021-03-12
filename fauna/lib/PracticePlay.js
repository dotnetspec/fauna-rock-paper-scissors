
"use strict";
exports.__esModule = true;
var faunadb_1 = require("faunadb");
var Lambda = faunadb_1.query.Lambda, Let = faunadb_1.query.Let, Query = faunadb_1.query.Query, Var = faunadb_1.query.Var;
var selectionMap = {
    R: "Rock",
    P: "Paper",
    S: "Scissors"
};
//var result = DetermineResult(Var("selection"), Var("opponentSelection"))
//            RandomString(1, "RPS")
//var result = DetermineResult(RandomString(1, "RPS"), RandomString(1, "RPS"));
var randomCharacter = "Rock";
var opponentSelection = "Paper";
var result = "silly answer"; //DetermineResult(Var("selection"), Var("opponentSelection"))
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
