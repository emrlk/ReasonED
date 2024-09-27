import Image from "next/image";
import Link from "next/link";
import Logo from "../Logo";

// Default navigation bar before a user logs in
export default function Header() {
  return (
    <div
      className={
        "constainer bg-purple-shades-900 text-white  mx-auto flex items-center  px-6 py-0 h-20"
      }
    >
      <Link href="/">
        {/*<div className="hidden md:block cursor-pointer">*/}
        <div className="hidden md:block cursor-pointer ml-5 transform hover:scale-105 pl-20 pb-4">
          <Logo size={200}></Logo>
        </div>
      </Link>

      {/*<div className="grow">
                <div className="flex items-center justify-center gap-2 md:gap-8 font-bold hover:white"></div>*/}
      <div className="flex-grow ">
        <div className="flex items-center justify-center gap-2 md:gap-8 font-bold hover:white text-xl ">
          {/* Students */}
          <div className="relative transform hover:scale-110 transition-transform duration-100 ease-in-out">
            <Link href="/students" className="link">
              Students
            </Link>
          </div>

          {/* Teachers (Dropdown)*/}
          <div className="relative transform hover:scale-110 transition-transform duration-100 ease-in-out">
            <Link href="teachers" className="link">
              <span className="link cursor-pointer transform hover:scale-105">
                Teachers
              </span>
            </Link>
            <div className="absolute z-10 mt-2 bg-white rounded shadow-md opacity-0 invisible transition-opacity duration-300">
              <Link
                href="/resources"
                className="link block px-4 py-2 text-purple hover:bg-gray-200 rounded"
              >
                Resources
              </Link>
            </div>
          </div>

          {/* About */}
          <div className="relative transform hover:scale-110 transition-transform duration-100 ease-in-out">
            <Link href="about-reasoned" className="link">
              About
            </Link>
          </div>
        </div>
      </div>

      <div className="text-m flex items-center mr-10 pr-20">
        {/* Sign-Up */}
        <div className="bg-orange text-white rounded-md px-3 py-1 mr-3 button hover:bg-orange-shades-300">
          <Link href="/user-selection" className="font-semibold">
            Sign Up
          </Link>
        </div>

        {/* Log-In */}
        <div className="link text-white transform hover:scale-110 transition-transform duration-100 ease-in-out ">
          <Link href="/log-in" className="font-bold">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
