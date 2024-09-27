import { Request, Response } from "express";
import User from "../models/user.ts";
import bcrypt from "bcrypt";

export default async function authenticateUser(req: Request, res: Response) {
  const { email, password } = req.body;
  console.log(email,password);
  

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).send("Invalid credentials");
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return res.status(200).json({  user });
    } else {
      return res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Authentication failed please try again" });
  }
}
