const userController = require("../controllers/user.controller");
const express = require("express");
const { auth, rights } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", auth(), rights("getUsers"), userController.getUsers);

router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
