"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/components/common/footer";
import LoggedInTeacher from "@/components/common/logged-in-teacher";

// Client-side page to allow teachers to view their profiles
const TeacherProfile = () => {
    // Define state variables for currentUser and loading
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Use useEffect to fetch user data when the component mounts
    useEffect(() => {
        // Define a function to fetch user data
        const fetchUserData = async () => {
            try {
                // Retrieve the JWT token from local storage
                const token = localStorage.getItem("token");

                // Fetch user data from the backend with token included in the headers
                const userDataResponse = await fetch(
                    "http://localhost:3001/fetch/user",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                // Check if response is not ok
                if (!userDataResponse.ok) {
                    // Handle error response
                    throw new Error("Failed to fetch user data");
                }

                // Parse the JSON response
                const userData = await userDataResponse.json();

                // Log the user data
                console.log("User Data:", userData);

                // Set the user data to the currentUser state
                setCurrentUser(userData);

                // Set loading to false since data has been fetched
                setLoading(false);
            } catch (error) {
                // Log any errors
                console.error("Error fetching user data:", error);

                // Set loading to false to indicate that the data fetching is completed
                setLoading(false);
            }
        };

        // Call the fetchUserData function
        fetchUserData();
    }, []); // Run once on component mount

    // JSX Structure
    return (
        <>
            {/**Navbar */}
            <LoggedInTeacher />

            {/**Page Body */}
            <div className="bg-orange h-screen flex justify-center items-center flex-col text-center">
                <div className="container mx-auto">
                    <div className="font-bold text-white text-xl flex flex-col gap-1/2">
                        {/* Profile Card */}
                        <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white border-2 border-purple shadow-lg rounded-lg overflow-hidden">
                            <div className="px-6 py-8">
                                <div className="text-center">
                                    <h2 className="mb-2 text-2xl font-semibold text-purple">
                                        Profile
                                    </h2>
                                    <img
                                        className="mx-auto h-20 w-20 rounded-full shadow-lg"
                                        src="/Avatar.jpg"
                                        alt="Avatar Logo"
                                    />
                                    {/* <h2 className="text-lg font-semibold text-gray-800">{currentUser ? 'Profile' : 'Welcome User!'}</h2> */}
                                    {currentUser && (
                                        <>

                                            {/* Display teacher's email */}
                                            <p className="mt-2 text-sm text-purple">
                                                {currentUser.email}
                                            </p>

                                            {/* <p className="mt-2 text-sm text-purple">{currentUser.usertype}</p> */}

                                            {/* Display teacher's area */}
                                            <p className="mt-2 text-sm text-purple">
                                                Area: {currentUser.area_selection}
                                            </p>

                                            {/* Add other user information here */}
                                        </>
                                    )}
                                </div>
                            </div>
                            {/* Profile Card Footer */}
                            <div className="bg-gray-200 px-6 py-4">
                                <div className="flex justify-center">
                                    <a
                                        href="/edit-teacher-account"
                                        className="text-sm text-purple hover:underline"
                                    >
                                        Edit Account
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/**Footer */}
            <Footer />
        </>
    );
};

export default TeacherProfile;
