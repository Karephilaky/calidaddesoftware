const pool = require('../config/db');

const createTask = async (userId, title, description, priority, dueDate) => {
    const query = 'INSERT INTO tasks (user_id, title, description, priority, due_date) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const res = await pool.query(query, [userId, title, description, priority, dueDate]);
    return res.rows[0];
};

const getTasksByUserId = async (userId) => {
    const query = 'SELECT * FROM tasks WHERE user_id = $1';
    const res = await pool.query(query, [userId]);
    return res.rows;
};

const updateTask = async (taskId, title, description, priority, dueDate, completed) => {
    const query = 'UPDATE tasks SET title = $1, description = $2, priority = $3, due_date = $4, completed = $5 WHERE id = $6 RETURNING *';
    const res = await pool.query(query, [title, description, priority, dueDate, completed, taskId]);
    return res.rows[0];
};

const deleteTask = async (taskId) => {
    const query = 'DELETE FROM tasks WHERE id = $1';
    await pool.query(query, [taskId]);
};

module.exports = {
    createTask,
    getTasksByUserId,
    updateTask,
    deleteTask,
};
