const bcrypt = require('bcrypt');

/**
 * Handler function for teacher sign up.
 * @param {object} req - The request object containing teacher's email, password, and confirmPassword.
 * @param {object} res - The response object used to send responses back to the client.
 * @param {object} client - The database client object used to execute queries.
 */
const handleTeacherSignUp = async (req, res, client) => {
    // Destructuring the request body to extract user information
    const { email, password, confirmPassword, areaSelection } = req.body;

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        // Check if the email address already exists in the database
        const existingTeacher = await client.query('SELECT * FROM teachers WHERE email = $1', [email]);

        // If the teacher's email already exists, return an error message
        if (existingTeacher.rows.length > 0) {
            return res.status(400).json({ error: 'Email address already registered' });
        }

        // Encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new teacher into the teachers table
        const result = await client.query(
            'INSERT INTO teachers (email, password, area_selection) VALUES ($1, $2, $3) RETURNING id',
            [email, hashedPassword, areaSelection]
        );
        const newTeacherId = result.rows[0].id;

        // Log teacher's ID
        console.log('New teacher created with ID:', newTeacherId);

        // Send the new teacher's ID back to the client
        res.status(201).json({ id: newTeacherId });
    } catch (error) {
        console.error('Error occurred while creating teacher:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        // Close the connection
        client.end();
    }
};

module.exports = handleTeacherSignUp;
