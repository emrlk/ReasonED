const connectToDatabase = require('../database');

// Handler to verify 2FA codes
const verifyCode = async (req, res, client) => {

    try {
        // Extract email and verification code from the request body
        const { email, verificationCode } = req.body;

        // Debugging
        console.log('Email:', email);
        console.log('Verification Code:', verificationCode);

        // Query the users table to fetch user data based on the email
        let query = 'SELECT * FROM users WHERE email = $1';
        let result = await client.query(query, [email]);

        // If user data is not found in the users table, query the teachers table
        if (result.rows.length === 0) {
            console.log('User not found in users table, trying teachers table');
            query = 'SELECT * FROM teachers WHERE email = $1';
            result = await client.query(query, [email]);
        }

        // Check if user data is found
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the verification code with the stored code
        const user = result.rows[0];

        // Debugging 
        // console.log('user.verification_code:', user.verification_code);
        // console.log('verificationCode:', verificationCode);

        // Remove leading and trailing whitespaces in verificationCode
        const trimmedVerificationCode = verificationCode.trim();

        // If the verification codes don't match
        if (user.verification_code !== trimmedVerificationCode) {
            return res.status(400).json({ error: 'Invalid verification code' });
        }

        // If verification code is valid, clear the verification code from the user record
        const tableName = result.command === 'SELECT' ? 'users' : 'teachers';
        await client.query(`UPDATE ${tableName} SET verification_code = NULL WHERE id = $1`, [user.id]);

        // Return success response
        res.json({ message: 'Verification successful' });
    } catch (error) {
        console.error('Error verifying code:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        // Close the database client connection
        try {
            await client.end();
        } catch (e) {
            console.error('Error closing database client connection:', e);
        }
    }
};

module.exports = verifyCode;