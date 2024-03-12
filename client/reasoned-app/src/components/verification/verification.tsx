"use client";
import React, { useState, useEffect } from 'react';

// Client-side component for 2FA page
export default function Verification() {
    // State variables 
    const [verificationCode, setVerificationCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [currentUser, setCurrentUser] = useState(null);

    // Use useEffect to fetch user data when the component mounts
    useEffect(() => {
        // Define a function to fetch user data
        const fetchUserData = async () => {
            try {
                // Retrieve the JWT token from local storage
                const token = localStorage.getItem('token');

                // Debug statement to log the JWT token before making the fetch request
                // console.log('JWT Token:', token);

                // Fetch user data from the backend with token included in the headers
                const userDataResponse = await fetch('http://localhost:3001/fetch/user', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                // Check if response is not ok
                if (!userDataResponse.ok) {
                    // Handle error response
                    throw new Error('Failed to fetch user data');
                }

                // Parse the JSON response
                const userData = await userDataResponse.json();

                // Log the user data
                console.log('User Data:', userData);

                // Set the user data to the currentUser state
                setCurrentUser(userData);

            } catch (error) {
                // Log any errors
                console.error('Error fetching user data:', error);
            }
        };

        // Call the fetchUserData function
        fetchUserData();
    }, []); // Run once on component mount

    // Function to handle form submission
    const handleSubmit = async (e) => {
        // Prevents default form submission behavior
        e.preventDefault();

        // Check if currentUser is null
        if (!currentUser) {
            // Handle the case where currentUser is not available yet
            console.error('User data not available yet');
            return;
        }

        // POST request for verifying 2FA code
        try {
            const response = await fetch('http://localhost:3001/verify-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: currentUser.email, verificationCode })
            });

            // If response is not okay
            if (!response.ok) {
                // Parse error response as JSON
                const errorData = await response.json();

                // Set error message and clear success message
                // setErrorMessage(errorData.message);
                setErrorMessage('Invalid verification code');
                setSuccessMessage('');
            } else {
                // Clear error message and set success message
                setErrorMessage('');
                setSuccessMessage('Verification successful');

                // Redirect user to home page after a delay
                // setTimeout(() => {
                // window.location.href = '/home-page';
                // }, 2000); // 2 seconds delay

                // Parse the response body as JSON
                // const responseData = await response.json();

                // Extract the userType from the response data
                //const { usertype } = responseData;

                // Redirect user to the appropriate page based on userType
                if (currentUser.usertype === 'student') {
                    window.location.href = '/student-home-page';
                }
            }
        } catch (error) {
            // Log the error to console
            console.error('Error verifying code:', error);

            // Set error message and clear success message
            setErrorMessage('Failed to verify code');
            setSuccessMessage('');
        }
    };

    // JSX Structure
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="text-sm text-purple mb-4">
                Check your email and enter the verification code from it.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="verificationCode" className="block text-sm font-medium leading-6 text-purple">
                        Verification Code
                    </label>
                    <div className="mt-2">
                        <input
                            id="verificationCode"
                            name="verificationCode"
                            type="text"
                            autoComplete="off"
                            required
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="flex justify-between space-x-4">
                    <button
                        type="submit"
                        className="w-1/2 rounded-md bg-purple px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                    >
                        Verify
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