const pool = require('../config/db');

const createUser = async (name, password) => {
    const query = 'INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *';
    console.log(`Executing query: ${query}`);
    const res = await pool.query(query, [name, password]);
    console.log(`User created: ${JSON.stringify(res.rows[0])}`);
    return res.rows[0];
};

const getUserByName = async (name) => {
    const query = 'SELECT * FROM users WHERE name = $1';
    console.log(`Executing query: ${query} with name: ${name}`);
    const res = await pool.query(query, [name]);
    console.log(`User found: ${JSON.stringify(res.rows[0])}`);
    return res.rows[0];
};

module.exports = {
    createUser,
    getUserByName,
};
