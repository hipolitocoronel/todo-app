const { Pool } = require("pg");
const connectionString = process.env.DB_URI;
const db = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = { db };
