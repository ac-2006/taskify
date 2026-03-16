import { configDotenv } from "dotenv";
import express, { json } from "express";
import mongoose from "mongoose";
configDotenv()

const app = express()
app.use(json())

await mongoose.connect(process.env.MONGO_URI).then(() => console.log("mongo db connection get succesfull"))

app.get("/",(req,res)=>{
      res.json("server is working fine !!")
})

const PORT = process.env.PORT
app.listen(PORT,() => console.log("server running on Port 3000"))