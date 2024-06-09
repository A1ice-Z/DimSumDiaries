import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FiClock } from "react-icons/fi";
import Recipes from "../data/Recipes";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DirectionType, IngredientType, IngredientsType, RecipeType } from "../types/RecipeTypes";
import Calculator from "../components/Calculator/Calculator";


const Recipe404 = () => {
    return <>
        <Navbar />
        <div className="h-[80vh] w-full flex justify-center items-center">
            <p className="font-semibold text-[25px]">Could not find recipe :(</p>
        </div>
        <Footer />
    </>
}

const Recipe = () => {
    const params = useParams();
    const [recipe, setRecipe] = useState<RecipeType>();
    const [servings, setServings] = useState<number>(1);

    useEffect(() => {
        getRecipe()
    }, [params])

    const getRecipe = () => {
        console.log(params)
        const currentRecipe = Recipes.filter(x => x.id == String(params.id))
        console.log(currentRecipe)
        if (currentRecipe.length > 0) {
            setRecipe(currentRecipe[0])
        }
    }

    const manipulateMeasurement = (amount: number, measureType: string): string => {
        let currentAmount = amount;
        let currentMeasureType = measureType;

        if (currentMeasureType == "g" && currentAmount >= 1000) {
            currentAmount *= 0.001
            currentMeasureType = "kg"
        }

        if (currentMeasureType == "ml" && currentAmount >= 100) {
            currentAmount *= 0.01
            currentMeasureType = "dl"
        }

        if (currentMeasureType == "dl" && currentAmount >= 10) {
            currentAmount *= 0.1
            currentMeasureType = "l"
        }

        if (measureType != "") {
            currentAmount = Number(currentAmount.toPrecision(3))
        }

        return `${currentAmount} ${currentMeasureType} `
    }

    useEffect(() => {
        const currentServings = sessionStorage.getItem("servings")
        if (currentServings == "") {
            sessionStorage.setItem("servings", JSON.stringify(servings));
        }
        else {
            setServings(JSON.parse(currentServings || "1"))
        }
    }, [])


    return (
        <>
            {recipe ? <>
                <Navbar />
                <main className="h-fit w-full bg-cream">
                    <div className="h-fit w-full px-[5vh] pt-[10vh] flex justify-center ">
                        <div className="bg-cream h-[470px] w-[70%] overflow-hidden rounded-lg relative left-[130px]">
                            <img src={recipe?.image}
                                alt={recipe?.id}
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
                                        <p className="font-palatino font-medium">{recipe?.title}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center relative bottom-2">
                        <div className="bg-cream-light h-fit w-[80%] flex py-10 px-10 rounded-md pb-[60px]">
                            <div className="flex-none w-[30%]">
                                <Calculator servings={servings} setServings={setServings} />
                                <div className="bg-gray-400 h-[2px] my-5"></div>
                                <div className="h-full w-full flex items-start justify-center">
                                    <div className="text-center py-1">
                                        <p className="text-[40px] py-1 font-medium">INGREDIENTS</p>
                                        {recipe?.ingredients.map((ingredients: IngredientsType) => (
                                            <>
                                                <p className="text-[25px] pt-6 font-normal">{ingredients?.title.toUpperCase()}</p>
                                                {ingredients?.content.map((ingredient: IngredientType) => (
                                                    <p className="text-[20px] font-light leading-8">
                                                        {manipulateMeasurement(Number(ingredient?.amount) * servings, ingredient?.type.measure)}
                                                        {ingredient?.title}
                                                    </p>
                                                ))}
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-400 w-[2px] mx-10 my-2 rounded-lg"></div>
                            <div className="flex-1 w-[69%]">
                                <div className="flex justify-start items-center pt-2">
                                    <p className="flex-none w-fit text-[40px] h-full ">DIRECTIONS</p>
                                    <div className="flex-1  w-[40%] flex justify-end h-full items-center">
                                        <FiClock className="text-[40px]" />
                                        <p className="text-[24px] px-3 font-light">{recipe?.time} MIN</p>
                                    </div>
                                </div>
                                {recipe?.directions.map((directions: DirectionType) => (
                                    <>
                                        <p className="text-[30px] py-5">{directions?.title.toUpperCase()}</p>
                                        {directions?.content.map((content: string) => (
                                            <>
                                                <div className="flex justify-start py-2">
                                                    <img src="/heart.svg" alt="Heart" className="w-[20px] h-[20px] mt-2" />
                                                    <p className="pl-4 text-[20px] font-light leading-8"> {content}
                                                    </p>
                                                </div>
                                            </>
                                        ))}
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </> : <><Recipe404 /></>}</>

    );
}

export default Recipe