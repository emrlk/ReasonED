import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

interface ButtonProps {
    // Text inside the button
    title: string;
    //Can interact with?
    disabled: boolean;
}

function Button({ title, disabled }: ButtonProps) {
    return <button disabled={disabled}>{title}</button>;
}

const MannyPage = () => {
    return (
        <>
            {/**Navbar */}
            <Header />

            {/**Page Body */}
            <div
                className={
                    "constainer bg-orange h-screen mx-auto flex justify-center items-center flex-col text-center"
                }
            >
                <iframe src="/Manny Export/Manny.html" width="1000" height="1000"></iframe>

            </div>

            {/**Footer */}
            <Footer />
        </>
    );
};

export default MannyPage;
