var express = require("express");
var router = express.Router();
var campgroundController = require("../controllers/campgroundController");

router.get("/campground/:id", campgroundController.show);
router.post("/campground/new", campgroundController.new_camp_post);

module.exports = router;
