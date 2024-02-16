require("dotenv").config();
const { Client } = require('pg');

// Connect to PostgreSQL database using environment variables
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false, // Allows connections to servers with self-signed certificates
    },
});

// Connect to the PostgreSQL database
client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(error => console.error('Error connecting to the database:', error));

// Export the client for use in other modules
module.exports = client;
