import { query } from "faunadb";
const { Collection, Index } = query;

//this is role 'register' in the tutorial
const CreateNewUser = {
  name: "create_new_user",
  privileges: [
    {
      resource: Collection("User"),
      actions: {
        create: true,
        read: true
      }
    },
    {
      resource: Index("unique_User_username"),
      actions: {
        read: true
      }
    }
  ]
};


export = CreateNewUser;
