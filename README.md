# Task Management Application

This is a full-stack task management application that allows users to create, view, edit, and delete tasks. The application is built using modern technologies for both the frontend and backend.

---

## Features

- Add new tasks with a title and description.
- View all tasks in a table format.
- Edit tasks directly within the table.
- Delete tasks from the list.
- Responsive and clean user interface.

---

## Frontend

### Technologies Used
- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **Language:** TypeScript


### Key Components

#### `TaskForm.tsx`
- A form for adding new tasks.
- Includes input fields for the task title and description.
- Validates input fields to ensure they are not empty.

#### `TaskItem.tsx`
- Represents a single task within the task list.
- Handles individual task operations such as rendering and interactivity.

#### `TaskList.tsx`
- Displays all tasks in a table format.
- Supports inline editing for tasks.
- Provides buttons for editing and deleting tasks.

#### `apiHelpers.ts`
- Contains utility functions for interacting with the backend API.
- Functions include:
  - `fetchTasks`: Retrieves the list of tasks.
  - `addTask`: Adds a new task.
  - `editTask`: Updates an existing task.
  - `deleteTask`: Deletes a task.

### Styling
- Tailwind CSS is used for styling components.
- Classes such as `bg-gray-50`, `text-black`, `border`, and `rounded` provide a clean and modern UI.

---

## Backend

### Technologies Used
- **Framework:** Node.js
- **API Development:** Next.js API routes
- **Database:** MongoDB

### API Endpoints

#### Add Task
- **URL:** `/api/tasks`
- **Method:** `POST`
- **Description:** Adds a new task to the database.
- **Request Body:**
  ```json
  {
    "title": "Task Title",
    "description": "Task Description"
  }
  ```

#### Fetch Tasks
- **URL:** `/api/tasks`
- **Method:** `GET`
- **Description:** Fetches all tasks from the database.

#### Edit Task
- **URL:** `/api/tasks/{id}`
- **Method:** `PUT`
- **Description:** Updates the title and/or description of a task.
- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description"
  }
  ```

#### Delete Task
- **URL:** `/api/tasks/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a task by its ID.

### Database Schema
The database uses MongoDB to store tasks. Each task is represented by the following schema:
```json
{
  "_id": "Unique Identifier",
  "title": "Task Title",
  "description": "Task Description"
}
```

---

## How to Run the Application

### Prerequisites
- Node.js installed.
- MongoDB database setup.

### Steps
1. Clone the repository:
   ```bash
   git clone 
   ```

2. Navigate to the project directory:
   ```bash
   cd task-manager
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Configure the `.env` file:
   ```env
   MONGO_URI= mongodb+srv://joshnamedisetty0107:qlgZWdOXPoNNk8ir@cluster0.15imc.mongodb.net/
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Future Improvements
- Add user authentication.
- Support task prioritization and categorization.
- Implement due dates and reminders for tasks.
- Enhance UI/UX with animations.

---

## License
This project is licensed under the MIT License.

