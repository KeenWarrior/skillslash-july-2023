const userController = require("../controllers/user.controller");
const express = require("express");
const { auth, rights } = require("../middlewares/auth.middleware");
const router = express.Router();
const validate = require("../middlewares/validate.middleware");
const { createUser } = require("../validations/user.validation");


router.post("/", validate(createUser), auth(), rights("createUsers"),  userController.createUser);
router.get("/", userController.getUsers);

router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
