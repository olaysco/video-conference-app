"use strict";

const config = require("./config");
const http = require("http");
const express = require("express");
var os = require("os");
const app = express();
const io = (app.io = require("socket.io")());
const path = require("path");

app.use(express.static(path.join(__dirname, "../dist")));
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const server = http.createServer(app);
io.attach(server);
io.sockets.on("connection", function(socket) {
  // convenience function to log server messages on the client
  function log() {
    var array = ["Message from server:"];
    array.push.apply(array, arguments);
    socket.emit("log", array);
  }
  console.log("new connection");

  socket.on("message", function(message) {
    log("Client said: ", message);
    // for a real app, would be room-only (not broadcast)
    socket.broadcast.emit("message", message);
  });

  socket.on("create or join", function(room) {
    log("Received request to create or join room " + room);

    var clientsInRoom = io.sockets.adapter.rooms[room];
    var numClients = clientsInRoom
      ? Object.keys(clientsInRoom.sockets).length
      : 0;
    log("Room " + room + " now has " + numClients + " client(s)");

    if (numClients === 0) {
      socket.join(room);
      log("Client ID " + socket.id + " created room " + room);
      socket.emit("created", room, socket.id);
    } else if (numClients === 1) {
      log("Client ID " + socket.id + " joined room " + room);
      io.sockets.in(room).emit("join", room);
      socket.join(room);
      socket.emit("joined", room, socket.id);
      io.sockets.in(room).emit("ready");
    } else {
      // max two clients
      socket.emit("full", room);
    }
  });

  socket.on("ipaddr", function() {
    var ifaces = os.networkInterfaces();
    for (var dev in ifaces) {
      ifaces[dev].forEach(function(details) {
        if (details.family === "IPv4" && details.address !== "127.0.0.1") {
          socket.emit("ipaddr", details.address);
        }
      });
    }
  });
});

server.listen(config.PORT, () => {
  console.log(`Server Listening on port ${config.PORT}`);
});
