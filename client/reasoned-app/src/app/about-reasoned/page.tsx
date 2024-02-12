import React from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

export default function AboutReasonED() {
    return (
        <>
            {/* Navbar */}
            <Header />

            {/* Page Body */}
            <div className="constainer bg-orange min-h-screen mx-auto py-8">
                <h2 className="text-4xl text-white font-bold mb-6">About ReasonED</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="flex flex-col justify-center">
                        <p className="text-white mb-4">
                            ReasonED is a game-based learning website that improves the ability of users to identify logical fallacies through engaging, age-appropriate video games. ReasonED games will be curated for elementary, middle, and high school students respectively to support year-long learning and continuous learning over all grade levels. Thus, it will provide educators with a tool to cultivate their student’s critical reasoning skills over the long term and beyond the scope of a single subject.
                        </p>
                        <p className="text-white mb-4">
                            These games will all share the same goal of introducing and improving logical fallacy identification skills, but the difficulties and approaches will vary depending on the age group. While the concepts and scenarios will be simplified for younger ages, the games aim to plant the seeds of critical thinking and encourage kids to recognize flawed reasoning. Many of the games will involve logical fallacies personified as fun characters. The fallacy characters will serve as memorable guides in student’s fallacy education journeys.
                        </p>
                        <p className="text-white mb-4">
                            ReasonED resources can serve as a supplement to traditional classroom learning, offering an interactive and gamified approach to enhance critical reasoning skills, or as a standalone resource to introduce logical fallacies in places where such curriculum may be lacking. Because ReasonED is a website, once it is whitelisted on school networks, students can access it in their free time during school. As schools are pushing to incorporate more technology into lessons, ReasonED has the potential to gain a lot of exposure even outside of language arts classes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
