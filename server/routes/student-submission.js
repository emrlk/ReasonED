const bcrypt = require('bcrypt');

/**
 * Handler function for student sign up.
 * @param {object} req - The request object containing user data (email, username, password, confirmPassword, dob).
 * @param {object} res - The response object used to send responses back to the client.
 * @param {object} client - The database client object used to execute queries.
 */
const handleStudentSignUp = async (req, res, client) => {
    const { email, username, password, confirmPassword, dob } = req.body;

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        // Encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the users table
        const result = await client.query('INSERT INTO users (email, username, password, dob) VALUES ($1, $2, $3, $4) RETURNING id', [email, username, hashedPassword, dob]);
        const newUserId = result.rows[0].id;

        console.log('New user created with ID:', newUserId);

        // Send the new user's ID back to the client
        res.status(201).json({ id: newUserId });
    } catch (error) {
        console.error('Error occurred while creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        // Close the connection
        client.end();
    }
};

module.exports = handleStudentSignUp;
