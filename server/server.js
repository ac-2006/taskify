import { configDotenv } from "dotenv";
import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/taskRoutes.js";

configDotenv()

const app = express()
app.use(cors());
app.use(json())

await mongoose.connect(process.env.MONGO_URI).then(() => console.log("mongo db connection get succesfull"))

const PORT = process.env.PORT
app.listen(PORT,() => console.log("server running on Port 3000"))

app.use("/api",router)