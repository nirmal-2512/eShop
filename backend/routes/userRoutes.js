import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// Public routes (NO auth required)
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;