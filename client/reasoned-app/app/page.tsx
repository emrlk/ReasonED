import Footer from "../components/common/footer";
import Header from "../components/common/header";
import Logo from '../components/Logo';

interface ButtonProps {
  // Text inside the button
  title: string;
  //Can interact with?
  disabled: boolean;
}

function Button({ title, disabled }: ButtonProps) {
  return <button disabled={disabled}>{title}</button>;
}

const Page = () => {
  return (
    <>
      {/**Navbar */}
      <Header />

      {/**Page Body */}
      <div
        className={
          "constainer bg-orange h-screen mx-auto flex justify-center items-center flex-col text-center"
        }>
        <div className="display-none mb-3">
          <Logo size={800} fillColor={'#541690'} />
        </div>
        <p className="text-2xl text-white mb-16 hover:scale-105 transition duration-300 font-bold">
          Empower Critical Thinking with Engaging Games
        </p>
        <div className="font-bold text-white text-xl flex flex-col gap-1/2">
          {/*<Button title="Elementary School" disabled={false} />*/}
          <div className="w-60 mb-5">
            <a href="/elementary" className="elementaryGames">
              <button className="bg-purple text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                Elementary School
              </button>
            </a>
          </div>
          <div className="w-60 mb-5">
            <a href="/middle-school" className="middleSchoolGames">
              <button className="bg-red-500 text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                Middle School
              </button>
            </a>
          </div>
          <div className="w-60 mb-5">
            <a href="/high-school" className="highSchoolGames">
              <button className="bg-blue-500 text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                High School
              </button>
            </a>
          </div>
          <div className="w-60">
            <a href="/college" className="collegeGames">
              <button className="bg-yellow text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                College
              </button>
            </a>
          </div>
        </div>
      </div>

      {/**Footer */}
      <Footer />
    </>
  );
};
export default Page;
