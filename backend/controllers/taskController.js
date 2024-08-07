const taskService = require('../services/taskService');

const createTask = async (req, res) => {
    try {
        const { title, description, priority, dueDate } = req.body;
        const task = await taskService.createTask(req.user.id, title, description, priority, dueDate);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await taskService.getTasksByUserId(req.user.id);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateTask = async (req, res) => {
    try {
        const { title, description, priority, dueDate, completed } = req.body;
        const task = await taskService.updateTask(req.params.id, title, description, priority, dueDate, completed);
        res.status(200).json(task);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteTask = async (req, res) => {
    try {
        await taskService.deleteTask(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
};
