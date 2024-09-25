import dotenv from "dotenv";
import express from "express";
import CORS from "cors";
import {connectToDatabase,ensureDatabaseConnection}  from "./lib/util.ts";
import createUserRoute from "./routes/create-user-route.ts";

dotenv.config();

const app = express();
app.use(CORS());
const PORT = process.env.port; // Corrected environment variable

if (!PORT) {
  throw new Error("Please provide a valid port");
}


ensureDatabaseConnection()


app.use("/api",createUserRoute)

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
