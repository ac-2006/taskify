import { useState } from "react";
import { updateTask } from "../services/api";

const TaskCard = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
    dueDate: task.dueDate || ""
  });

  const handleStatusToggle = async () => {
    const newStatus = task.status === "pending" ? "completed" : "pending";
    await updateTask(task._id, { status: newStatus });
    onUpdate();
  };

  const handleEditChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveEdit = async () => {
    await updateTask(task._id, editForm);
    setIsEditing(false);
    onUpdate();
  };

  const handleCancelEdit = () => {
    setEditForm({
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate || ""
    });
    setIsEditing(false);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 border-red-300";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "low": return "bg-green-100 text-green-800 border-green-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusColor = (status) => {
    return status === "completed" ? "bg-green-100 text-green-800 border-green-300" : "bg-orange-100 text-orange-800 border-orange-300";
  };

  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 transform hover:scale-105 ${task.status === "completed" ? "border-green-500" : "border-orange-500"}`}>
      <div className="flex justify-between items-start mb-4">
        {isEditing ? (
          <input
            name="title"
            value={editForm.title}
            onChange={handleEditChange}
            className="text-xl font-bold border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        ) : (
          <h2 className={`text-xl font-bold ${task.status === "completed" ? "line-through text-gray-500" : "text-gray-800"}`}>
            {task.title}
          </h2>
        )}
        <div className="flex space-x-2 ml-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(task.status)}`}>
            {task.status}
          </span>
        </div>
      </div>

      {isEditing ? (
        <div className="space-y-3 mb-4">
          <textarea
            name="description"
            value={editForm.description}
            onChange={handleEditChange}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Description"
          />
          <select
            name="priority"
            value={editForm.priority}
            onChange={handleEditChange}
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <input
            type="date"
            name="dueDate"
            value={editForm.dueDate}
            onChange={handleEditChange}
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ) : (
        <p className={`text-gray-600 mt-2 mb-4 ${task.status === "completed" ? "line-through" : ""}`}>
          {task.description || "No description"}
        </p>
      )}

      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <span>Created: {new Date(task.createdAt).toLocaleDateString()}</span>
        {task.dueDate && <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>}
      </div>

      <div className="flex justify-between items-center space-x-2">
        <button
          onClick={handleStatusToggle}
          className={`px-4 py-2 rounded-lg font-medium transition duration-200 flex-1 ${
            task.status === "pending"
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
        >
          {task.status === "pending" ? "Mark Complete" : "Mark Pending"}
        </button>

        {isEditing ? (
          <div className="flex space-x-2">
            <button
              onClick={handleSaveEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => onDelete(task._id)}
          className="text-red-500 hover:text-red-700 font-medium transition duration-200 px-4 py-2 rounded-lg hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;