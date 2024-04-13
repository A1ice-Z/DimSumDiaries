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
            <main className="h-[650px] w-full font-palatino">
                <div className="h-full items-center flex w-full justify-center">
                    <p className="text-[58px] underline">Stupid Alice</p>
                    <FoodCard
                        imageSrc={
                            "https://redhousespice.com/wp-content/uploads/2020/06/Jian-Bing-Chinese-crepe-10-1367x2048.jpg"
                        }
                        altText={"Good Food"}
                        caption={"Jian Bing - 煎饼"}
                    />
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
                        <div className="flex items-start justify-center gap-6">
                            {recipes.map((card: foodCardType) => (
                                <FoodCard {...card} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
