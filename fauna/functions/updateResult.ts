import { query } from "faunadb";
import { RandomString, Switch } from "faunadb-fql-lib";
import DetermineChallengeResult from '../lib/DetermineChallengeResult';
const { Lambda, Let, Query, Var } = query;

const selectionMap = {
    R: "Rock",
    P: "Paper",
    S: "Scissors"
};

const UpdateResult = {
    //this matches the resolver name in the schema:
    name: "update_result",
    body: Query(
        Lambda(
            ["selection"],
            Let({
                randomCharacter: RandomString(1, "RPS"),
                opponentSelection: Switch(Var("randomCharacter"), selectionMap),
            },
                DetermineChallengeResult(Var("selection"), Var("opponentSelection"))
            )
        )
    ),
};

export = UpdateResult;
