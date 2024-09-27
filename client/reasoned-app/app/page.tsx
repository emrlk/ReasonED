import Button from "../components/Button";
import Footer from "../components/common/Footer";
import Header from "../components/common/header";
import Logo from '../components/Logo';

const Page = () => {
  return (
    <>
      <Header />
      <div className={ "constainer bg-orange-shades-400 mx-auto flex justify-center items-center flex-col text-center pt-0"}>
        <div className="flex-col flex">
          <Logo size={800} fillColor={'#541690'} />
        </div>
        <p className="text-2xl text-white mb-16 hover:scale-105 transition duration-300 font-bold">
          Empower Critical Thinking with Engaging Games
        </p>

        {/* Game Navigation Buttons */}
        <div className="font-bold text-white text-xl flex flex-col gap-1/2">
          <div className="w-60 mb-5">
            <a href="/elementary" className="elementaryGames">
              <Button title="Elementary School" disabled={false} className="bg-purple text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"></Button>
            </a>
          </div>
          <div className="w-60 mb-5">
            <a href="/middle-school" className="middleSchoolGames">
              <Button title="Middle School" disabled={false} className="bg-red-500 text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"></Button>
            </a>
          </div>
          <div className="w-60 mb-5">
            <a href="/high-school" className="highSchoolGames">
              <Button title="High School" disabled={false} className="bg-blue-500 text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"></Button>
            </a>
          </div>
          <div className="w-60">
            <a href="/college" className="collegeGames">
              <Button title="College" disabled={false} className="bg-yellow text-white w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"></Button>
            </a>
          </div>
        </div>
        <div className="space"></div>
      </div>
      <Footer />
    </>
  );
};
export default Page;
