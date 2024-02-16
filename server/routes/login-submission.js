const bcrypt = require('bcrypt');

const handleLogin = async (req, res, client) => {
    const { email, password } = req.body;
    try {
        // Query the database to retrieve the user with the provided email
        const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);

        // Check if a user with the provided email exists
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Retrieve the hashed password from the database
        const hashedPassword = result.rows[0].password;

        // Compare the provided password with the hashed password
        const passwordMatch = await bcrypt.compare(password, hashedPassword);

        // Check if the passwords match
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Password is correct, user is authenticated
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error occurred while logging in:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = handleLogin;
