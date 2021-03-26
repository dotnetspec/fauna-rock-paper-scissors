import { query } from "faunadb";
const { Collection } = query;

//this const name doesn't appear to matter, the index will be generated with name: whatever
//label we use here:
const PlayerInRankingByUser = {
  //index name
  name: "playerinranking_by_user",
  source: Collection("Player"),
  //unique has to be false cos it's not as straightforward as you might hope ...
  unique: false,
  terms: [
    {
      field: ["data", "playerInfo"]
    }
  ]
};

export = PlayerInRankingByUser;
