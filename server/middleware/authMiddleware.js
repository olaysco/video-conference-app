const jwt = require("jsonwebtoken");
const config = require("../config");
const authMiddleware = (req, res, next) => {
  let token =
    req.body.token || req.query.tokem || req.headers["x-access-token"];
  console.log("token");
  if (token) {
    jwt.verify(token, config.appSecret, function(err, decoded) {
      if (err) {
        console.log(err);
        return res
          .status(401)
          .json({ success: false, message: "You are not authenticated" });
      } else {
        req.decoded = decoded;
        console.log("user authed");
        return next();
      }
    });
  } else {
    console.log("not token");
    return res
      .status(403)
      .send({ success: false, message: "No token provided" });
  }
  // if (!req.isAuthenticated()) {
  //   return res.status(401).send("You are not authenticated");
  // } else {
  //   return next();
  // }
};

module.exports = authMiddleware;
