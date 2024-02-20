import React from 'react';

export default function DescribeYourAreaPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-8">Describe your area</h1>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-110">
                    Elementary School
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-110">
                    Middle School
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-110">
                    High School
                </button>
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-110">
                    College
                </button>
            </div>
        </div>
    );
}