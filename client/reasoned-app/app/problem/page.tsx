import Footer from "../../components/common/footer";
import Header from "../../components/common/header";

export default function ProblemPage() {
  return (
    <>
      {/**Navbar */}
      <Header />

      {/**Page Body */}
      <div className="constainer bg-orange min-h-screen mx-auto py-8">
        <h2 className="text-4xl text-white font-bold mb-6">Problem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Left column */}
          <div className="flex flex-col justify-center">
            <p className=" text-white mb-4">
              High school graduates are not prepared with the skills necessary
              to identify logical fallacies in an increasingly online world.
            </p>
            <p className="text-white mb-4">
              In this digital era, where the internet serves as a vast source of
              information, the need for sound critical thinking skills is more
              significant than ever. However, with the abundance of online
              content, we face a pressing societal challenge: the prevalence of
              logical fallacies, misinformation, and a lack of emphasis on
              critical reasoning skills.
            </p>
            <p className="text-white mb-4">
              Although American K-12 schools advocate for technology literacy,
              many do not educate students about logical fallacies beyond a
              brief lesson in high school language arts. A report titled
              “Teaching Critical Thinking in K-12” noted that among 4th-grade
              teachers, 86% emphasized teaching deductive reasoning, but this
              figure sharply declines to a mere 39% among 8th-grade teachers
              when expressing the same sentiment. Moreover, in a 2019 global
              survey conducted by Cambridge, 50% of teachers indicated they do
              not have enough time to effectively teach these skills, and only
              21% of teachers agreed that they possess all the necessary
              resources to cultivate these skills.
            </p>
          </div>

          {/* Right column */}
          <div>
            <p className="text-white mb-4">
              Many existing curriculums do not include adequate resources for
              teaching logical fallacies. If educators wish to emphasize these
              concepts, they must spend time either creating their own materials
              or searching through the internet to find potential tools. Then
              arises another challenge: if the resources are not reusable over
              the course of the year, students will not develop adequate skills,
              and if there are not similar resources across grade levels,
              students will forget the material and fail to build on the skills
              they have acquired. Only if all of these elements come together
              will students be fully supported to build their skills in logical
              fallacy detection.
            </p>
            <p className="text-white mb-4">
              An optimal solution should account for these common pitfalls by
              having resources that are:
              <ol className="text-white list-decimal ml-8 mb-4">
                <li>
                  Reusable in a way that still builds on fallacy identification
                  skills
                </li>
                <li>
                  Curated for multiple grade levels ranging from elementary to
                  high school.
                </li>
                <li>
                  Quick for educators to set up and easy to guide students
                  through.
                </li>
              </ol>
              Team Crystal is proposing a software solution:{" "}
              <b className="text-purple">ReasonED.io</b>
            </p>
          </div>
        </div>

        {/* Call-to-action section */}
        <div className="flex flex-col items-center mt-8">
          <h3 className="text-2xl text-purple font-bold mb-4">
            Ready to empower critical thinking?
          </h3>
          <a href="/sign-up">
            <button className="bg-purple text-white py-3 px-6 rounded-md button font-semibold">
              Get Started
            </button>
          </a>
        </div>
      </div>

      {/**Footer */}
      <Footer />
    </>
  );
}
