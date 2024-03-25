import React, { useState, useEffect } from 'react';

export default function ChangeUsername() {
    // State variables 
    const [newUsername, setNewUsername] = useState('');
    const [confirmUsername, setConfirmUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Use useEffect to fetch user data when the component mounts
    useEffect(() => {
        // Define a function to fetch user data
        const fetchUserData = async () => {
            try {
                // Retrieve the JWT token from local storage
                const token = localStorage.getItem('token');

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

                // Set loading to false since data has been fetched
                setLoading(false);
            } catch (error) {
                // Log any errors
                console.error('Error fetching user data:', error);

                // Set loading to false to indicate that the data fetching is completed
                setLoading(false);
            }
        };

        // Call the fetchUserData function
        fetchUserData();
    }, []); // Run once on component mount

    // Function to handle form submission
    const handleSubmit = async (e) => {
        // Prevents default form submission behavior
        e.preventDefault();

        // Check if new username matches confirm username
        if (newUsername !== confirmUsername) {
            // Set error message
            setErrorMessage('Usernames do not match');
            setSuccessMessage('');

            // Exit the function
            return;
        }

        try {
            // Change user's username from the back-end
            const response = await fetch('http://localhost:3001/change-username', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: currentUser.email, newUsername, confirmUsername })
            });

            // If response is not okay
            if (!response.ok) {
                // Parse error response as JSON
                const errorData = await response.json();

                // Set error message and clear success message
                setErrorMessage(errorData.message);
                setSuccessMessage('');
            } else {
                // Clear error message and set success message
                setErrorMessage('');
                setSuccessMessage('Username changed successfully');
            }
        } catch (error) {
            // Log the error to console
            console.error('Error changing username:', error);

            // Set error message and clear success message
            setErrorMessage('Failed to change username');
            setSuccessMessage('');
        }
    };

    // TSX Structure
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="text-sm text-purple mb-4">
                Enter your new username.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="newUsername" className="block text-sm font-medium leading-6 text-purple">
                        New Username
                    </label>
                    <div className="mt-2">
                        <input
                            id="newUsername"
                            name="newUsername"
                            type="text"
                            autoComplete="username"
                            required
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="confirmUsername" className="block text-sm font-medium leading-6 text-purple">
                        Confirm Username
                    </label>
                    <div className="mt-2">
                        <input
                            id="confirmUsername"
                            name="confirmUsername"
                            type="text"
                            autoComplete="username"
                            required
                            value={confirmUsername}
                            onChange={(e) => setConfirmUsername(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="flex justify-between space-x-4">
                    <button
                        type="submit"
                        className="w-full rounded-md bg-purple px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                    >
                        Update
                    </button>

                    <a
                        href="/edit-student-account"
                        className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-red-500 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300 flex justify-center items-center"
                    >
                        Cancel
                    </a>
                </div>

                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
            </form>
        </div>
    );
}
