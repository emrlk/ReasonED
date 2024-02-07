import Image from "next/image";
import Link from "next/link";
import Header from '@/components/common/header';

interface ButtonProps {
  // Text inside the button
  title: string;
  //Can interact with?
  disabled: boolean;
}

function Button({ title, disabled }: ButtonProps) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}

const Page = () => {
  return (
    <>
      {/**Navbar */}
      <Header />

      {/**Page Body */}
      <div className={"constainer bg-orange h-screen mx-auto flex justify-center items-center flex-col text-center mt-3"}>
        <h1 className="font-bold text-8xl text-purple mb-3 hover:scale-105 transition duration-300">ReasonED<span className="text-white">.io</span></h1>
        <p className="text-lg text-purple mb-24 hover:scale-105 transition duration-300">Empower Critical Thinking with Engaging Games!</p>
        <div className="font-bold text-white text-xl">
          {/*<Button title="Elementary School" disabled={false} />*/}
          <div className="w-60 mb-4">
            <button className="bg-purple text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Elementary School</button>
          </div>
          <div className="w-60 mb-4">
            <button className="bg-red-500 text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Middle School</button>
          </div>
          <div className="w-60 mb-4">
            <button className="bg-blue-500 text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">High School</button>
          </div>
          <div className="w-60">
            <button className="bg-yellow text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">College</button>
          </div>
        </div>
      </div >
    </>
  );
};
export default Page;