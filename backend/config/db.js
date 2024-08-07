const { Pool } = require('pg');

const pool = new Pool({
    user: 'ubvgcrw2nlekjkjl80bx',
    host: 'bndzjx9vvjznmi3xpyhu-postgresql.services.clever-cloud.com',
    database: 'bndzjx9vvjznmi3xpyhu',
    password: 'eaPUVbW7gjwAUqDtUF0Bkb4pq4KWrJ',
    port: 50013,
});

pool.on('connect', () => {
    console.log('Connected to the database');
});

module.exports = pool;
