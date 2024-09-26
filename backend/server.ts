import dotenv from "dotenv";
import express, { Request, Response } from "express";
import CORS from "cors";
import { connectToDatabase, ensureDatabaseConnection } from "./lib/util.ts";
import createUserRoute from "./routes/create-user-route.ts";
import authenticateUserRoute from "./routes/authenticate-user-route.ts";

dotenv.config();

const app = express();
app.use(CORS());
app.use(express.json());
const PORT = process.env.port; // Corrected environment variable

if (!PORT) {
  throw new Error("Please provide a valid port");
}

ensureDatabaseConnection();

app.use("/api", createUserRoute);
app.use("/api", authenticateUserRoute);

app.use((err: any, req: Request, res: Response, next: any) => {
  console.log(err);
  res.status(500).send(err);
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
