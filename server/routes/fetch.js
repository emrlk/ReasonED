/**
 * Fetches user data based on the user's type (student or teacher).
 * @param {object} req - The request object containing user information.
 * @param {object} res - The response object used to send responses back to the client.
 * @param {object} client - The database client object used to execute queries.
 */
const fetchUserData = (req, res, client) => {

    try {
        // Extract user ID from the decoded JWT token
        const userId = req.user.userId;
        console.log('UserID:', userId);

        // Determine the type of user (student or teacher) based on the presence of the username field
        let query;
        if (req.user.username) {
            // Student: fetch email and username
            query = 'SELECT email, username, \'student\' AS userType FROM users WHERE id = $1';
        } else {
            // Teacher: fetch email only
            query = 'SELECT email, \'teacher\' AS userType FROM teachers WHERE id = $1';
        }

        // Query the database to fetch user data
        client.query(query, [userId], (err, result) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }
            // Check if user data is found
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            // Return user data
            res.json(result.rows[0]);

            // Release the client back to the pool
            client.end();
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = fetchUserData;