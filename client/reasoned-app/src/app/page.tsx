import Link from "next/link";

const Page = () => {
  return(
    <div
      className={"constainer mx-auto flex items-center border-b-2 px-6 py-2 h-24"}
    >

    <h1 className="font-bold" >ReasonEd</h1>
    <div className="grow">
      <div className="flex items-center justify-center gap-2 md:gap-8">
        <Link href="students">Students</Link>
        <Link href="students">Teachers</Link>
        <Link href="students">About</Link>
      </div>
    </div>
      <div>
        <Link href="signup" className="mr-2 font-bold">Sign Up</Link>
        <Link href="login" className="font-bold">Log In</Link>
      </div>
    </div>
    
  );
};
export default Page;