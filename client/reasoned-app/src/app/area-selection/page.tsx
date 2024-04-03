"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Function to display area selection to teachers
export default function DescribeYourAreaPage() {
    // State to store the selected area
    const [selectedArea, setSelectedArea] = useState('');

    // Function to handle area selection
    const handleAreaSelect = (area) => {
        setSelectedArea(area);
    };

    // TSX Structure
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-8">Describe your area</h1>
            <div className="flex flex-wrap justify-center gap-4">
                {/* Link for Elementary School */}
                <Link href={{ pathname: '/teacher-sign-up', query: { area: 'Elementary School' } }} passHref>
                    <div className="bg-yellow-shades-500 hover:bg-yellow-shades-600 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-110">
                        Elementary School
                    </div>
                </Link>

                {/* Link for Middle School */}
                <Link href={{ pathname: '/teacher-sign-up', query: { area: 'Middle School' } }} passHref>
                    <div className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-110">
                        Middle School
                    </div>
                </Link>

                {/* Link for High School */}
                <Link href={{ pathname: '/teacher-sign-up', query: { area: 'High School' } }} passHref>
                    <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-110">
                        High School
                    </div>
                </Link>

                {/* Link for College */}
                <Link href={{ pathname: '/teacher-sign-up', query: { area: 'College' } }} passHref>
                    <div className="bg-purple-shades-500 hover:bg-purple-shades-600 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-110">
                        College
                    </div>
                </Link>
            </div>
        </div>
    );
}