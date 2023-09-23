import { getUserById, deleteUserById, createUser, nearbyUsers } from "../controllers/user.controller";
import { Router } from "express";

const router = Router();

router.get("/nearby", nearbyUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);
router.post("/", createUser);


export default router;
