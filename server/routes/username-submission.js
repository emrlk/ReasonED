// Handler function to update a student's username
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
    }
};

module.exports = handleUsernameChange;
