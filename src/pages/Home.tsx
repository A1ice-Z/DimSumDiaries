import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { PiBowlFoodFill } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { LuCalendarHeart } from "react-icons/lu";
import recipes from "../data/FoodCards";
import FoodCardList from "../components/FoodCards/FoodCardList";
import { useEffect, useState } from "react";

const Home = () => {
    const [favorites, setFavorites] = useState<String[]>([]);

    useEffect(() => {
        const currentFavorites = sessionStorage.getItem("favorites");

        if (currentFavorites == "") {
            sessionStorage.setItem("favorites", JSON.stringify(favorites));
        } else {
            setFavorites(JSON.parse(currentFavorites || "[]"));
        }
    }, []);

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
                            <div className="flex h-[250px] w-full items-end justify-end relative">
                                <img
                                    className="absolute inset-0 w-full h-full rounded-lg"
                                    src="/kitties.svg"
                                    alt="cats"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-[20px] font-palatino text-[30px]">
                    <div className="py-[15px] ">
                        <div className="flex gap-2 pl-[5%]">
                            <p>My Favorites</p>
                            <div>
                                <FiHeart className="h-full items-end" />
                            </div>
                        </div>

                        <div className="relative left-[5%]">
                            <FoodCardList
                                recipes={recipes.filter((recipe) =>
                                    favorites.includes(recipe.id)
                                )}
                            />
                        </div>
                    </div>
                    <div className="py-[15px]">
                        <div className="flex gap-2 pl-[5%]">
                            <p>This Weeks Recepies</p>
                            <div>
                                <LuCalendarHeart className="h-full items-end" />
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="py-[15px]">
                        <div className="flex gap-2 pl-[5%]">
                            <p>All recepies</p>
                            <div>
                                <PiBowlFoodFill className="h-full items-end" />
                            </div>
                        </div>
                        <div className="relative h-fit w-full overflow-hidden overflow-x-scroll scrollbar-hide">
                            <div className="inline-block relative left-[5%]">
                                <FoodCardList recipes={recipes} />
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
