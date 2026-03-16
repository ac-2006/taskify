import express from "express"
import Task from "../models/Task.js"
import { createTask, deleteTask, getTasks, updateTask } from "../controllers/taskControllers.js"

const router = express()

router.post("/tasks",createTask)

router.get("/tasks",getTasks)

router.put("/tasks/:id",updateTask)

router.delete("/tasks/:id",deleteTask)

export default router