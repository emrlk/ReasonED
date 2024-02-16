const handleFormSubmission = async (req, res, client) => {
    const { email, username, password, dob } = req.body;
    try {
        // Insert the new user into the users table
        const result = await client.query('INSERT INTO users (email, username, password, dob) VALUES ($1, $2, $3, $4) RETURNING id', [email, username, password, dob]);
        const newUserId = result.rows[0].id;

        console.log('New user created with ID:', newUserId);

        res.status(201).json({ id: newUserId }); // Send the new user's ID back to the client
    } catch (error) {
        console.error('Error occurred while creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = handleFormSubmission;
