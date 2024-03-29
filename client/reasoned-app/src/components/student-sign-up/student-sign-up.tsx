"use client";
import React, { useState } from "react";

// Function to validate password
function validatePassword(password) {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{6,}$/;
  const missingValidations = [];
  if (!passwordRegex.test(password)) {
    if (!/(?=.*\d)/.test(password)) {
      missingValidations.push("at least one number");
    }
    if (!/(?=.*[a-z])/.test(password)) {
      missingValidations.push("at least one lowercase letter");
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      missingValidations.push("at least one uppercase letter");
    }
    if (!/(?=.*[!@#$%^&*()_+}{"':;?/>.<,])/.test(password)) {
      missingValidations.push("at least one special character");
    }
    if (password.length < 6) {
      missingValidations.push("at least 6 characters long");
    }
    return `Password must contain ${missingValidations.join(", ")}`;
  }
  // No validation error
  return "";
}

export default function CreateAccount() {
  // Define initial form data
  const initialFormData = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    dob: "",
  };

  // State variables for form data, success message, and error message
  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if password and confirm password match
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Passwords do not match");
        return;
      }

      // Password validation
      const passwordError = validatePassword(formData.password);
      if (passwordError) {
        setErrorMessage(passwordError);
        setSuccessMessage("");
        return;
      }

      // Log formData before sending the POST request
      console.log("Form Data:", formData);

      // Send POST request to create new account
      const response = await fetch("http://localhost:3001/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if request was successful
      if (!response.ok) {
        // Parse response body as JSON
        const responseData = await response.json();

        // Check if the error message indicates a duplicate email or username
        if (responseData.error === "Email address already registered") {
          // Set error message for duplicate email
          setErrorMessage("This email address is already registered");
        } else if (responseData.error === "Username already taken") {
          // Set error message for duplicate username
          setErrorMessage("This username is already taken");
        } else {
          // Set generic error message
          throw new Error("Failed to create account");
        }

        // Reset success message
        setSuccessMessage("");
      } else {
        // Set success message
        console.log("Account created successfully");
        setSuccessMessage("Account created successfully");

        // Reset error message
        setErrorMessage("");

        // Clear form fields
        setFormData(initialFormData);
      }
    } catch (error) {
      // Log the error message to the console for debugging purposes
      console.error("Error creating account: ", error.message);

      // Set error message and clear success message
      setErrorMessage("Failed to create account");

      // Reset success message
      setSuccessMessage("");
    }
  };

  // TSX Structure
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-purple"
          >
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
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-purple"
          >
            Username
          </label>
          <div className="mt-2">
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={formData.username}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-purple"
          >
            Password
          </label>
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

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium leading-6 text-purple"
          >
            Confirm Password
          </label>
          <div className="mt-2">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium leading-6 text-purple"
          >
            Date of Birth
          </label>
          <div className="mt-2">
            <input
              id="dob"
              name="dob"
              type="date"
              autoComplete="bday"
              required
              value={formData.dob}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        { }

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

        <div>
          {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
        </div>
        <div>
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
}
