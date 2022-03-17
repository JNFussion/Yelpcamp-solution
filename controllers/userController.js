var cors = require("cors");
var User = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SIGN UP

exports.new_user_post = [
  cors(),
  body("username")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Username must be specified"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characteres")
    .escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(errors);
    } else {
      bcryptjs.hash(req.body.password, 10, (err, hasedPassword) => {
        if (err) {
          return next(err);
        }
        const user = new User({
          username: req.body.username,
          password: hasedPassword,
        }).save((err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/");
        });
      });
    }
  },
];

// SIGN IN

exports.new_session_post = (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: "Auth Failed" });
    }
    bcryptjs.compare(password, user.password, (err, result) => {
      if (result) {
        const opts = {};
        opts.expiresIn = 120;
        const secret = process.env.SESSION_SECRET;
        const token = jwt.sign({ username }, secret, opts);
        return res.status(200).json({
          message: "Auth Passed",
          token,
          username,
        });
      } else {
        return res.status(401).json({ message: "Auth Failed" });
      }
    });
  });
};
