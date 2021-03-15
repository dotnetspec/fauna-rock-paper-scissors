import { query } from "faunadb";
const { Collection } = query;

//this const name doesn't appear to matter, the index will be generated with name: whatever
//label we use here:
const AllPlayers = {
  //index name
  name: "allPlayers",
  source: Collection("Player"),
  unique: true,
};

export = AllPlayers;
