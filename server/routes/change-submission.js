const bcrypt = require('bcrypt');

/**
 * Handler function for changing password after login.
 * @param {object} req - The request object containing the user's email, old password, new password, and confirm password.
 * @param {object} res - The response object used to send responses back to the client.
 * @param {object} client - The database client object used to execute queries.
 */
const handleChangePassword = async (req, res, client) => {
    // Retrieve necessary data from request body
    const { email, oldPassword, newPassword, confirmPassword } = req.body;

    try {
        // Check if new password and confirm password match
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: 'New password and confirm password do not match' });
        }

        // Search for the user in both users and teachers tables
        let userResult = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        let isTeacher = false;

        // If the user is not found in the users table, check in the teachers table
        if (userResult.rows.length === 0) {
            userResult = await client.query('SELECT * FROM teachers WHERE email = $1', [email]);
            isTeacher = true;
        }

        // If the user is not found in both tables, return an error response
        if (userResult.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Get the hashed password from the result
        const hashedPassword = userResult.rows[0].password;

        // Compare the provided old password with the hashed password retrieved from the database
        const passwordMatch = await bcrypt.compare(oldPassword, hashedPassword);

        // If the passwords do not match, return an error response
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect old password' });
        }

        // Hash the new password
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password in the appropriate table
        const table = isTeacher ? 'teachers' : 'users';
        await client.query(`UPDATE ${table} SET password = $1 WHERE email = $2`, [hashedNewPassword, email]);

        // Password updated successfully
        return res.status(200).json({ message: 'Password changed successfully' });

        // Close the connection
        client.end();
    } catch (error) {
        console.error('Error updating password:', error);
        return res.status(500).json({ message: 'Failed to update password' });

        // Close the connection
        client.end();
    }
};

module.exports = handleChangePassword;
