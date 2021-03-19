import { query } from "faunadb";
const { Collection, Index } = query;

const Login = {
  name: "login",
  privileges: [
    {
      resource: Collection("User"),
      actions: {
        create: false,
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

export = Login;
