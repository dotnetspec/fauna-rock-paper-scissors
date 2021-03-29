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

// # Write your query or mutation here
// mutation{
//   createNewUser(
//     active: true
//     username: "Test4"
//     password: "hello"
//     description: "t4"
//     email: "t4@t.com"
//     mobile: "444444444"
//   ) {
//     token
//     logginUser{username}
//   }
// }
