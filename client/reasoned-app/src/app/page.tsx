import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  // Text inside the button
  title: string;
  //Can interact with?
  disabled: boolean;
}

function Button({ title, disabled}: ButtonProps) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}

const Page = () => {
  return(
    <>
        {/**Navbar */}
    <div className={"constainer bg-orange text-purple text-xl mx-auto flex items-center border-b-2 px-6 py-2 h-24"}>
      <Image
        src="/ReasonEDLogo.png"
        width={250}
        height={190}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <div className="grow">
        <div className="flex items-center justify-center gap-2 md:gap-8 font-bold hover:white">
          <Link href="students">Students</Link>
          <Link href="teachers">Teachers</Link>
          <Link href="about">About</Link>
        </div>
      </div>
      <div className={"text-sm"}>
        <Link href="signup" className="mr-2 font-semibold">Sign Up</Link>
        <Link href="login" className="font-bold">Log In</Link>
      </div>
    </div>
    
    {/**Page Body */}
    <div className={"constainer bg-orange h-screen mx-auto flex justify-center items-center  "}>

      <div className ="font-bold text-white text-xl">
        <Button title="Elementary School" disabled={false}/>
      </div>

      
    </div>
    </>

    
  );
};
export default Page;