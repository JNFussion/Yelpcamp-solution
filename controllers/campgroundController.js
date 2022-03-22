var Campground = require("../models/campground");
const { body, validationResult } = require("express-validator");
var passport = require("passport");
const Comment = require("../models/comment");

exports.index = (req, res, next) => {
  if (req.query.term) {
    Campground.find({ name: req.query.term }).exec((err, result) => {
      if (err) {
        return next(err);
      }
      console.log(result);
      if (result === null) {
        res.send({ url: "/campgrounds" });
      }
      res.send({ url: result[0].url });
    });
  } else {
    Campground.find().exec((err, camps) => {
      if (err) {
        return next(err);
      }
      res.send(camps);
    });
  }
};

exports.show = (req, res, next) => {
  Campground.findById(req.params.id)
    .populate("comments")
    .exec((err, camp) => {
      if (err) {
        return next(err);
      }
      res.send(camp);
    });
};

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
  body("author").trim().escape(),
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
        author: req.body.author,
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

exports.new_comment_post = [
  passport.authenticate("jwt", { session: false }),
  body("description")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Campground must have a description"),
  body("author").trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(errors);
    } else {
      Campground.findById(req.params.id).exec((err, camp) => {
        if (err) {
          return next(err);
        }
        const comment = new Comment({
          description: req.body.description,
          author: req.body.author,
          create_at: new Date(),
          campground: camp._id,
        });
        comment.save((err) => {
          if (err) {
            return next(err);
          }
          camp.comments = [...camp.comments, comment._id];

          camp.save((err) => {
            if (err) {
              return next(err);
            }
            res.send({ url: camp.url });
          });
        });
      });
    }
  },
];
