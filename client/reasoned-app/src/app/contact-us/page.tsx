import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ContactForm from '@/components/ContactForm';
export default function contact() {
    return (
        <>
            {/* Navbar */}
            <Header />
            {/* Page Body */}
            <div className="constainer bg-orange min-h-screen mx-auto py-5 ">
                <div className=" mb-5 mx-60 px-10 py-10">
                    <h1 className="text-6xl text-white font-bold mb-10 ">Contact Us</h1>

                    <div className="flex justify-left ">
                        <p className="text-white mb-4 text-xl font-semibold">
                            Have questions, suggestions, or resources to offer? Fill out the form below!
                        </p>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
