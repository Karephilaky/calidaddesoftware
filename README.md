Sistema de Gestión de Tareas
Descripción
El Sistema de Gestión de Tareas es una aplicación web diseñada para gestionar tus tareas de manera eficiente. Permite la creación, edición y eliminación de tareas, con opciones para filtrar tareas por estado (completadas o pendientes) y recibir notificaciones por correo electrónico para tareas próximas a vencer.

Características
Registro y autenticación de usuarios: Registro seguro y acceso a cuentas.
Gestión de tareas: Crea, edita y elimina tareas.
Filtrado de tareas: Filtra tareas por estado (completadas o pendientes).
Notificaciones por correo: Recibe alertas para tareas próximas a vencer.
Interfaz amigable: Diseño intuitivo y atractivo.
Tecnologías
Frontend: React, Tailwind CSS
Backend: Node.js, Express
Base de Datos: PostgreSQL
Pruebas: Selenium WebDriver
Instalación
Requisitos
Asegúrate de tener instaladas las siguientes herramientas:

Node.js
PostgreSQL
Clonar el Repositorio
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
Configuración del Entorno
Instalar dependencias del frontend:

bash
Copiar código
cd frontend
npm install
Instalar dependencias del backend:

bash
Copiar código
cd ../backend
npm install
Configurar las variables de entorno:

Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables:

env
Copiar código
DB_USER=tu_usuario
DB_HOST=localhost
DB_NAME=nombre_de_la_base_de_datos
DB_PASS=tu_contraseña
DB_PORT=5432
PORT=5000
Iniciar el Proyecto
Iniciar el servidor backend:

bash
Copiar código
cd backend
npm start
Iniciar el frontend:

bash
Copiar código
cd ../frontend
npm start
La aplicación estará disponible en http://localhost:3000.

Uso
Registro y Login:

Visita http://localhost:3000/register para crear una cuenta.
Visita http://localhost:3000/login para iniciar sesión.
Gestión de Tareas:

Una vez autenticado, puedes agregar, editar y eliminar tareas desde el tablero principal.
Filtrado de Tareas:

Utiliza el select box para filtrar tareas completadas o pendientes.
Notificaciones:

Recibirás correos electrónicos para tareas próximas a vencer según la configuración establecida.
Contribución
¡Contribuciones son bienvenidas! Sigue estos pasos para contribuir:

Haz un fork del repositorio.

Crea una nueva rama:

bash
Copiar código
git checkout -b nombre-de-tu-rama
Realiza tus cambios y haz commit:

bash
Copiar código
git add .
git commit -m "Descripción de tus cambios"
Empuja tus cambios al repositorio remoto:

bash
Copiar código
git push origin nombre-de-tu-rama
Crea un Pull Request en GitHub describiendo tus cambios.

Pruebas
Las pruebas se realizan utilizando Selenium WebDriver. Para ejecutarlas:

Instalar dependencias de Selenium:

bash
Copiar código
cd tests
npm install
Ejecutar las pruebas:

bash
Copiar código
npm test
Las pruebas verifican la funcionalidad del sistema, incluyendo la gestión de tareas y las notificaciones por correo.

Documentación
Toda la documentación relevante, incluyendo la especificación de requisitos IEEE 830 y la metodología de desarrollo, se encuentra en el directorio docs.

Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

