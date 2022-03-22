var express = require("express");
var router = express.Router();
var campgroundController = require("../controllers/campgroundController");

router.get("/campgrounds", campgroundController.index);
router.get("/campground/:id", campgroundController.show);
router.post("/campground/new", campgroundController.new_camp_post);
router.post(
  "/campground/:id/comment/new",
  campgroundController.new_comment_post
);

module.exports = router;
