"use client";
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ResetPassword() {
    const { token } = useParams();
    
    // State variables to manage password input, confirm password input, error message, and success message
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        // Prevents default form submission behavior
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            // Set error message
            setErrorMessage('Passwords do not match');

            // Exit the function
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( { password }) // Convert data to JSON string before sending
            });

            console.log('Received response:', response);

            // If response is not okay
            if (!response.ok) {
                console.log('Response not okay');

                // Parse error response as JSON
                const errorData = await response.json();
                console.log('Error data:', errorData);

                // Set error message based on response
                setErrorMessage(errorData.message);
            } else {
                // Set success message
                setSuccessMessage('Password reset successfully');
            }
        } catch (error) {
            // Log the error to console
            console.error('Error resetting password:', error);

            // Set error message
            setErrorMessage('Failed to reset password');
        }
    };

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="text-sm text-purple mb-4">
                Enter your new password.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-purple">
                        New Password
                    </label>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-purple">
                        Confirm Password
                    </label>
                    <div className="mt-2">
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            autoComplete="new-password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full rounded-md bg-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                    Reset Password
                </button>

                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {successMessage && <p className="text-green-500">{successMessage}</p>}
            </form>
        </div>
    );
}