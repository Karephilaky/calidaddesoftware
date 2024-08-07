const bcrypt = require('bcrypt');
const User = require('../models/User');

const register = async (name, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(`Hashed password for user ${name}: ${hashedPassword}`);
    const user = await User.createUser(name, hashedPassword);
    console.log(`User registered: ${JSON.stringify(user)}`);
    return user;
};

const login = async (name, password) => {
    console.log(`Attempting login for user: ${name}`);
    const user = await User.getUserByName(name);
    console.log(`User found: ${JSON.stringify(user)}`);
    if (user && await bcrypt.compare(password, user.password)) {
        console.log('Password match');
        return user;
    }
    console.log('Invalid credentials');
    throw new Error('Invalid credentials');
};

module.exports = {
    register,
    login,
};
