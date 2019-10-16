"use strict";

const config = require("./config");
const https = require("https");
const http = require("http");
const express = require("express");
require("mongoose").connect("mongodb://localhost/vdconf");
var os = require("os");
const app = express();
const io = (app.io = require("socket.io")());
const path = require("path");
const fs = require("fs");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());
app.use(
  cookieSession({
    name: "mysession",
    keys: ["vueauthrandomkey"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },

    (username, password, done) => {
      let user = users.find(user => {
        return user.email === username && user.password === password;
      });

      if (user) {
        done(null, user);
      } else {
        done(null, false, { message: "Incorrect username or password" });
      }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  let user = users.find(user => {
    return user.id === id;
  });
  done(null, user);
});
let users = [
  {
    id: 1,
    name: "Jude",
    email: "user@email.com",
    password: "password"
  },
  {
    id: 2,
    name: "Emma",
    email: "emma@email.com",
    password: "password2"
  }
];
app.post("/api/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(400).send([user, "Cannot log in", info]);
    }

    req.login(user, err => {
      res.send("Logged in");
    });
  })(req, res, next);
});
app.get("/api/logout", function(req, res) {
  req.logout();

  console.log("logged out");

  return res.send();
});
const authMiddleware = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(401).send("You are not authenticated");
  } else {
    return next();
  }
};
app.get("/api/user", authMiddleware, (req, res) => {
  let user = users.find(user => {
    return user.id === req.session.passport.user;
  });

  console.log([user, req.session]);

  res.send({ user: user });
});
var serverOptions = {
  key: fs.readFileSync(path.join(__dirname, "./keys/privatekey.pem")),
  cert: fs.readFileSync(path.join(__dirname, "./keys/certificate.pem"))
};

app.use(express.static(path.join(__dirname, "../dist")));
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const server = http.createServer(app);
// io.attach(server);
// io.sockets.on("connection", function(socket) {
//   function log() {
//     var array = ["Message from server:"];
//     array.push.apply(array, arguments);
//     socket.emit("log", array);
//   }

//   console.log("new connection");
//   socket.broadcast.emit("new coonect", "message");

//   io.sockets.emit(
//     "userJoined",
//     socket.id,
//     io.engine.clientsCount,
//     Object.keys(io.sockets.clients().sockets)
//   );

//   socket.on("message", function(message) {
//     log("Client said: ", message);
//     socket.broadcast.emit("message", message);
//   });

//   socket.on("signal", (told, message) => {
//     io.to(told).emit("signal", socket.id, message);
//   });

//   socket.on("create or join", function(room) {
//     log("Received request to create or join room " + room);

//     var clientsInRoom = io.sockets.adapter.rooms[room];
//     var numClients = clientsInRoom
//       ? Object.keys(clientsInRoom.sockets).length
//       : 0;
//     log("Room " + room + " now has " + numClients + " client(s)");

//     if (numClients === 0) {
//       socket.join(room);
//       log("Client ID " + socket.id + " created room " + room);
//       socket.emit("created", room, socket.id);
//     } else if (numClients === 1) {
//       log("Client ID " + socket.id + " joined room " + room);
//       io.sockets.in(room).emit("join", room);
//       socket.join(room);
//       socket.emit("joined", room, socket.id);
//       io.sockets.in(room).emit("ready");
//     } else {
//       socket.emit("full", room);
//     }
//   });

//   socket.on("ipaddr", function() {
//     var ifaces = os.networkInterfaces();
//     for (var dev in ifaces) {
//       ifaces[dev].forEach(function(details) {
//         if (details.family === "IPv4" && details.address !== "127.0.0.1") {
//           socket.emit("ipaddr", details.address);
//         }
//       });
//     }
//   });
// });

server.listen(config.PORT, () => {
  console.log(`Server Listening on port ${config.PORT}`);
});
