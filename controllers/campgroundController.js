var Campground = require("../models/campground");
const { body, validationResult } = require("express-validator");
var passport = require("passport");

exports.show = (req, res, next) => {};

exports.new_camp_post = [
  passport.authenticate("jwt", { session: false }),
  body("name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Campground must have a name"),
  body("price")
    .trim()
    .isLength({ min: 1 })
    .isNumeric()
    .escape()
    .withMessage("Campground must be a number"),
  body("image")
    .trim()
    .isURL()
    .escape()
    .withMessage("Campground must be a valid URL."),
  body("description")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Campground must have a description"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(errors);
    } else {
      const campground = new Campground({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
      });
      campground.save((err) => {
        if (err) {
          return next(err);
        }
        res.send({ url: campground.url });
      });
    }
  },
];
