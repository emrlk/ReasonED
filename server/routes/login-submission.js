const bcrypt = require('bcrypt');

const handleLogin = async (req, res, client) => {
    console.log('Login request received');

    const { email, password } = req.body;
    try {
        // Query the database to retrieve the user with the provided email
        console.log('Querying users database for email:', email);
        const usersResult = await client.query('SELECT * FROM users WHERE email = $1', [email]);

        // Query the teachers database to retrieve the teacher with the provided email
        console.log('Querying teachers database for email:', email);
        const teachersResult = await client.query('SELECT * FROM teachers WHERE email = $1', [email]);

        // Check if a user with the provided email exists in the users database
        if (usersResult.rows.length > 0) {
            console.log('User found in users database');
            const user = usersResult.rows[0];

            // Retrieve the hashed password from the users database
            const hashedPassword = user.password;

            // Compare the provided password with the hashed password
            const passwordMatch = await bcrypt.compare(password, hashedPassword);

            // Check if the passwords match
            if (passwordMatch) {
                // Password is correct, user is authenticated
                console.log('Password match. User authenticated');
                return res.status(200).json({ message: 'Student login successful' });
            } else {
                // Password is incorrect
                console.log('Incorrect password');
                return res.status(401).json({ error: 'Incorrect password' });
            }
        }

        // Check if a teacher with the provided email exists in the teachers database
        if (teachersResult.rows.length > 0) {
            console.log('User found in teachers database');
            const teacher = teachersResult.rows[0];

            // Retrieve the hashed password from the teachers database
            const hashedPassword = teacher.password;

            // Compare the provided password with the hashed password
            const passwordMatch = await bcrypt.compare(password, hashedPassword);

            // Check if the passwords match
            if (passwordMatch) {
                // Password is correct, teacher is authenticated
                console.log('Password match. Teacher authenticated');
                return res.status(200).json({ message: 'Teacher login successful' });
            } else {
                // Password is incorrect
                console.log('Incorrect password');
                return res.status(401).json({ error: 'Incorrect password' });
            }
        }

        // If no user or teacher found with the provided email, return an error
        console.log('User not found');

        // If no user or teacher found with the provided email, return an error
        return res.status(404).json({ error: 'User not found' });
    } catch (error) {
        // Log any errors that occur during login process
        console.error('Error occurred while logging in:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = handleLogin;
