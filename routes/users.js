var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");

router.post("/sign-up", userController.new_user_post);
router.post("/sign-in", userController.new_session_post);

module.exports = router;
