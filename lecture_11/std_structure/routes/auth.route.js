const passport = require("passport");
const authController = require("../controllers/auth.controller");

const express = require("express");
const router = express.Router();

router.post("/login", authController.login);
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  authController.userProfile
);

module.exports = router;
