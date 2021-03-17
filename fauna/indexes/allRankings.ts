import { query } from "faunadb";
const { Collection } = query;

//this const name doesn't appear to matter, the index will be generated with name: whatever
//label we use here:
const AllRankings = {
  //index name
  name: "allRankings",
  source: Collection("Ranking"),
  unique: false,
};

export = AllRankings;
