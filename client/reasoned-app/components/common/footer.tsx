import Link from "next/link";
import Logo from "../Logo";
const Footer = () => {
  return (
    <div className=" bg-purple-shades-900 shadow m-0">
      <div className="w-full max-w-screen-xl mx-auto p-0 md:py-4">
        <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/">
        {/*<div className="hidden md:block cursor-pointer">*/}
        <div className="hidden md:block cursor-pointer ml-5 transform hover:scale-105 pl-20">
          <Logo size={200} fillColor={"#d1d5db"} ></Logo>
          </div>
      </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">
            <li>
            <Link href="about-reasoned" className="hover:underline link me-4 md:me-6">
              About
            </Link>
            </li>
            <li>
              <a href="https://github.com/emrlk/ReasonED/blob/main/README.md" className="hover:underline me-4 md:me-6">
                Contribute
              </a>
            </li>
            <li>
              <a href="https://github.com/emrlk/ReasonED/blob/main/LICENSE" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
            <Link href="contact-us" className="hover:underline link me-4 md:me-6">
              Contact
            </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center">
          © 2024{' '}
          <Link href="#" className="hover:underline">
              ReasonED
            </Link>
          . Open-source under MIT License.
        </span>
      </div>
    </div>
  );
};

export default Footer;

