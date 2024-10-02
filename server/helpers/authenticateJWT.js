const jwt = require('jsonwebtoken');

/**
 * Middleware function to verify JWT token and attach user information to request object.
 * @param {object} req - The request object containing the authorization header with JWT token.
 * @param {object} res - The response object used to send responses back to the client.
 * @param {function} next - The next middleware function in the request-response cycle.
 */
const authenticateJWT = (req, res, next) => {

    // Extract the authorization header from the request
    const authHeader = req.headers.authorization;

    // Check if the authorization header exists or starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // Remove "Bearer " prefix
    const token = authHeader.substring(7);
    console.log('Received token:', token);

    // Verify the JWT token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        console.log('Decoded token:', decoded);
        // Attach decoded user information to request object
        req.user = decoded;

        // Proceed to the next middleware/route handler
        next();
    });
};

module.exports = authenticateJWT;