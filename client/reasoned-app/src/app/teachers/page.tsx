import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Link from "next/link";
export default function PrototypePage() {
  return (
    <>
      {/* Navbar */}
      <Header />

      {/* Page Body */}
      <div className="constainer bg-orange-shades-400 min-h-screen mx-auto py-5 ">
        <div className=" mb-5 mx-60 px-10 py-10">
          <h1 className="text-6xl text-white font-bold mb-10 ">Teachers</h1>

          {/* Left column */}
          <div className="flex justify-center ">
            <p className="text-white mb-4 text-xl">
              ReasonED aims to support teachers in educating their students
              about logical fallacies. Our age-curated games introduce students
              to logical fallacies in a fun, interactive way. Each of our
              characters embody specific logical fallacies and need help
              learning to reason more accurately about the world around them. As
              students progress through our games, they build the skills they
              need to combat these fallacies themselves. Be sure to visit our
              <Link href="resources" className="link text-purple font-bold">
                {" "}
                Resources{" "}
              </Link>
              page for tools to incorporate more of ReasonED in your classroom!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
