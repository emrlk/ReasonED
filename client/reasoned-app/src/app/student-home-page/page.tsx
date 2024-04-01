"use client";
import React, { useState, useEffect } from "react";
import LoggedInHeader from "@/components/common/logged-in-student";
import Footer from "@/components/common/footer";

// Client-side page to allow students to view their home page
const StudentPage = () => {
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

  // TSX Structure
  return (
    <>
      {/**Navbar */}
      <LoggedInHeader />

      {/**Page Body */}
      <div
        className={
          "constainer bg-orange h-screen mx-auto flex justify-center items-center flex-col text-center"
        }
      >
        {/**Welcome Message */}
        <h1 className="font-extrabold text-8xl text-purple mb-3 hover:scale-105 transition duration-300">
          {currentUser ? `Welcome ${currentUser.username}!` : "Welcome User~"}
        </h1>
        <p className="text-2xl text-white mb-16 hover:scale-105 transition duration-300 font-bold">
          Empower Critical Thinking with Engaging Games
        </p>
        <div className="font-bold text-white text-xl flex flex-col gap-1/2">
          {/*<Button title="Elementary School" disabled={false} />*/}
          <div className="w-60 mb-5">
            <a href="/elementary" className="elementaryGames">
              <button className="bg-purple text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                Elementary School
              </button>
            </a>
          </div>
          <div className="w-60 mb-5">
            <a href="/middle-school" className="middleSchoolGames">
              <button className="bg-red-500 text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                Middle School
              </button>
            </a>
          </div>
          <div className="w-60 mb-5">
            <a href="/high-school" className="highSchoolGames">
              <button className="bg-blue-500 text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                High School
              </button>
            </a>
          </div>
          <div className="w-60">
            <a href="/college" className="collegeGames">
              <button className="bg-yellow text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                College
              </button>
            </a>
          </div>
        </div>
      </div>

      {/**Footer */}
      <Footer />
    </>
  );
};

export default StudentPage;
