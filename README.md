# 🗂️ Task Management System

Welcome to the **Task Management System**! This application helps users manage tasks with features for creating, editing, and deleting tasks. Additionally, it includes a dashboard for task management, notifications for upcoming deadlines, and filtering options.

## 📜 Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Endpoints](#api-endpoints)
5. [Testing](#testing)
6. [Contributing](#contributing)
7. [License](#license)

## 🚀 Features

- **Create, Edit, and Delete Tasks**: Manage your tasks with ease.
- **Dashboard**: View and manage tasks in a user-friendly interface.
- **Notifications**: Get notified about tasks nearing their deadlines.
- **Filtering**: Filter tasks by their completion status (Completed or Pending).

## 🛠️ Installation

To get started with this project, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/task-management-system.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd task-management-system
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Set Up Environment Variables**:
    Create a `.env` file in the root directory and add the following variables:
    ```plaintext
    DB_USER=your_db_user
    DB_HOST=your_db_host
    DB_NAME=your_db_name
    DB_PASS=your_db_password
    DB_PORT=your_db_port
    PORT=5000
    ```

5. **Start the Application**:
    ```bash
    npm start
    ```

## 🖥️ Usage

Once the application is running, open your browser and go to [http://localhost:5000](http://localhost:5000) to access the application.

- **Dashboard**: Manage tasks and access the task form.
- **Task Form**: Create and edit tasks.

## 🔧 API Endpoints

### **Tasks**

- **GET /api/tasks**: Retrieve all tasks.
- **POST /api/tasks**: Create a new task.
- **PUT /api/tasks/:id**: Update an existing task.
- **DELETE /api/tasks/:id**: Delete a task.

## 🧪 Testing

To test the application, use Selenium WebDriver. Make sure your application is running at [http://localhost:5000](http://localhost:5000).

1. **Navigate to the Selenium tests directory**.
2. **Run the tests**:
    ```bash
    pytest
    ```

## 🤝 Contributing

We welcome contributions! To contribute to this project:

1. **Fork the Repository**.
2. **Create a Branch**:
    ```bash
    git checkout -b feature/new-feature
    ```
3. **Make Your Changes**.
4. **Commit Your Changes**:
    ```bash
    git commit -am 'Add new feature'
    ```
5. **Push to the Branch**:
    ```bash
    git push origin feature/new-feature
    ```
6. **Create a Pull Request**.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy Task Managing! 🎉


