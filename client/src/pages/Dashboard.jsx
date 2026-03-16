import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import AddTask from "../components/AddTask";
import { getTasks, createTask, deleteTask, updateTask } from "../services/api";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filters, setFilters] = useState({ status: "", priority: "" });
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const res = await getTasks();
      setTasks(res.data);
      setFilteredTasks(res.data);
    } catch (error) {
      console.error("Error loading tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    let filtered = tasks;
    if (filters.status) {
      filtered = filtered.filter(task => task.status === filters.status);
    }
    if (filters.priority) {
      filtered = filtered.filter(task => task.priority === filters.priority);
    }
    setFilteredTasks(filtered);
  }, [tasks, filters]);

  const handleAdd = async (data) => {
    await createTask(data);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleUpdate = () => {
    loadTasks();
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const clearFilters = () => {
    setFilters({ status: "", priority: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Taskify Dashboard
          </h1>
          <p className="text-gray-600 text-lg">Manage your tasks efficiently and beautifully</p>
        </div>

        <AddTask onAdd={handleAdd} />

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-200 backdrop-blur-sm bg-opacity-95">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
            <span className="mr-2">🔍</span> Filter Tasks
          </h2>
          <div className="flex flex-wrap gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
              >
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
              <select
                name="priority"
                value={filters.priority}
                onChange={handleFilterChange}
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
              >
                <option value="">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <button
              onClick={clearFilters}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-200 shadow-sm"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Tasks Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-500 text-lg">Loading your tasks...</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </div>
        )}

        {!loading && filteredTasks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-500 text-lg">No tasks found. Add a new task to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;