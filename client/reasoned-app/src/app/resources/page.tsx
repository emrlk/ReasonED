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
                <h2 className="text-4xl text-white font-bold mb-6">Printable Resources</h2>
                
                <p className="text-white mb-4">
                    These free-to-print resources are designed to support using ReasonED in the classroom.
                </p>  
                    
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
