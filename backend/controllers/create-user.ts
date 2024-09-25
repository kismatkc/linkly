import User from "../models/user.ts";
import { Request, Response } from "express";

export default async function createUser(req: Request, res: Response){
    try {
       const user = req.body;
        // const response = await User.create(user)
        // res.status(201).json(response)
        res.status(201).json({message: "User created", user})
    } catch (error: any) {
       res.status(500).json({message: error.message})
    }
    
}