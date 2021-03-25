import { query } from "faunadb";
const { Collection, Index, Function } = query;

const Bootstrap = {
  name: "bootstrap",
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
      resource: Function("create_new_user"),
      actions: {
        call: true
      }
    },
    {
      resource: Function("login_user"),
      actions: {
        call: true
      }
    },
    {
      resource: Index("unique_User_username"),
      actions: {
        read: true
      }
    }
  ],
  membership: []
};


export = Bootstrap;
