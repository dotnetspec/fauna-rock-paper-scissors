import { query } from "faunadb";
// import { RandomString, Switch } from "faunadb-fql-lib";
// import DetermineResult from '../lib/DetermineResult';
const { Lambda, Let, Query, Var, Select, If, Login, Exists, Match, Index, Get } = query;


const LoginUser = {
    //must match resolver name:
    name: "login_user",
    body: Query(
        Lambda(
            ["username", "password"],
            Let(
                {
                    match: Match(Index("unique_User_username"), Var("username")),
                    user: If(Exists(Var("match")), Get(Var("match")), "false"),
                    login: Login(Select("ref", Var("user")),
                        {
                            password: Var("password")
                        })
                },
                {
                    token: Select("secret", Var("login")),
                    logginUser: Select("ref", Var("user"))
                }
            )
        )
    ),
};

export = LoginUser;

//PlayGround:
//query AllUsers{allUsers{_id}}
