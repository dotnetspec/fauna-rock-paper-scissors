import { query } from "faunadb";
import { RandomString, Switch } from "faunadb-fql-lib";
import DetermineChallengeResult from '../lib/DetermineChallengeResult';
const { Lambda, Let, Query, Var } = query;

//this has to be updated in the schema as well:
const selectionMap = {
    W: 'Won',
    L: 'Lost',
    A: 'Abandoned'
};

const UpdateResult = {
    //this matches the resolver name in the schema:
    name: "update_result",
    body: Query(
        Lambda(
            ["selection", "playerrank", "opponentrank"],
            Let({
                //randomCharacter: RandomString(1, "WLA"),
                //opponentSelection: Switch(Var("randomCharacter"), selectionMap),
            },
                DetermineChallengeResult(Var("selection"), Var("playerrank"), Var("opponentrank"))
            )
        )
    ),
};

export = UpdateResult;

//PG:
// query {
//     updateResult(selection: Lost playerrank:1 opponentrank: 2) {
//       selection
//       playerrank
//       opponentrank
//       message
//     }
//   }

