
const { Pool } = require('pg');
const itemsPool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DB,
    ssl: {
        rejectUnauthorized: false
    }
});
module.exports = itemsPool;
