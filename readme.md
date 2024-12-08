# Checklist and Task API

API for managing checklists and tasks

Version: 1.0.0

## API URL

https://checklist-backend-5r30.onrender.com/

## Endpoints

### Checklists

#### Get all checklists

- **GET** `/checklists`
- **Response**: 200 - Successful response
  - Content: Array of Checklist objects

#### Create a new checklist

- **POST** `/checklists`
- **Request Body**: CreateChecklistDto
- **Response**: 201 - Checklist created
  - Content: Checklist object

#### Get a specific checklist

- **GET** `/checklists/{id}`
- **Parameters**:
  - `id` (path, required): integer
- **Response**:
  - 200 - Successful response
    - Content: Checklist object
  - 404 - Checklist not found

#### Update a checklist

- **PATCH** `/checklists/{id}`
- **Parameters**:
  - `id` (path, required): integer
- **Request Body**: UpdateChecklistDto
- **Response**:
  - 200 - Checklist updated
    - Content: Checklist object
  - 404 - Checklist not found

#### Delete a checklist

- **DELETE** `/checklists/{id}`
- **Parameters**:
  - `id` (path, required): integer
- **Response**:
  - 200 - Checklist deleted
    - Content: Checklist object
  - 404 - Checklist not found

### Tasks

#### Get all tasks

- **GET** `/tasks`
- **Response**: 200 - Successful response
  - Content: Array of Task objects

#### Create a new task

- **POST** `/tasks`
- **Request Body**: CreateTaskDto
- **Response**: 201 - Task created
  - Content: Task object

#### Get a specific task

- **GET** `/tasks/{id}`
- **Parameters**:
  - `id` (path, required): integer
- **Response**:
  - 200 - Successful response
    - Content: Task object
  - 404 - Task not found

#### Update a task

- **PATCH** `/tasks/{id}`
- **Parameters**:
  - `id` (path, required): integer
- **Request Body**: UpdateTaskDto
- **Response**:
  - 200 - Task updated
    - Content: Task object
  - 404 - Task not found

#### Delete a task

- **DELETE** `/tasks/{id}`
- **Parameters**:
  - `id` (path, required): integer
- **Response**:
  - 200 - Task deleted
    - Content: Task object
  - 404 - Task not found

## Data Models

### ChecklistStatus

Enum: `not started`, `in progress`, `done`

### Checklist

- `id`: integer
- `title`: string
- `description`: string
- `status`: ChecklistStatus
- `tasks`: array of Task objects

### CreateChecklistDto

- `title`: string (required)
- `description`: string (required)
- `status`: ChecklistStatus

### UpdateChecklistDto

- `title`: string
- `description`: string
- `status`: ChecklistStatus

### Task

- `id`: integer
- `title`: string
- `isChecked`: boolean
- `checklist`: Checklist object

### CreateTaskDto

- `title`: string (required)
- `isChecked`: boolean
- `checklistId`: integer

### UpdateTaskDto

- `title`: string
- `isChecked`: boolean
- `checklistId`: integer
