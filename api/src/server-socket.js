/* eslint-disable */

var fs = require("fs");
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
var middleware = require('socketio-wildcard')();
var client_id = "";
import axios from 'axios';
import config from "./config/config";
import BookingDetails from "./db/model/booking-details";

var host = config.application.host;
var port = config.application.port;

var userStatus, clientId;

// declare namespace
var qrcode_nsp = io.of("/qrcode");
qrcode_nsp.use(middleware);

server.listen(3002, () => {
  console.log("Socket server is up on port 3002")
});

qrcode_nsp.on("connection", (socket) => {
  console.log("NEW USER CONNECTED");

  socket.on("SEND_BARCODE", (client_id) => {
    console.log("client_id: " + client_id)
    gateControl(client_id);
    setStatus(client_id);
  });
  // socket.on("GATE_CONTROL", (txtOpen) => {
  //   console.log(txtOpen)
  //   console.log("client id is: " + client_id)
  //   gateControl(txtOpen, client_id)
  // })
});

function gateControl(client_id) {

  axios.post(`http://${host}:${port}/booking-details/get-userbooking-status?ClientId=${client_id}`)
    .then(function (response) {

      userStatus = response.data.data.status;

      if (userStatus === 0 || userStatus === 1) {
        fs.writeFile("./src/session/gate.txt", "open", (err) => {
          if (err) throw err;
          console.log("Gate open")
        });
        setTimeout(function () {
          fs.writeFile("./src/session/gate.txt", "close", (err) => {
            if (err) throw err;
            console.log("Gate closed")
          });
        }, 6000)
      }
    })
    .catch(function (error) {
      console.log(error);
    })
}

function setStatus(client_id) {

  let statusMessage = "";

  axios.post(`http://${host}:${port}/booking-details/set-user-status?ClientId=${client_id}`)
    .then(function (response) {
      if (response.data.status_before_changed === 0) {
        statusMessage = " checkin"
      } else {
        statusMessage = " checkout"
      }
      console.log("Client id " + client_id + statusMessage + " success");
    })
    .catch(function (error) {
      console.log(error);
    })
};