const mysql = require("mysql")

// Create a pool of connections.
// This is a way to manage multiple connections to the database.

exports.connectionPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo',
    multipleStatements: true, // [OPTIONAL] Allows you to run multiple SQL statements in one line.
    connectionLimit: 100
})