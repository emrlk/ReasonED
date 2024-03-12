import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import Link from 'next/link';

export default function AboutReasonED() {
    return (
        <>
            {/* Navbar */}
            <Header />
      {/* Page Body */}
      <div className="constainer bg-orange min-h-screen mx-auto py-5 ">
        <div className=" mb-5 mx-60 px-10 py-10">
          <h1 className="text-6xl text-white font-bold mb-10 ">Educational Resources</h1>


          <div className="flex justify-center ">
            <p className="text-white mb-4 text-xl font-semibold">
            Use these additional resources to reinforce logical fallacy education in your classroom!
            Have resources of your own to offer? 
            <Link href="contact-us" className="link text-purple font-bold"> Contact Us!</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
                    

