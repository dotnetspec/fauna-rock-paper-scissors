import { query } from "faunadb";
const { Collection } = query;

const User = {
  name: "User",
  privileges: [
    {
      resource: Collection("User"),
      actions: {
        read: true,
        create: true,
        delete: true,
      },
    },
  ],
};

export = User;
