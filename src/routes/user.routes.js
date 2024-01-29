import { Router } from "express";
import { registerUserDetails } from "../controllers/user.controller.js";

const router = Router();
router.route("/register").post(registerUserDetails)

export default router;