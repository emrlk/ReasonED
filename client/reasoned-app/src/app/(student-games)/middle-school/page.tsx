import React from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

export default function MiddleSchoolPage() {
    return (
        <>
            {/* Navbar */}
            <Header />

            {/* Page Body */}
            <div className="constainer bg-orange min-h-screen mx-auto py-8">
                <h2 className="flex justify-center text-4xl text-white font-bold mb-6">Middle School Games</h2>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
