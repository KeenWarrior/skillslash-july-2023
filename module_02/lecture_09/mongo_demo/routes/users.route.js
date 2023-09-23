const express = require("express");
const userController = require("../controllers/users.controller");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.patch("/:id", userController.updateUserById);
router.delete("/:id", userController.deleteUserById);

module.exports = router;
