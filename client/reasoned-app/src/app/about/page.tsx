import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/common/header';

export default function AboutPage() {
    return (
        <>
            {/**Navbar */}
            <Header />

            {/**Page Body */}
            <div className={"constainer bg-orange h-screen mx-auto flex justify-center items-center"}>
                <div className="font-bold text-white text-xl px-8">
                    <h2>About ReasonED</h2>
                    <p className="mb-4">
                        ReasonED is a game-based learning website that improves the ability of users to identify logical fallacies through engaging, age-appropriate video games. ReasonED games will be curated for elementary, middle, and high school students respectively to support year-long learning and continuous learning over all grade levels. Thus, it will provide educators with a tool to cultivate their student’s critical reasoning skills over the long term and beyond the scope of a single subject.
                    </p>
                    <p className="mb-4">
                        These games will all share the same goal of introducing and improving logical fallacy identification skills, but the difficulties and approaches will vary depending on the age group. While the concepts and scenarios will be simplified for younger ages, the games aim to plant the seeds of critical thinking and encourage kids to recognize flawed reasoning. Many of the games will involve logical fallacies personified as fun characters. The fallacy characters will serve as memorable guides in student’s fallacy education journeys.
                    </p>
                    <p>
                        ReasonED resources can serve as a supplement to traditional classroom learning, offering an interactive and gamified approach to enhance critical reasoning skills, or as a standalone resource to introduce logical fallacies in places where such curriculum may be lacking. Because ReasonED is a website, once it is whitelisted on school networks, students can access it in their free time during school. As schools are pushing to incorporate more technology into lessons, ReasonED has the potential to gain a lot of exposure even outside of language arts classes.
                    </p>
                </div>
            </div >
        </>
    );
}
