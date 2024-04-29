import Navbar from "../components/ Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { PiBowlFoodFill } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { LuCalendarHeart } from "react-icons/lu";
import FoodCard from "../components/FoodCard";
import recipes from "../data/recipes";
import foodCardType from "../types/types";

const Home = () => {
    return (
        <>
            <Navbar />
            <main className="h-fit w-full font-palatino">
                <div className="bg-cream h-[330px] flex items-center">
                    <div className="bg-cream-light py-[10px] w-full h-[270px]">
                        <div className="text-[40px] h-full w-full flex items-end justify-start px-[5%] gap-[52%]">
                            <div>
                                <p>Welcome!</p>
                                <p>Velkommen!</p>
                                <p>欢迎！</p>
                            </div>
                            <div className="flex w-full items-end justify-end">
                                <img
                                    className="pt-10 relative left-20 z-30"
                                    src="/orangecat.svg"
                                    alt="Orange cat"
                                    draggable={false}
                                />
                                <img
                                    className="z-40"
                                    src="/blackcat.svg"
                                    alt="Black cat"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-[20px] px-[5%] font-palatino text-[30px]">
                    <div className="py-[15px]">
                        <div className="flex gap-2">
                            <p>My Favorites</p>
                            <div>
                                <FiHeart className="h-full items-end" />
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="py-[15px]">
                        <div className="flex gap-2">
                            <p>This Weeks Recepies</p>
                            <div>
                                <LuCalendarHeart className="h-full items-end" />
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="py-[15px]">
                        <div className="flex gap-2">
                            <p>All recepies</p>
                            <div>
                                <PiBowlFoodFill className="h-full items-end" />
                            </div>
                        </div>
                        <div className="flex items-start justify-start gap-6">
                            {recipes.map((card: foodCardType) => (
                                <FoodCard {...card} />
                            ))}
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </>
    );
};

export default Home;
