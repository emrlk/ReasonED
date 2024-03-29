import React from "react";
import Link from "next/link";

export default function UserTypeSelectionPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Describe your account type</h1>
      <div className="flex space-x-4">
        <Link href="/area-selection" legacyBehavior>
          <a className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-110">
            Teacher
          </a>
        </Link>
        <Link href="/student-sign-up" legacyBehavior>
          <a className="bg-orange-shades-500 hover:bg-orange-shades-600 text-white font-bold py-3 px-6 rounded-lg transform transition duration-300 hover:scale-110">
            Student
          </a>
        </Link>
      </div>
    </div>
  );
}
