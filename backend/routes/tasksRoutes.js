const express = require('express');
const router = express.Router();
const pool = require('../config/db'); // Verifica que la ruta sea correcta

// Obtener todas las tareas
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching tasks:', error); // Agregado para ver el error en los logs
        res.status(500).json({ message: 'Error fetching tasks' });
    }
});

// Crear una nueva tarea
router.post('/', async (req, res) => {
    const { title, description, priority, due_date, user_id } = req.body;
    console.log('Received data:', { title, description, priority, due_date, user_id }); // Verificar datos recibidos
    try {
        const result = await pool.query(
            'INSERT INTO tasks (title, description, priority, due_date, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [title, description, priority, due_date, user_id]
        );
        console.log('Task created:', result.rows[0]); // Verificar resultado
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating task:', error); // Verificar errores
        res.status(500).json({ message: 'Error creating task' });
    }
});
// Actualizar una tarea existente
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, priority, due_date } = req.body; // Usar `due_date` en lugar de `dueDate`

    // Verificar que los datos están presentes
    if (!title || !description || !priority || !due_date) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Ejecutar la consulta de actualización
        const result = await pool.query(
            'UPDATE tasks SET title = $1, description = $2, priority = $3, due_date = $4 WHERE id = $5 RETURNING *',
            [title, description, priority, due_date, id]
        );

        // Verificar si la tarea fue actualizada
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating task:', error); // Agregado para ver el error en los logs
        res.status(500).json({ message: 'Error updating task' });
    }
});


// Eliminar una tarea
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting task:', error); // Agregado para ver el error en los logs
        res.status(500).json({ message: 'Error deleting task' });
    }
});

module.exports = router;
