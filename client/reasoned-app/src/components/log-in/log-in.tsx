"use client";
import React, { useState } from 'react';

export default function Login() {
    // State variables for form data and error message
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // State variables for success and error messages
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Function to handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/log-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // Check if response is not ok
            if (!response.ok) {
                // Parse response body as JSON
                const responseData = await response.json();

                // Check if the error message indicates a invalid email
                if (responseData.error === 'Invalid email') {
                    // Set error message for invalid email
                    setErrorMessage('Invalid email address');
                } else if (responseData.error === 'Invalid password') {
                    // Set error message for invalid password
                    setErrorMessage('Invalid password');
                } else {
                    // Set generic error message for other cases
                    setErrorMessage('Failed to login');
                }

                // Clear success message
                setSuccessMessage('');
            } else {
                // If response is successful, log success message
                console.log('Login successful');

                // Clear error message
                setErrorMessage('');

                // Set success message for successful login
                setSuccessMessage('Login successful');
            }
        } catch (error) {
            // Log the error message to the console for debugging purposes
            console.error('Error logging in: ', error.message);

            // Set error message for login failure
            setErrorMessage('Failed to login');

            // Clear success message
            setSuccessMessage('');
        }
    };

    return (
        <main className="flex">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-purple">
                            Email Address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-purple">
                                Password
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between space-x-4">
                        <button
                            type="submit"
                            className="w-full rounded-md bg-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                        >
                            Submit
                        </button>

                        <a
                            href="/"
                            className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-red-500 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300 flex justify-center items-center"
                        >
                            Cancel
                        </a>
                    </div>

                    {errorMessage && !successMessage && <p className="text-red-500">{errorMessage}</p>}
                    {successMessage && !errorMessage && <p className="text-green-500">{successMessage}</p>}
                </form>
            </div>
        </main>
    );
}