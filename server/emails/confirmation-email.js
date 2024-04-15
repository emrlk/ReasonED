const nodemailer = require('nodemailer');
require('dotenv').config();

/**
 * Function to send user's verification code.
 * @param {string} email - Email address of the recipient.
 * @param {string} verificationCode - Verification code to be sent.
 */
async function sendConfirmationEmail(email, verificationCode) {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        // SMTP host
        host: "smtp.gmail.com",
        // SMTP port
        port: 587,
        // Disable TLS
        secure: false,
        // Require TLS
        requireTLS: true,
        auth: {
            // SMTP username
            user: process.env.SMTP_USER,
            // SMTP password
            pass: process.env.SMTP_PASSWORD
        }
    });

    // Define email options
    const mailOptions = {
        // Sender's email address
        from: process.env.SMTP_USER,
        // Recipient's email address
        to: email,
        // Email subject
        subject: 'ReasonED.io: Verify Your Email Address',
        // Plain text email content
        text: `Your verification code is: ${verificationCode}`
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent successfully.');
    } catch (error) {
        console.error('Error sending confirmation email:', error);

        // Throw the error to handle it in the calling function
        throw error;
    }
}

module.exports = { sendConfirmationEmail };