const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'robin66!',
    database: 'yyendb',
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool;