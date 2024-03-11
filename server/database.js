require("dotenv").config();
const { Client } = require('pg');

// Function to handle database connection
const connectToDatabase = (callback) => {
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

    // Handle connection errors
    client.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            callback(err, null); // Pass error to callback function
        } else {
            console.log('Connected to the database');
            callback(null, client); // Pass client instance to callback function
        }
    });

    // Handle error events
    client.on('error', (err) => {
        console.error('Unexpected error on PostgreSQL client', err);
    });
};

// Export the function to connect to the database
module.exports = connectToDatabase;