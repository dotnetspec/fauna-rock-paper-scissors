import { query } from "faunadb";
const { Collection } = query;

const Bootstrap = {
  name: "Bootstrap",
  privileges: [
    {
      resource: Collection("User"),
      actions: {
        read: true,
        write: false,
        create: false,
        delete: false,
        history_read: false,
        history_write: false,
        unrestricted_read: false
      }
    }
  ],
  membership: []
};

export = Bootstrap;
