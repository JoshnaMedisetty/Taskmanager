import { useState } from "react";
import { addTask, editTask, Task } from "../helpers/apiHelpers";

interface TaskFormProps {
  existingTask?: Task;
  onSuccess: () => void; // Callback to refresh the task list
}

export default function TaskForm({ existingTask, onSuccess }: TaskFormProps) {
  const [title, setTitle] = useState(existingTask?.title || "");
  const [description, setDescription] = useState(existingTask?.description || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (existingTask) {
        await editTask(existingTask._id!, { title, description });
      } else {
        await addTask({ title, description });
      }
      onSuccess();
    } catch (error) {
      console.error("Failed to save task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded bg-gray-50">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border p-2 rounded text-black"
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full border p-2 rounded text-black"
      />
      <button
        type="submit"
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        {existingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}
