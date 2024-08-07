const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        const { name, password } = req.body;
        console.log(`Register request for user: ${name}`);
        const user = await authService.register(name, password);
        res.status(201).json(user);
    } catch (error) {
        console.error(`Register error: ${error.message}`);
        res.status(400).send(error.message);
    }
};

const login = async (req, res) => {
    try {
        const { name, password } = req.body;
        console.log(`Login request for user: ${name}`);
        const user = await authService.login(name, password);
        res.status(200).json(user);
    } catch (error) {
        console.error(`Login error: ${error.message}`);
        res.status(400).send(error.message);
    }
};

module.exports = {
    register,
    login,
};
