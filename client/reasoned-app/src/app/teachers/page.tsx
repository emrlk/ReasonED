import React from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

export default function PrototypePage() {
    return (
        <>
            {/* Navbar */}
            <Header />

            {/* Page Body */}
            <div className="constainer bg-orange min-h-screen mx-auto py-8">
                <h2 className="text-4xl text-white font-bold mb-6">Teachers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

                    {/* Left column */}
                    <div className="flex flex-col justify-center">
                        <p className="text-white mb-4">
                        ReasonED aims to support teachers in educating their students about logical fallacies. Our age-curated games introduce students to logical fallacies in a fun, interactive way. Each of our characters each embody a logical fallacy and need help learning to reason more accurately about the world around them. As students aid each character, they build the skills they need to combat these fallacies themselves. Be sure to visit our resources page for ways to incorporate ReasonED more fully in your classroom!
                        </p>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
