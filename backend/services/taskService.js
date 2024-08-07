const Task = require('../models/Task');

const createTask = async (userId, title, description, priority, dueDate) => {
    return await Task.createTask(userId, title, description, priority, dueDate);
};

const getTasksByUserId = async (userId) => {
    return await Task.getTasksByUserId(userId);
};

const updateTask = async (taskId, title, description, priority, dueDate, completed) => {
    return await Task.updateTask(taskId, title, description, priority, dueDate, completed);
};

const deleteTask = async (taskId) => {
    await Task.deleteTask(taskId);
};

module.exports = {
    createTask,
    getTasksByUserId,
    updateTask,
    deleteTask,
};
