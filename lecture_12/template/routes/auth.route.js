const passport = require("passport");
const authController = require("../controllers/auth.controller");

const express = require("express");
const { auth } = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/login", authController.login);
router.get("/profile", auth(), authController.userProfile);

module.exports = router;
