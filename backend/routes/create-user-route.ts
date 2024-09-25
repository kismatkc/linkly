import express from "express";
import createUser from "../controllers/create-user.ts";
const router = express.Router();
router.post("/create-user", createUser)

export default router