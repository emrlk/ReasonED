import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  // Text inside the button
  title: string;
  //Can interact with?
  disabled: boolean;
  color: string;
}

function Button({ title, disabled, color,}: ButtonProps) {
  return (
    <button disabled={disabled} color={color}>{title}</button>
  );
}

const Page = () => {
  return(
    <>
        {/**Navbar */}
    <div className={"constainer bg-orange text-purple text-2xl mx-auto flex items-center border-b-2 px-6 py-2 h-24"}>
      <Image
        src="/ReasonEDLogo.png"
        width={250}
        height={190}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <div className="grow">
        <div className="flex items-center justify-center gap-2 md:gap-8 font-bold">
          <Link href="students">Students</Link>
          <Link href="students">Teachers</Link>
          <Link href="students">About</Link>
        </div>
      </div>
      <div className={"text-lg "}>
        <Link href="signup" className="mr-2">Sign Up</Link>
        <Link href="login" className="font-bold">Log In</Link>
      </div>
    </div>
    
    {/**Page Body */}
    <div className={"constainer bg-orange mx-auto flex justify-center items-center border-b-2 px-6 py-2 h-24"}>


      <Button title="Elementary School" disabled={false} color={'bg-orange'} />
    </div>
    </>

    
  );
};
export default Page;