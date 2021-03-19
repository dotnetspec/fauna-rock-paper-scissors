import { query } from "faunadb";
const { Collection, Index, Ref } = query;

const Login = {
  name: "Bootstrap",
  privileges: [
    {
      resource: Collection("User"),
      actions: {
        read: true,
        write: false,
        create: true,
        delete: false,
        history_read: false,
        history_write: false,
        unrestricted_read: false
      }
    },
    {
      resource: Ref(Ref("functions"), "create_new_user"),
      actions: {
        call: true
      }
    },
    {
      resource: Ref(Ref("functions"), "login_user"),
      actions: {
        call: true
      }
    },
    {
      resource: Index("unique_User_username"),
      actions: {
        unrestricted_read: false,
        read: true
      }
    }
  ],
  membership: [
    {
      resource: Collection("User")
    }
  ]
};

export = Login;
