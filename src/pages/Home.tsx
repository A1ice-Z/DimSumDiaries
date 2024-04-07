import Navbar from "../components/ Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FoodCard from "../components/FoodCard";

const Home = () => {
    return (
        <>
            <Navbar />
            <main className="h-[650px] w-full font-palatino">
                <div className="bg-cream w-full h-[280px]">
                    <div className="text-[40px] px-[4%] h-full flex items-end justify-center gap-[200px]">
                        <div>
                            <p>Welcome!</p>
                            <p>Velkommen!</p>
                            <p>欢迎！</p>
                        </div>
                        <div className="flex">
                            <img
                                className="pt-10 relative left-20 z-30"
                                src="/Orange.svg"
                                alt="Orange cat"
                            />
                            <img
                                className="z-40"
                                src="/Black.svg"
                                alt="Orange cat"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
