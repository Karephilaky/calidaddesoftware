const pool = require('../config/db');

const createTables = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                password VARCHAR(100) NOT NULL
            );
        `);
        await pool.query(`
            CREATE TABLE IF NOT EXISTS tasks (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                priority VARCHAR(50),
                due_date DATE,
                completed BOOLEAN DEFAULT FALSE
            );
        `);
        console.log('Tables created successfully');
    } catch (error) {
        console.error('Error creating tables', error);
    } finally {
        pool.end();
    }
};

createTables();
