const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendVerificationEmail } = require('../emails/verification-email')

// Function to generate a random verification code
function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Handler function for login submission
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

                // Generate verification code
                const verificationCode = generateVerificationCode();

                // Store verification code in the database
                await client.query('UPDATE users SET verification_code = $1 WHERE id = $2', [verificationCode, user.id]);

                // Send verification email
                sendVerificationEmail(email, verificationCode);

                // Generate token payload
                const tokenPayload = {
                    userId: user.id,
                    email: user.email,
                    username: user.username,
                    DoB: user.dob,
                    userType: 'student'
                };

                // Sign the token
                const token = jwt.sign(tokenPayload, 'secret_key', { expiresIn: '1h' });

                // Return response with token 
                return res.status(200).json({ token });
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

                // Generate verification code
                const verificationCode = generateVerificationCode();

                // Store verification code in the database
                await client.query('UPDATE teachers SET verification_code = $1 WHERE id = $2', [verificationCode, teacher.id]);

                // Send verification email
                sendVerificationEmail(email, verificationCode);

                // Generate token payload
                const tokenPayload = {
                    userId: teacher.id,
                    email: teacher.email,
                    userType: 'teacher'
                };

                // Sign the token
                const token = jwt.sign(tokenPayload, 'secret_key', { expiresIn: '1h' });

                // Return response with token 
                return res.status(200).json({ token });
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
    } finally {
        // Close the connection
        client.end(); 
    }
};

module.exports = handleLogin;
