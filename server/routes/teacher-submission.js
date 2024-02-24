const bcrypt = require('bcrypt');

// Handler function for teacher sign up
const handleTeacherSignUp = async (req, res, client) => {
    const { email, password, confirmPassword } = req.body;

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        // Encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new teacher into the teachers table
        const result = await client.query('INSERT INTO teachers (email, password) VALUES ($1, $2) RETURNING id', [email, hashedPassword]);
        const newTeacherId = result.rows[0].id;

        console.log('New teacher created with ID:', newTeacherId);

        // Send the new teacher's ID back to the client
        res.status(201).json({ id: newTeacherId });
    } catch (error) {
        console.error('Error occurred while creating teacher:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = handleTeacherSignUp;
