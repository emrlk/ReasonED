import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div className={"constainer bg-orange text-purple text-xl mx-auto flex items-center border-b-2 px-6 py-2 h-24"}>
            <Link href="/">
                <div className="hidden md:block cursor-pointer">
                    <Image
                        src="/ReasonEDLogo.png"
                        width={250}
                        height={190}
                        className="hidden md:block"
                        alt="ReasonED Logo"
                    />
                </div>
            </Link>
            <div className="grow">
                <div className="flex items-center justify-center gap-2 md:gap-8 font-bold hover:white">
                    <Link href="students">Students</Link>
                    <Link href="teachers">Teachers</Link>
                    <Link href="/about">About</Link>
                </div>
            </div>
            <div className={"text-sm"}>
                <Link href="/sign-up" className="mr-2 font-semibold">Sign Up</Link>
                <Link href="/log-in" className="font-bold">Log In</Link>
            </div>
        </div>
    );
}
