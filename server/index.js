"use strict";
require("dotenv").config();
const config = require("./config");
const https = require("https");
const http = require("http");
const express = require("express");
const uri =
  "mongodb+srv://olaysco:riliwan24@cluster0-rphn3.mongodb.net/test?retryWrites=true&w=majority";
require("mongoose").connect(uri);
var os = require("os");
const app = express();
const io = (app.io = require("socket.io")());
const path = require("path");
const fs = require("fs");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");
const userRouter = require("./routes/userRouter")(User, passport);
const bcrypt = require("bcrypt");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-access-token"
  );
  next();
});

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
      User.findOne({ email: username }, (err, user) => {
        if (err || !user || user.length < 1) {
          done(null, false, { message: "Incorrect username or password" });
        } else {
          bcrypt.hashSync(password, 10);
          bcrypt.compare(password, user.password, function(err, res) {
            if (err) {
              done(null, false, { message: "Incorrect username or password" });
            }
            if (res) {
              done(null, user);
            } else {
              done(null, false, { message: "Incorrect username or password" });
            }
          });
        }
      });
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  let user = User.find((err, user) => {
    return user.id === id;
  });
  done(null, user);
});

// var serverOptions = {
//   key: fs.readFileSync(path.join(__dirname, "./keys/privatekey.pem")),
//   cert: fs.readFileSync(path.join(__dirname, "./keys/certificate.pem"))
// };

app.use("/api", userRouter);
app.use(express.static(path.join(__dirname, "../dist")));
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server Listening on port ${config.PORT}`);
});
