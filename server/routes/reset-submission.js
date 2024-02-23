const bcrypt = require('bcrypt');

const handleResetPassword = async (req, res, client) => {
    try {
        // Retrieve necessary data from request body
        const { email, newPassword } = req.body;

        // Log request data for debugging
        console.log('Received reset password request for email:', email);

        // Check if the email exists in the teachers table
        let result = await client.query('SELECT * FROM teachers WHERE email = $1', [email]);
        let userTable = 'teachers'; // Default to teachers table

        // Log query result for debugging
        console.log('Query result:', result.rows);

        // If no user is found in the teachers table, check the users table
        if (result.rows.length === 0) {
            result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
            userTable = 'users'; // Set to users table
        }

        // If still no user is found, return an error
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update password in the respective table
        await client.query(`UPDATE ${userTable} SET password = $1 WHERE email = $2`, [hashedPassword, email]);

        // Log success message for debugging
        console.log('Password reset successful for email:', email);

        // Send response indicating success
        res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        // Log error for debugging
        console.error('Error resetting password:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = handleResetPassword;
