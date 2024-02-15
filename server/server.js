const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Connect Vercel
app.get("/", (req, res) => { res.send("Express on Vercel"); });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

// Connect to PostgreSQL database
const client = new Client({
  user: 'default',
  host: 'ep-little-grass-33923085-pooler.us-east-1.aws.neon.tech',
  database: 'verceldb',
  password: 'JNcP7EM2DerI',
  port: 5432,
  ssl: {
    rejectUnauthorized: false // This allows connections to servers with self-signed certificates
  }
});

client.connect();

// Define API routes

app.get('/api/data', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM your_table_name');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// POST endpoint for creating a new user account
app.post('/api/create-account', async (req, res) => {
  const { email, username, password, dob } = req.body;
  try {
    // Insert the new user into the users table
    const result = await client.query('INSERT INTO users (email, username, password, dob) VALUES ($1, $2, $3, $4) RETURNING id', [email, username, password, dob]);
    const newUserId = result.rows[0].id;

    console.log('New user created with ID:', newUserId);

    res.status(201).json({ id: newUserId }); // Send the new user's ID back to the client
  } catch (error) {
    console.error('Error occurred while creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

});

module.exports = app;