"use client";
import React, { useState } from 'react';

export default function ForgotPassword() {
    // State variables to manage email input, error message, and success message
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        // Prevents default form submission behavior
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Set the content type to JSON
                },
                body: JSON.stringify({ email })
            });

            // Check if request was successful
            if (!response.ok) {
                // Parse error response as JSON
                const errorData = await response.json();

                // Set error message based on response
                setErrorMessage(errorData.message);
            } else {
                // Set success message
                setSuccessMessage('Password reset link sent to your email');
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
                To reset your password, provide your email address.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-purple">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="flex justify-between space-x-4">
                    <button
                        type="submit"
                        className="w-1/2 rounded-md bg-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                    >
                        Submit
                    </button>

                    <a
                        href="/log-in"
                        className="w-1/2 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-red-500 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300 flex justify-center items-center"
                    >
                        Cancel
                    </a>
                </div>

                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {successMessage && <p className="text-green-500">{successMessage}</p>}
            </form>
        </div>
    );
}