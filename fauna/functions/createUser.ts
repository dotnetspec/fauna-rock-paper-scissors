import { query } from "faunadb";
//import { RandomString, Switch } from "faunadb-fql-lib";
//import DetermineChallengeResult from '../lib/DetermineChallengeResult';
const { Lambda, Let, Query, Var, Create, Collection, ToMillis, Select, Now, Login } = query;


const CreateNewUser = {
    //this matches the resolver name in the schema:
    name: "create_new_user",
    body: Query(
        Lambda(
            [
                "active",
                "username",
                "password",
                "description",
                "email",
                "mobile"
            ],
            Let(
                {
                    user: Create(Collection("User"), {
                        credentials: { password: Var("password") },
                        data: {
                            active: Var("active"),
                            username: Var("username"),
                            description: Var("description"),
                            email: Var("email"),
                            mobile: Var("mobile"),
                            member_since: ToMillis(Now())
                        }
                    }),
                    login: Login(Select("ref", Var("user")), { password: Var("password") })
                },
                Select("secret", Var("login"))
            )
        )
    ),
};

export = CreateNewUser;

// PlayGround:
// mutation CreateNewUser {
//     createNewUser(
//       active: true
//       username: "Test 4"
//       password: "hello"
//       description: "Jogger"
//       email: "4@4.com"
//       mobile: "44444444"
//     )
//     {token
//     logginUser{_id username description}}
//   }
