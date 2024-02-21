const bcrypt = require('bcrypt');
const { sendPasswordResetEmail } = require('./reset-email');

const handleForgotPassword = async (req, res, client) => {
    const { email } = req.body;

    try {
        // Check if the email exists in the users table
        let userResult = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        let isTeacher = false;

        if (userResult.rows.length === 0) {
            // If the email does not exist in users table, check in teachers table
            userResult = await client.query('SELECT * FROM teachers WHERE email = $1', [email]);
            isTeacher = true;
        }

        if (userResult.rows.length === 0) {
            // If the email does not exist in both tables, return an error response
            return res.status(404).json({ message: 'Email not found' });
        }

        // Generate a random temporary password
        const temporaryPassword = Math.random().toString(36).slice(-8);

        // Encrypt the temporary password
        const hashedPassword = await bcrypt.hash(temporaryPassword, 10);

        // Update the user's password in the appropriate table
        if (isTeacher) {
            await client.query('UPDATE teachers SET password = $1 WHERE email = $2', [hashedPassword, email]);
        } else {
            await client.query('UPDATE users SET password = $1 WHERE email = $2', [hashedPassword, email]);
        }

        // Send password reset email
        await sendPasswordResetEmail(email, temporaryPassword);

        // Return a success response
        return res.status(200).json({ message: 'Password reset successful. Check your email for the temporary password.' });
    } catch (error) {
        console.error('Error resetting password:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = handleForgotPassword;
