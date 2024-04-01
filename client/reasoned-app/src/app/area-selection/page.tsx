import React from 'react';
import Link from 'next/link';

// Function to display area selection to teachers
export default function DescribeYourAreaPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-8">Describe your area</h1>
            <div className="flex flex-wrap justify-center gap-4">
                <Link href="/teacher-sign-up">
                    <button className="bg-yellow-shades-500 hover:bg-yellow-shades-600 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-110">
                        Elementary School
                    </button>
                </Link>
                <Link href="/teacher-sign-up">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-110">
                        Middle School
                    </button>
                </Link>
                <Link href="/teacher-sign-up">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-110">
                        High School
                    </button>
                </Link>
                <Link href="/teacher-sign-up">
                    <button className="bg-purple-shades-500 hover:bg-purple-shades-600 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-110">
                        College
                    </button>
                </Link>
            </div>
        </div>
    );
}