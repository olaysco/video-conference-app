const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");
const authMiddleware = require("../middleware/authMiddleware");

function routes(User, passport) {
  const userRouter = express.Router();
  userRouter.route("/user/:userId").get(authMiddleware, (req, res) => {
    const query = req.params.userId;
    User.findById(query, (err, user) => {
      console.log(user);
      if (err) {
        return res.send(err);
      }
      if (user) {
        return res.status(201).json({
          msg: "information fetched",
          data: { user: user },
          success: true
        });
      }
    });
  });

  userRouter.route("/register").post((req, res) => {
    if (
      isNullOrundefined(req.body.email) ||
      isNullOrundefined(req.body.name) ||
      isNullOrundefined(req.body.password) ||
      isNullOrundefined(req.body.username)
    ) {
      console.log(req);
      return res
        .status(401)
        .json({ error: "all fields are important", success: false });
    }
    User.find({ email: req.body.email }, (err, user) => {
      if (user.length > 0 || err !== null) {
        console.log("email not available");
        return res
          .status(401)
          .json({ error: "email not available", success: false });
      }
      bcrypt.hash(req.body.password, 10, function(err, hash) {
        req.body.password = hash;
        const user = new User(req.body);
        user.save(err => {
          if (err) {
            console.log(err);
            console.log("unable to save to database");
            return res.status(401).json(err);
          }
          delete user.password;
          const payload = {
            user: user
          };
          let token = jwt.sign(payload, config.appSecret, {
            expiresIn: "24h"
          });
          return res.status(201).json({
            msg: "registeration successful",
            data: { user: user, token: token },
            success: true
          });
        });
      });
    });
  });

  userRouter.route("/login").post((req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(400).send([user, "Cannot log in", info]);
      }
      req.login(user, err => {
        delete user["password"];
        const payload = { user: user };
        let token = jwt.sign(payload, config.appSecret, { expiresIn: "24h" });
        return res.json({
          data: {
            token: token,
            user: user
          },
          success: true
        });
      });
    })(req, res, next);
  });

  userRouter.route("/logout").get(function(req, res) {
    console.log("attempting to logout");
    //req.logout();
    console.log("logged out");
    return res.status(200).send({ success: true });
  });

  return userRouter;
}

function isNullOrundefined(str) {
  if (str === null || str === undefined || str.trim().length === 0) {
    return true;
  }
  return false;
}

module.exports = routes;
