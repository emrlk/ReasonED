const nodemailer = require('nodemailer');
require('dotenv').config();

// Function to send user's verification code
async function sendVerificationEmail(email, verificationCode) {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.SMTP_USER, // SMTP username
            pass: process.env.SMTP_PASSWORD // SMTP password
        }
    });

    // Define email options
    const mailOptions = {
        from: process.env.SMTP_USER, // Sender's email address
        to: email, // Recipient's email address
        subject: 'Your Verification Code', // Email subject
        text: `Your verification code is: ${verificationCode}`
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('2FA email sent successfully.');
    } catch (error) {
        console.error('Error sending 2FA email:', error);
        throw error; // Throw the error to handle it in the calling function
    }
}

module.exports = { sendVerificationEmail };