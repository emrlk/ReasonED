"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function LoggedInHeader() {
    return (
        <div className={"constainer bg-purple text-white  mx-auto flex items-center  px-6 py-2 h-24"}>
            <Link href="/student-home-page">
                {/*<div className="hidden md:block cursor-pointer">*/}
                <div className="hidden md:block cursor-pointer mr-5 transform hover:scale-105">
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
                <div className="flex items-center justify-start gap-2 md:gap-8 font-bold hover:white text-2xl ">

                    {/* Profile */}
                    <div className="relative transform hover:scale-110 transition-transform duration-100 ease-in-out">
                        <Link href="student-profile" className="link">Profile</Link>
                    </div>

                    {/* Settings (Dropdown) */}
                    <div className="relative transform hover:scale-110 transition-transform duration-100 ease-in-out">
                    <Link href="settings" className="link"><span className="link cursor-pointer transform hover:scale-105">Settings</span></Link>
                        <div className="absolute z-10 mt-2 bg-white rounded shadow-md opacity-0 invisible transition-opacity duration-300">
                            <Link href="/edit-student-account" className="link block px-4 py-2 text-purple hover:bg-gray-200 rounded">Edit Account</Link>
                        </div>
                    </div>

                    {/* Add Leaderboard and other links here */}
                </div>
            </div>

            <div className="text-m flex items-center mr-10">
                {/* Sign Out */}
                <div className="link text-white transform hover:scale-110 transition-transform duration-100 ease-in-out ">
                    <Link href="/" className="font-bold">Sign Out</Link>
                </div>
            </div>
        </div>
    );
}
