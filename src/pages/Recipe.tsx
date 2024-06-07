import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FiClock } from "react-icons/fi";

interface RecipeProps {

}

const Recipe = () => {
    return (
        <>
            <Navbar />
            <main className="h-fit w-full bg-cream">
                <div className="h-fit w-full px-[5vh] pt-[10vh] flex justify-center ">
                    <div className="bg-cream h-[470px] w-[70%] overflow-hidden rounded-lg relative left-[130px]">
                        <img src="https://redhousespice.com/wp-content/uploads/2022/05/scallion-pancakes-over-wire-rack-1024x1024.jpg"
                            alt="Cong You Bing"
                            className="object-cover z-20" />
                    </div>
                    <div className="relative right-[130px] ">
                        <div className="flex w-full items-end justify-end relative right-[5vh] pt-[4vh] top-[20px]">
                            <img
                                className="pt-10 relative left-20 z-30 w-[200px] h-[200px]"
                                src="/orangecat.svg"
                                alt="Orange cat"
                                draggable={false}
                            />
                            <img
                                className="z-40 w-[200px] h-[200px]"
                                src="/blackcat.svg"
                                alt="Black cat"
                                draggable={false}
                            />
                        </div>
                        <div className="h-[180px] w-[80vh] bg-cream-light z-20 shadow-lg" >
                            <div className="text-[40px] h-full w-full flex items-center justify-start px-10">
                                <div>
                                    <p className="font-palatino font-medium">Cong You Bing</p>
                                    <p className="font-palatino font-medium">葱油饼</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center relative bottom-2">
                    <div className="bg-cream-light h-[100vh] w-[80%] flex py-10 px-10 rounded-md">
                        <div className="flex-none w-[30%]">
                            <div className="bg-cream w-[100%] h-[10%]">

                            </div>
                            <div className="bg-gray-400 h-[2px] my-5"></div>
                            <div className="h-full w-full flex items-start justify-center">
                                <div className="text-center py-1">
                                    <p className="text-[40px] py-1">INGREDIENTS</p>
                                    <p className="text-[25px] pt-1">FOR THE DOUGH</p>
                                    <p className="text-[20px]">300 ML MILK <br /> 300 ML MILK <br /> 300 ML MILK </p>
                                    <p className="text-[25px] pt-2">FOR THE FILLING</p>
                                    <p className="text-[20px]">300 ML MILK <br /> 300 ML MILK <br /> 300 ML MILK </p>
                                    <p className="text-[25px] pt-2">FOR FRYING</p>
                                    <p className="text-[20px]">300 ML MILK <br /> 300 ML MILK <br /> 300 ML MILK </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-400 w-[2px] mx-10 my-2 rounded-lg"></div>
                        <div className="flex-1 w-[69%]">
                            <div className="flex justify-start items-end pt-2">
                                <p className="flex-none w-fit text-[40px] h-full ">DIRECTIONS</p>
                                <div className="flex-1  w-[40%] flex justify-end h-full items-center">
                                    <FiClock className="text-[40px]" />
                                    <p className="text-[24px] px-3">40 MIN</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[30px] py-5">MAKE THE DOUGH</p>
                            </div>
                            <div className="pt-5">
                                <div className="flex justify-start">
                                    <img src="/heart.svg" alt="Heart" className="w-[20px] h-[20px] mt-2" />
                                    <p className="pl-4 text-[20px]">Put flour into a heatproof bowl. Pour in hot water. Stir with chopsticks until no more
                                        loose flour or water can be seen. Use your hands to combine the mixture into a rough-looking dough.
                                    </p>
                                </div>
                                <div className="flex justify-start pt-4">
                                    <img src="/heart.svg" alt="Heart" className="w-[20px] h-[20px] mt-2" />
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Recipe