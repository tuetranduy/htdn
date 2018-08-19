/* eslint-disable */

var log = console.log;

console.log = function () {
    var first_parameter = arguments[0];
    var other_parameters = Array.prototype.slice.call(arguments, 1);

    function formatConsoleDate(date) {
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        return '[' +
            ((hour < 10) ? '0' + hour : hour) +
            ':' +
            ((minutes < 10) ? '0' + minutes : minutes) +
            ':' +
            ((seconds < 10) ? '0' + seconds : seconds) +
            '] ';
    }

    log.apply(console, [first_parameter + " | " + formatConsoleDate(new Date())].concat(other_parameters));
};

import hapi from "hapi";
import config from "./config/config";
import router from "./server/router.js";
import {
    serverConstant
} from "./server/constant";

const server = new hapi.Server();

// read routes
router.importRoutes();

server.connection({
    host: config.application.host,
    port: config.application.port,
    routes: {
        cors: true
    }
});

// set up jwt
server.register(require("inert"), (err) => {
    if (!err) {
        console.log("success");
    }

    // register route
    router.routes.forEach((routeSet) => {
        if (routeSet && routeSet.default) {
            if (routeSet.default.length > 0) {
                routeSet.default.forEach((route) => {
                    console.log(serverConstant.attachRouteMessage(route.path));
                    server.route(route);
                });
            }
        }
    });
});

server.start(err => {
    if (err) {
        console.error(serverConstant.serverErrorMessage);
        console.error(err);
    }

    server.on("response", (request) => {
        if (request.response.statusCode === 400) {
            console.log(`${request.info.remoteAddress} : ${request.method.toUpperCase()} ${request.url.path} --> ${request.response.statusCode} : Error: ${request.response.source.message}`);
        } else {
            console.log(`${request.info.remoteAddress} : ${request.method.toUpperCase()} ${request.url.path} --> ${request.response.statusCode}`);
        }
    });

    console.log(serverConstant.serverStartedMessage(server.info));
});