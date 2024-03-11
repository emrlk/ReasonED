import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div className={"constainer bg-purple text-white  mx-auto flex items-center  px-6 py-2 h-24"}>
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
            <div className="flex-grow ">
                <div className="flex items-center justify-start gap-2 md:gap-8 font-bold hover:white text-2xl ">

                    {/* Students */}
                    <Link href="students" className="link">Students</Link>

                    {/* Teachers (Dropdown)*/}
                    <div className="relative">
                    <Link href="teachers" className="link"><span className="link cursor-pointer">Teachers</span></Link>
                        <div className="absolute z-10 mt-2 bg-white rounded shadow-md opacity-0 invisible transition-opacity duration-300">
                            <Link href="/resources" className="link block px-4 py-2 text-purple hover:bg-gray-200">Resources</Link>
                        </div>
                    </div>

                    {/* About */}
                    <div className="relative">
                    <Link href="about" className="link"><span className="link cursor-pointer">About</span></Link>
                    </div>
                </div>
            </div>

            <div className="text-m flex items-center mr-10">
                {/* Sign-Up */}
                <div className="bg-orange text-white rounded-md px-3 py-1 mr-3 button">
                    <Link href="/user-selection" className="font-semibold">Sign Up</Link>
                </div>

                {/* Log-In */}
                <div className="link text-white ">
                    <Link href="/log-in" className="font-bold">Log In</Link>
                </div>
            </div>
        </div>
    );
}
