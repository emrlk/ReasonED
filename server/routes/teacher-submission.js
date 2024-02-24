const bcrypt = require('bcrypt');

// Handler function for teacher sign up
const handleTeacherSignUp = async (req, res, client) => {
    const { email, password } = req.body;

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
