const bcrypt = require('bcrypt');

const handleLogin = async (req, res, client) => {
    const { email, password } = req.body;
    try {
        // Query the database to retrieve the user with the provided email
        const usersResult = await client.query('SELECT * FROM users WHERE email = $1', [email]);

        // Query the teachers database to retrieve the teacher with the provided email
        const teachersResult = await client.query('SELECT * FROM teachers WHERE email = $1', [email]);

        // Check if a user with the provided email exists in the users database
        if (usersResult.rows.length > 0) {
            const user = usersResult.rows[0];

            // Retrieve the hashed password from the users database
            const hashedPassword = user.password;

            // Compare the provided password with the hashed password
            const passwordMatch = await bcrypt.compare(password, hashedPassword);

            // Check if the passwords match
            if (passwordMatch) {
                // Password is correct, user is authenticated
                return res.status(200).json({ message: 'Student login successful' });
            }
        }

        // Check if a teacher with the provided email exists in the teachers database
        if (teachersResult.rows.length > 0) {
            const teacher = teachersResult.rows[0];

            // Retrieve the hashed password from the teachers database
            const hashedPassword = teacher.password;

            // Compare the provided password with the hashed password
            const passwordMatch = await bcrypt.compare(password, hashedPassword);

            // Check if the passwords match
            if (passwordMatch) {
                // Password is correct, teacher is authenticated
                return res.status(200).json({ message: 'Teacher login successful' });
            }
        }

        // If no user or teacher found with the provided email, return an error
        return res.status(404).json({ error: 'User not found' });
    } catch (error) {
        console.error('Error occurred while logging in:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = handleLogin;
