const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./database');
const authenticateJWT = require('./helpers/authenticateJWT')

const handleStudentSignUp = require('./routes/student-submission');
const handleTeacherSignUp = require('./routes/teacher-submission');
const handleLogin = require('./routes/login-submission');
const handleForgotPassword = require('./routes/forgot-submission');
const handleResetPassword = require('./routes/reset-submission');

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

app.get('/api/data', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM your_table_name');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

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

// API endpoint to fetch user data
app.get('/fetch/user', authenticateJWT, async (req, res) => {
  connectToDatabase((err, client) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    try {
      // Extract user ID from the decoded JWT token
      const userId = req.user.userId;
      console.log('UserID:', userId);

      // Determine the type of user (student or teacher) based on the presence of the username field
      let query;
      if (req.user.username) {
        // Student: fetch email and username
        query = 'SELECT email, username FROM users WHERE id = $1';
      } else {
        // Teacher: fetch email only
        query = 'SELECT email FROM teachers WHERE id = $1';
      }

      // Query the database to fetch user data
      client.query(query, [userId], (err, result) => {
        if (err) {
          console.error('Error querying database:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
        // Check if user data is found
        if (result.rows.length === 0) {
          return res.status(404).json({ error: 'User not found' });
        }
        // Return user data
        res.json(result.rows[0]);

        // Release the client back to the pool
        client.end();
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

// API endpoint to verify 2FA code
app.post('/verify-code', async (req, res) => {
  connectToDatabase(async (err, client) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    try {
      // Extract email and verification code from the request body
      const { email, verificationCode } = req.body;

      // Debugging
      console.log('Email:', email);
      console.log('Verification Code:', verificationCode);

      // Query the users table to fetch user data based on the email
      let query = 'SELECT * FROM users WHERE email = $1';
      let result = await client.query(query, [email]);

      // If user data is not found in the users table, query the teachers table
      if (result.rows.length === 0) {
        console.log('User not found in users table, trying teachers table');
        query = 'SELECT * FROM teachers WHERE email = $1';
        result = await client.query(query, [email]);
      }

      // Check if user data is found
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Compare the verification code with the stored code
      const user = result.rows[0];

      // Debugging 
      // console.log('user.verification_code:', user.verification_code);
      // console.log('verificationCode:', verificationCode);

      // Remove leading and trailing whitespaces in verificationCode
      const trimmedVerificationCode = verificationCode.trim();

      if (user.verification_code !== trimmedVerificationCode) {
        return res.status(400).json({ error: 'Invalid verification code' });
      }

      // If verification code is valid, clear the verification code from the user record
      const tableName = result.command === 'SELECT' ? 'users' : 'teachers';
      await client.query(`UPDATE ${tableName} SET verification_code = NULL WHERE id = $1`, [user.id]);

      // Return success response
      res.json({ message: 'Verification successful' });
    } catch (error) {
      console.error('Error verifying code:', error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      // Close the database client connection
      try {
        await client.end();
      } catch (e) {
        console.error('Error closing database client connection:', e);
      }
    }
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;