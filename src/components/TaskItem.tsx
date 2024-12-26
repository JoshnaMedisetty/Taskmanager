import { deleteTask, Task } from "../helpers/apiHelpers";

interface TaskItemProps {
  task: Task;
  refreshTasks: () => void;
}

export default function TaskItem({ task, refreshTasks }: TaskItemProps) {
  const handleDelete = async () => {
    try {
      await deleteTask(task._id!);
      refreshTasks();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <tr>
      <td className="border px-4 py-2 text-black">{task.title}</td>
      <td className="border px-4 py-2 text-black">{task.description}</td>
      <td className="border px-4 py-2">
        <button
          className="text-white bg-red-600 px-2 py-1 rounded hover:bg-red-700"
          onClick={() => console.log("Edit logic here")}
        >
          Edit
        </button>
      </td>
      <td className="border px-4 py-2">
        <button
          className="text-white bg-red-600 px-2 py-1 rounded hover:bg-red-700"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
