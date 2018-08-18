module.exports.serverConstant = {
    attachRouteMessage: (path) => {
        return `attaching ${ path }`;
    },
    serverErrorMessage: "Server error",
    serverStartedMessage: (info) => {
        return `Server started at ${info.uri}`;
    },
    registerAuthenticationMessage: "registered authentication provider"
};

module.exports.authConstant = {
    userNotFound: "The specified user was not found",
    incorrectPassword: "Incorrect password"
};
