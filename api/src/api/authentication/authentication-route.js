import AuthController from "./authentication-controller";

const routes = [{
    path: "/createAccount",
    method: "POST",
    config: { auth: false },
    handler: AuthController.createAnAccount
},
{
    path: "/authorize",
    method: "POST",
    config: { auth: false },
    handler: AuthController.authorize
}
];

export default routes;