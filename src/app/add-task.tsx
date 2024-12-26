"use client";

import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { fetchTasks, Task } from "../helpers/apiHelpers";

export default function AddTaskPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showTaskForm, setShowTaskForm] = useState(false);

  const loadTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error("Failed to load tasks:", error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="min-h-screen bg-white text-center p-8">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-black font-semibold">Welcome</h1>
        
      </div>

      {/* Middle Section */}
      <div className="mt-12">
        <h2 className="text-4xl font-bold text-red-700">Task Manager</h2>
        <p className="text-gray-500 mt-2">Add, edit, and delete your tasks easily.</p>

        {/* Add Task Button */}
        <button
          onClick={() => setShowTaskForm(!showTaskForm)}
          className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          {showTaskForm ? "Close Form" : "Add Task"}
        </button>
      </div>

      {/* Task Form */}
      {showTaskForm && (
        <div className="mt-6">
          <TaskForm
            onSuccess={() => {
              setShowTaskForm(false);
              loadTasks();
            }}
          />
        </div>
      )}

      {/* Task List */}
      <div className="mt-12">
        <TaskList tasks={tasks} refreshTasks={loadTasks} />
      </div>
    </div>
  );
}
