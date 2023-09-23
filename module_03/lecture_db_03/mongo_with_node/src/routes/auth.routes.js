import express from "express";
import { signin, signup, forgetPassword } from "../controllers/auth.controller";

const router = express.Router();

router.get("/signin", signin);
router.get("/signup", signup);
router.get("/forget-password", forgetPassword);

export default router;