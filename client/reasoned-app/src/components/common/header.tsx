import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div className={"constainer bg-orange text-purple text-xl mx-auto flex items-center border-b-2 px-6 py-2 h-24"}>
            <Link href="/">
                {/*<div className="hidden md:block cursor-pointer">*/}
                <div className="hidden md:block cursor-pointer mr-5">
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
            <div className="flex-grow">
                <div className="flex items-center justify-start gap-2 md:gap-8 font-bold hover:white">
                    <Link href="students">Students</Link>
                    <Link href="teachers">Teachers</Link>
                    {/* About dropdown menu */}
                    <div className="relative">
                        <span className="cursor-pointer">About</span>
                        <div className="absolute z-10 mt-2 bg-white rounded shadow-md opacity-0 invisible transition-opacity duration-300">
                            <Link href="/problem" className="block px-4 py-2 text-purple hover:bg-gray-200">Problem</Link>
                            <Link href="/about-reasoned" className="block px-4 py-2 text-purple hover:bg-gray-200">About ReasonED</Link>
                            <Link href="/prototype-info" className="block px-4 py-2 text-purple hover:bg-gray-200">Prototype Info</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"text-sm"}>
                <Link href="/sign-up" className="mr-2 font-semibold">Sign Up</Link>
                <Link href="/log-in" className="font-bold">Log In</Link>
            </div>
        </div>
    );
}
