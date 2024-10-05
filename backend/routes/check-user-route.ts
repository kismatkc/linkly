import express from "express";
import checkUser from "../controllers/check-user.ts";
const router = express.Router();
router.post("/check-user", checkUser)

export default router