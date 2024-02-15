import React, { useState } from 'react';

export default function CreateAccount() {
    // Define initial form data
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        dob: '',
        gender: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    // Function to handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Write code here to handle form submission later (sending data to the server)
        console.log(formData);
    };

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-purple">
                        First Name
                    </label>
                    <div className="mt-2">
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-purple">
                        Last Name
                    </label>
                    <div className="mt-2">
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

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
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-purple">
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
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-purple">
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
                    <label htmlFor="dob" className="block text-sm font-medium leading-6 text-purple">
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

                <div>
                    <label className="block text-sm font-medium leading-6 text-purple">
                        Gender
                    </label>
                    <div className="mt-2 flex items-center">
                        <input
                            id="genderMale"
                            name="gender"
                            type="radio"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleChange}
                            className="focus:ring-sky-400 h-4 w-4 text-sky-400 border-gray-300"
                        />
                        <label htmlFor="genderMale" className="ml-2 text-purple">
                            Male
                        </label>
                        <input
                            id="genderFemale"
                            name="gender"
                            type="radio"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleChange}
                            className="ml-6 focus:ring-sky-400 h-4 w-4 text-sky-400 border-gray-300"
                        />
                        <label htmlFor="genderFemale" className="ml-2 text-purple">
                            Female
                        </label>
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
            </form>
        </div>
    );
}
