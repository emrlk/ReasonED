import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white text-purple font-bold py-2">
            <div className="container mx-auto text-center">
                <p>
                    <a href="https://www.odu.edu" className="text-blue-500 hover:underline">Old Dominion University</a><br />
                    <a href="https://www.cs.odu.edu" className="text-blue-500 hover:underline">ODU Computer Science Department</a><br />
                    &copy; ReasonED.io. All rights reserved.
                </p>
            </div>
        </footer>
    );
}