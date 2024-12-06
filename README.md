
# Node Courses API

This project is a **Node.js API** designed to manage courses. It provides endpoints for creating, updating, retrieving, and deleting courses. The application is built using modern **Node.js** development practices and structured for easy scalability and maintainability.

## Features
- **CRUD Operations**: Manage courses (Create, Read, Update, Delete).
- Organized project structure for scalability.
- Built with simplicity and performance in mind.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for handling routing and middleware.
- **MongoDB** (or other database): To store course data (to be configured).

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/3laaElsadany/node_courses.git
   ```
2. Navigate to the project directory:
   ```bash
   cd node_courses
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Courses Endpoints

### 1. Get All Courses
- **URL**: `/api/courses`
- **Method**: `GET`

### 2. Get Course by ID
- **URL**: `/api/courses/:id`
- **Method**: `GET`

### 3. Create a New Course
- **URL**: `/api/courses`
- **Method**: `POST`

### 4. Update a Course
- **URL**: `/api/courses/:id`
- **Method**: `PATCH`

### 5. Delete a Course
- **URL**: `/api/courses/:id`
- **Method**: `DELETE`

## Users Endpoints

### 1. Get All Users
- **URL**: `/api/users`
- **Method**: `GET`

### 2. Create User
- **URL**: `/api/users/register`
- **Method**: `POST`

### 3. User Login
- **URL**: `/api/users/login`
- **Method**: `POST`
