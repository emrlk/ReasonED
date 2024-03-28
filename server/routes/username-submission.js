/**
 * Handler function to update a student's username.
 * @param {object} req - The request object containing user's email, newUsername, and confirmUsername.
 * @param {object} res - The response object used to send responses back to the client.
 * @param {object} client - The database client object used to execute queries.
 */
const handleUsernameChange = async (req, res, client) => {
    // Retrieve necessary data from request body
    const { email, newUsername, confirmUsername } = req.body;

    try {
        // Check if the user exists in the users table
        const userResult = await client.query('SELECT * FROM users WHERE email = $1', [email]);

        // If the user does not exist, return an error response
        if (userResult.rows.length === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Check if the new username already exists in the database
        const usernameCheckResult = await client.query('SELECT * FROM users WHERE username = $1', [newUsername]);
        
        // If the user's username already exists, return an error message
        if (usernameCheckResult.rows.length > 0) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // If new username and confirm username do not match, return an error response
        if (newUsername !== confirmUsername) {
            return res.status(400).json({ message: 'Usernames do not match.' });
        }

        // Update the user's username
        await client.query('UPDATE users SET username = $1 WHERE email = $2', [newUsername, email]);

        // Username updated successfully
        return res.status(200).json({ message: 'Username changed successfully.' });
    } catch (error) {
        console.error('Error changing username:', error);
        return res.status(500).json({ message: 'Failed to change username.' });
    } finally {
        // Close the connection
        client.end();
    }
};

module.exports = handleUsernameChange;
