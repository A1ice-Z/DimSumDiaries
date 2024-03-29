import Navbar from "../components/ Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <main className="h-[650px] w-full font-palatino">
                <div className="h-full items-center flex w-full justify-center">
                    <p className="text-[58px] underline">Stupid Alice</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
