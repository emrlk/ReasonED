const crypto = require('crypto');
const { sendPasswordResetEmail } = require('../emails/reset-email');

// Handler function for forgot password (sending the reset email upon submission)
const handleForgotPassword = async (req, res, client) => {
    const { email } = req.body;

    try {
        // Check if the email exists in the users table
        let userResult = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        let isTeacher = false;

        // If the email does not exist in users table, check in teachers table
        if (userResult.rows.length === 0) {
            userResult = await client.query('SELECT * FROM teachers WHERE email = $1', [email]);
            isTeacher = true;
        }

        // If the email does not exist in both tables, return an error response
        if (userResult.rows.length === 0) {
            return res.status(404).json({ message: 'Email not found' });
        }

        // Generate a secure token
        crypto.randomBytes(20, async (err, buffer) => {
            if (err) {
                console.error('Error generating token:', err);
                return res.status(500).json({ message: 'Failed to generate token.' });
            }

            const token = buffer.toString('hex');

            try {
                // Update the user's token in the appropriate table
                if (isTeacher) {
                    await client.query('UPDATE teachers SET reset_token = $1 WHERE email = $2', [token, email]);
                } else {
                    await client.query('UPDATE users SET reset_token = $1 WHERE email = $2', [token, email]);
                }

                // Continue with sending password reset email
                await sendPasswordResetEmail(email, token);

                // Return a success response
                return res.status(200).json({ message: 'Password reset email sent. Check your email to reset your password.' });

                // Close the connection
                client.end();
            } catch (updateError) {
                console.error('Error updating reset token in database:', updateError);
                return res.status(500).json({ message: 'Failed to update reset token in database.' });

                // Close the connection
                client.end();
            }
        });
    } catch (error) {
        console.error('Error resetting password:', error);
        return res.status(500).json({ message: 'Internal server error' });

        // Close the connection
        client.end();
    }
};

module.exports = handleForgotPassword;