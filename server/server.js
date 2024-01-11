const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Connect to PostgreSQL database
const client = new Client({
  user: 'database_user',
  host: 'database_host',
  database: 'database_name',
  password: 'database_password',
  port: 5432,
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});