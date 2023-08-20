const passport = require("passport");
const authController = require("../controllers/auth.controller");

const express = require("express");
const { auth } = require("../middlewares/auth.middleware");
const router = express.Router();
const validate = require("../middlewares/validate.middleware");
const { register } = require("../validations/auth.validation");

router.post("/login", authController.login);
router.post("/register", validate(register), authController.register);
router.get("/profile", auth(), authController.userProfile);

module.exports = router;
