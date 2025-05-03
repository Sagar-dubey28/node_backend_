import express from "express";
import { userLogin, userSignup } from "../controller/auth.controller.js";

const router = express.Router();

router.get("/signup", userSignup);
router.get("/login", userLogin);

export default router;
