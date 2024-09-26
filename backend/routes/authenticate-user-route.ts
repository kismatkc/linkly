import express from "express";
import authenticateUser from "../controllers/authenticate-user.ts";
const router = express.Router();
router.post("/authenticate-user", authenticateUser);

export default router;
