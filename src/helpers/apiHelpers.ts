export interface Task {
    _id?: string;
    title: string;
    description: string;
    completed?: boolean;
  }
  
  // Fetch all tasks
  export async function fetchTasks(): Promise<Task[]> {
    const response = await fetch('/api/tasks');
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    return response.json();
  }
  
  // Add a new task
  export async function addTask(task: Omit<Task, '_id'>): Promise<Task> {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error('Failed to add task');
    }
    return response.json();
  }
  
  // Update an existing task
  export async function editTask(taskId: string, updatedTask: Partial<Task>): Promise<Task> {
    const response = await fetch(`/api/tasks?id=${taskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });
  
    if (!response.ok) {
      throw new Error('Failed to edit task');
    }
  
    return response.json();
  }
  
  
  
  // Delete a task
  export async function deleteTask(taskId: string): Promise<{ message: string }> {
    const response = await fetch(`/api/tasks?id=${taskId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
    return response.json();
  }

  

  