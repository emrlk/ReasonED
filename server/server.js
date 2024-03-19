// Import frameworks, middlewares, and database
const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./database');
const authenticateJWT = require('./helpers/authenticateJWT')

// Import API routes
const handleStudentSignUp = require('./routes/student-submission');
const handleTeacherSignUp = require('./routes/teacher-submission');
const handleLogin = require('./routes/login-submission');
const handleForgotPassword = require('./routes/forgot-submission');
const handleResetPassword = require('./routes/reset-submission');
const fetchUserData = require('./routes/fetch');
const verifyCode = require('./routes/verification-submission')
const handleChangePassword = require('./routes/change-submission');
const handleChangeUsername = require('./routes/username-submission');

// Create an instance of the Express application
const app = express();

// Define the port number for the server to listen on
const port = 3001;

// Use the bodyParser middleware to parse JSON-formatted request bodies
app.use(bodyParser.json());

// Connect Vercel
app.get("/", (req, res) => { res.send("Express on Vercel"); });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

// client.connect();

// Middleware to enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Use this link if accessing through vercel -> https://reasoned.vercel.app
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
//app.get('/api/data', async (req, res) => {
//try {
//const result = await client.query('SELECT * FROM your_table_name');
//res.json(result.rows);
//} catch (error) {
//console.error(error);
//res.status(500).send('Internal Server Error');
//}
//});

// POST endpoint for student sign up
app.post('/sign-up', (req, res) => {
  connectToDatabase((err, client) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    handleStudentSignUp(req, res, client);
  });
});

// POST endpoint for teacher sign up
app.post('/teacher-sign-up', (req, res) => {
  connectToDatabase((err, client) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    handleTeacherSignUp(req, res, client);
  });
});

// POST endpoint to handle login requests
app.post('/log-in', (req, res) => {
  connectToDatabase((err, client) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    handleLogin(req, res, client);
  });
});

// POST endpoint to handle forgetting password
app.post('/forgot-password', (req, res) => {
  connectToDatabase((err, client) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    handleForgotPassword(req, res, client);
  });
});

// POST endpoint to handle resetting password
app.post('/reset-password', (req, res) => {
  connectToDatabase((err, client) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    handleResetPassword(req, res, client);
  });
});

// POST endpoint to handle resetting password (after user is logged in)
app.post('/change-password', (req, res) => {
  connectToDatabase((err, client) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    handleChangePassword(req, res, client);
  });
});

// GET endpoint to fetch user data
app.get('/fetch/user', authenticateJWT, (req, res) => {
  connectToDatabase((err, client) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    fetchUserData(req, res, client);
  });
});

// POST endpoint to verify 2FA code
app.post('/verify-code', (req, res) => {
  connectToDatabase((err, client) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    verifyCode(req, res, client);
  });
});

// POST endpoint to change a student's username
app.post('/change-username', (req, res) => {
  connectToDatabase((err, client) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    handleChangeUsername(req, res, client);
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;