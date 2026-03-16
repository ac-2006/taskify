import { useState } from "react";

const AddTask = ({ onAdd }) => {

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "medium",
    status: "pending",
    dueDate: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);

    setForm({
      title: "",
      description: "",
      priority: "medium",
      status: "pending",
      dueDate: ""
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-200"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Task</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="title"
          placeholder="Task title"
          value={form.title}
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="border border-gray-300 p-3 w-full mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="3"
      />

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 mt-4 font-medium"
      >
        Add Task
      </button>

    </form>
  );
};

export default AddTask;