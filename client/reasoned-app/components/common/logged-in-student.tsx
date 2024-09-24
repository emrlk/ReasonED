"use client";
import Image from "next/image";
import Link from "next/link";

// Default navigation bar for students
export default function LoggedInStudent() {
  return (
    <div
      className={
        "constainer bg-purple-shades-900 text-white  mx-auto flex items-center  px-6 py-2 h-24"
      }
    >
      <Link href="/student-home-page">
        {/*<div className="hidden md:block cursor-pointer">*/}
        <div className="hidden md:block cursor-pointer ml-5 transform hover:scale-105 pl-20">
          <Image
            src="/ReasonEDLogo.png"
            width={250}
            height={190}
            className="hidden md:block"
            alt="ReasonED Logo"
          />
        </div>
      </Link>

      {/*<div className="grow">
                <div className="flex items-center justify-center gap-2 md:gap-8 font-bold hover:white"></div>*/}
      <div className="flex-grow ">
        <div className="flex items-center justify-center gap-2 md:gap-8 font-bold hover:white text-2xl ">
          {/* Profile */}
          <div className="relative transform hover:scale-110 transition-transform duration-100 ease-in-out">
            <Link href="student-profile" className="link">
              Profile
            </Link>
          </div>

          {/* Settings (Dropdown) */}
          <div className="relative transform hover:scale-110 transition-transform duration-100 ease-in-out">
            <Link href="student-settings" className="link">
              <span className="link cursor-pointer transform hover:scale-105">
                Settings
              </span>
            </Link>
            <div className="absolute z-10 mt-2 bg-white rounded shadow-md opacity-0 invisible transition-opacity duration-300">
              <Link
                href="/edit-student-account"
                className="link block px-4 py-2 text-purple hover:bg-gray-200 rounded"
              >
                Edit Account
              </Link>
            </div>
          </div>

          {/* Add Leaderboard and other links here */}
        </div>
      </div>

      <div className="text-m flex items-center mr-10 pr-20">
        {/* Sign Out */}
        <div className="bg-orange text-white rounded-md px-3 py-1 mr-3 button hover:bg-orange-shades-300">
          <Link href="/" className="font-semibold">
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
}
