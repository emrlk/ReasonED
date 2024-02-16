const express = require('express');
const bodyParser = require('body-parser');
const client = require('./database');
const handleFormSubmission = require('./routes/form-submission');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Connect Vercel
app.get("/", (req, res) => { res.send("Express on Vercel"); });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

// client.connect();

// Middleware to enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

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

app.post('/sign-up', (req, res) => {
  // Pass the connection to the form submission handler
  handleFormSubmission(req, res, client);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

});

module.exports = app;