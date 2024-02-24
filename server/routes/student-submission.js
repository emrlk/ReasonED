const bcrypt = require('bcrypt');

// Handler function for student sign up
const handleStudentSignUp = async (req, res, client) => {
    const { email, username, password, dob } = req.body;

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
    }
};

module.exports = handleStudentSignUp;
