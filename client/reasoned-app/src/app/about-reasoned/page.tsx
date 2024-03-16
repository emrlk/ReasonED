import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Link from "next/link";

export default function AboutReasonED() {
    return (
        <>
            {/* Navbar */}
            <Header />
            {/* Page Body */}
            <div className="constainer bg-orange-shades-400 min-h-screen mx-auto py-5 ">
                <div className=" mb-5 mx-60 px-10 py-10">
                    <h1 className="text-6xl text-white font-bold mb-10 ">
                        What is ReasonED?
                    </h1>
                    <div className="flex justify-center ">
                        <p className="text-white mb-4 text-xl font-medium">
                            ReasonED is a game-based learning website that improves the
                            ability of users to identify logical fallacies through engaging,
                            age-appropriate video games. Games are be curated for elementary,
                            middle, and high school students respectively to support
                            continuous learning over all grade levels. Our goal is to help
                            educators cultivate their student’s critical reasoning skills over
                            the long term and beyond the scope of a single subject.
                            <br />
                            <br />
                            ReasonED games all share the same goal of introducing and
                            improving logical fallacy identification skills, but the
                            difficulties and approaches vary depending on the age group. While
                            the concepts and scenarios will be simplified for younger ages,
                            the games aim to plant the seeds of critical thinking and
                            encourage kids to recognize flawed reasoning. Many of the games
                            involve logical fallacies personified as fun characters. The
                            fallacy characters can serve as memorable guides in student’s
                            fallacy education journeys.
                            <br />
                            <br />
                            ReasonED resources can serve as a supplement to traditional
                            classroom learning, offering an interactive and gamified approach
                            to enhance critical reasoning skills, or as a standalone resource
                            to introduce logical fallacies in places where such curriculum may
                            be lacking. Because ReasonED is a website, once it is whitelisted
                            on school networks, students can access it in their free time
                            during school.
                        </p>
                    </div>
                </div>

                <div className=" mb-5 mx-60 px-10 py-10">
                    <h1 className="text-6xl text-white font-bold mb-10 ">The "Why?"</h1>
                    <div className="flex justify-center ">
                        <p className="text-white mb-4 text-xl font-medium">
                            In this digital era of the information age, the need for strong
                            critical thinking skills is at an all-time high. The ease of
                            viewing and sharing digital information has made us more
                            vulnerable than ever to misinformation and disinformation. While
                            Big Tech companies have started incorporating fact-checking
                            systems into their platforms, flawed information is not the only
                            way we can be misled online. With the growth of opinion content
                            across the web has come a growth in the use of flawed{" "}
                            <i>reasoning</i>, or logical fallacies.{" "}
                            <b>
                                <Link href="https://www.britannica.com/topic/fallacy">
                                    Britannica
                                </Link>
                            </b>{" "}
                            defines a logical fallacy as "erroneous reasoning that has the
                            appearance of soundness".
                            <br />
                            <br />
                            People use fallacies in their arguments, both accidentally and
                            intentionally, to try to assert their points, but do so by
                            misstating facts, using terms incorrectly, or using an improper
                            process of inference (Britannica). Logical fallacies are not
                            typically "black-and-white" claims of fact. Thus, they often slip
                            through the cracks of fact-checking systems and are free to float
                            around online. Making matters worse, social media sites employ
                            algorithms which curate our feeds to only show us what we want to
                            see. This process often results in filtering out content that is
                            not in support of our own beliefs and interests, exploiting our
                            confirmation bias and creating personal echo chambers we may not
                            even realize. <br />
                            <br />
                            Since fallacies are manipulative, yet go unchecked on a very
                            opinionated internet, it is{" "}
                            <b>solely up to users to recognize any faulty logic</b> in the
                            content they encounter. <br />
                            <br />
                            <b>
                                To be able to navigate the internet mindfully and distinguish
                                manipulative reasoning from genuine reasoning, we must have a
                                working knowledge of logical fallacies and adequate skills to
                                identify them.
                            </b>
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
