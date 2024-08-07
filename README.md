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

# 🗂️ Sistema de Gestión de Tareas

¡Bienvenido al **Sistema de Gestión de Tareas**! Esta aplicación permite a los usuarios gestionar tareas con características para crear, editar y eliminar tareas. Además, incluye un panel de control para la gestión de tareas, notificaciones para fechas límite próximas y opciones de filtrado.

## 📜 Tabla de Contenidos

1. [Características](#características)
2. [Instalación](#instalación)
3. [Uso](#uso)
4. [Endpoints de la API](#endpoints-de-la-api)
5. [Pruebas](#pruebas)
6. [Contribuciones](#contribuciones)
7. [Licencia](#licencia)

## 🚀 Características

- **Crear, Editar y Eliminar Tareas**: Gestiona tus tareas con facilidad.
- **Panel de Control**: Visualiza y gestiona tareas en una interfaz amigable.
- **Notificaciones**: Recibe notificaciones sobre tareas próximas a su fecha límite.
- **Filtrado**: Filtra tareas por su estado de finalización (Completadas o Pendientes).

## 🛠️ Instalación

Para comenzar con este proyecto, sigue estos pasos:

1. **Clonar el Repositorio**:
    ```bash
    git clone https://github.com/tuusuario/sistema-gestion-tareas.git
    ```

2. **Navegar al Directorio del Proyecto**:
    ```bash
    cd sistema-gestion-tareas
    ```

3. **Instalar Dependencias**:
    ```bash
    npm install
    ```

4. **Configurar Variables de Entorno**:
    Crea un archivo `.env` en el directorio raíz y añade las siguientes variables:
    ```plaintext
    DB_USER=tu_usuario_db
    DB_HOST=tu_host_db
    DB_NAME=tu_nombre_db
    DB_PASS=tu_contraseña_db
    DB_PORT=tu_puerto_db
    PORT=5000
    ```

5. **Iniciar la Aplicación**:
    ```bash
    npm start
    ```

## 🖥️ Uso

Una vez que la aplicación esté en funcionamiento, abre tu navegador y dirígete a [http://localhost:5000](http://localhost:5000) para acceder a la aplicación.

- **Panel de Control**: Gestiona tareas y accede al formulario de tareas.
- **Formulario de Tareas**: Crea y edita tareas.

## 🔧 Endpoints de la API

### **Tareas**

- **GET /api/tasks**: Recuperar todas las tareas.
- **POST /api/tasks**: Crear una nueva tarea.
- **PUT /api/tasks/:id**: Actualizar una tarea existente.
- **DELETE /api/tasks/:id**: Eliminar una tarea.

## 🧪 Pruebas

Para probar la aplicación, usa Selenium WebDriver. Asegúrate de que tu aplicación esté ejecutándose en [http://localhost:5000](http://localhost:5000).

1. **Navega al directorio de pruebas de Selenium**.
2. **Ejecuta las pruebas**:
    ```bash
    pytest
    ```

## 🤝 Contribuciones

¡Bienvenidas las contribuciones! Para contribuir a este proyecto:

1. **Haz un Fork del Repositorio**.
2. **Crea una Rama**:
    ```bash
    git checkout -b feature/nueva-caracteristica
    ```
3. **Realiza tus Cambios**.
4. **Haz Commit de tus Cambios**:
    ```bash
    git commit -am 'Añadir nueva característica'
    ```
5. **Haz Push a la Rama**:
    ```bash
    git push origin feature/nueva-caracteristica
    ```
6. **Crea un Pull Request**.

## 📜 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

¡Feliz gestión de tareas! 🎉


