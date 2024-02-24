const bcrypt = require('bcrypt');

const handleResetPassword = async (req, res, client) => {
    // Retrieve necessary data from request body
    const { token, password } = req.body;

    // Log the token received in the request
    console.log('Token received:', token);

    try {
        // Check if the token exists in the users table
        let userResult = await client.query('SELECT * FROM users WHERE reset_token = $1', [token]);
        let isTeacher = false;

        // If the token does not exist in users table, check in teachers table
        if (userResult.rows.length === 0) {
            userResult = await client.query('SELECT * FROM teachers WHERE reset_token = $1', [token]);
            isTeacher = true;
        }

        // If the token does not exist in both tables, return an error response
        if (userResult.rows.length === 0) {
            return res.status(404).json({ message: 'Invalid or expired token.' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update the user's password in the appropriate table
        if (isTeacher) {
            await client.query('UPDATE teachers SET password = $1, reset_token = NULL WHERE reset_token = $2', [hashedPassword, token]);
        } else {
            await client.query('UPDATE users SET password = $1, reset_token = NULL WHERE reset_token = $2', [hashedPassword, token]);
        }

        // Password updated successfully
        return res.status(200).json({ message: 'Password reset successfully.' });
    } catch (error) {
        console.error('Error updating password:', error);
        return res.status(500).json({ message: 'Failed to update password.' });
    }
};

module.exports = handleResetPassword;