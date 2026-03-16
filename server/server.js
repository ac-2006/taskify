import e, { json } from "express";

const app = e()

app.use(json())

app.get("/",(req,res)=>{
      res.json("server is working fine !!")
})

app.listen(3000,console.log("server running on Port 3000"))