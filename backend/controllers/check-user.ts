import User from "../models/user.ts";
import { Request, Response } from "express";

export default async function checkUser(req: Request, res: Response) {
    try {
        const user = req.body;


        const response = await User.find(user);
        if(response.length > 0){
            
            return res.status(200).json({response})
        }

       return res.status(500).json({ message: "user not found" });

    } catch (error: any) {

        res.status(500).json({ message: error.message });
    }
}
