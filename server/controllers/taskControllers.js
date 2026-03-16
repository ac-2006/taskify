import Task from "../models/Task.js"

export const createTask = async (req,res)=>{
      try{
            const task = new Task(req.body)
            const savedTask = await task.save()
            res.status(201).json(savedTask)
      }catch(e){
            res.status(500).json({
                  message : e.message
            })
      }
}

export const getTasks = async (req, res) => {
  try {
    const { status, priority } = req.query;

    let filter = {};

    if (status) {
      filter.status = status;
    }

    if (priority) {
      filter.priority = priority;
    }

    const tasks = await Task.find(filter);

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};