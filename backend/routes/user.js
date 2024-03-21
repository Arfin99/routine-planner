import express from "express";
const router = express.Router();
import { userRegistration } from "../controllers/user.js";

router.post("/", userRegistration);

export default router;
