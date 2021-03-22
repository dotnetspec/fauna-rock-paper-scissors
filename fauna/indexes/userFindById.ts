import { query } from "faunadb";
const { Collection, Select, Var, Lambda } = query;

//this const name doesn't appear to matter, the index will be generated with name: whatever
//label we use here:
const UserFindById = {
  //index name
  name: "user_find_by_id",
  source: Collection("User"),
  //unique has to be false cos it's not as straightforward as you might hope ...
  unique: false,
  terms: [
    {
      field: ["ref", "ref"]
    }
  ]
};

export = UserFindById;
