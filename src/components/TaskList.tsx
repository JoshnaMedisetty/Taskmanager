import { useState, useEffect } from 'react';
import { editTask, deleteTask, Task } from '../helpers/apiHelpers';

interface TaskListProps {
  tasks: Task[];
  refreshTasks: () => void;
}

export default function TaskList({ tasks, refreshTasks }: TaskListProps) {
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null); // Track the task being edited
  const [isLoading, setIsLoading] = useState(false);

  

  // Handle task updates
  const handleSave = async (taskId: string, updatedTitle: string, updatedDescription: string) => {
    try {
      await editTask(taskId, { title: updatedTitle, description: updatedDescription });
      setEditingTaskId(null); // Exit editing mode
      refreshTasks(); // Refresh tasks
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  // Handle task deletion
  const handleDelete = async (taskId: string) => {
    try {
      await deleteTask(taskId);
      refreshTasks();
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  useEffect(() => {
    refreshTasks();
  }, []);

  return (
    <div className="space-y-4">
      {isLoading ? (
        <p>Loading tasks...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-black">
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Edit</th>
              <th className="border px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id} className="bg-white text-black">
                {editingTaskId === task._id ? (
                  <>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        defaultValue={task.title}
                        className="border p-2 rounded w-full"
                        onChange={(e) => (task.title = e.target.value)} // Update the local task object
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        defaultValue={task.description}
                        className="border p-2 rounded w-full"
                        onChange={(e) => (task.description = e.target.value)} // Update the local task object
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleSave(task._id!, task.title, task.description)}
                        className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                      >
                        Save
                      </button>
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => setEditingTaskId(null)}
                        className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border px-4 py-2">{task.title}</td>
                    <td className="border px-4 py-2">{task.description}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => setEditingTaskId(task._id!)}
                        className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                      >
                        Edit
                      </button>
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleDelete(task._id!)}
                        className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
