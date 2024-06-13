import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FiClock } from "react-icons/fi";
import Recipes from "../data/Recipes";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    DirectionType,
    IngredientType,
    IngredientsType,
    RecipeType,
} from "../types/RecipeTypes";
import Calculator from "../components/Calculator/Calculator";

const Recipe404 = () => {
    return (
        <>
            <Navbar />
            <div className="h-[65vh] w-full flex justify-center items-center ">
                <div className="h-[180px] w-fit bg-cream-light z-20 shadow-lg">
                    <div className="h-full w-full flex  gap-4">
                        <div className="h-full flex items-center justify-center px-[80px] leading-[35px]">
                            <p className="font-semibold text-[30px] tracking-wider">
                                We're Sorry! <br />
                                <span className="font-light text-[20px] ">
                                    {" "}
                                    We could not find the recipe you were
                                    looking for...
                                </span>
                            </p>
                        </div>
                        <div className="flex items-start pt-4 relative right-[25px] justify-end">
                            {" "}
                            <p className="text-[20px] text-orange">404</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

const Recipe = () => {
    const params = useParams();
    const [recipe, setRecipe] = useState<RecipeType>();
    const [servings, setServings] = useState<number>(1);

    useEffect(() => {
        document.body.style.overflow = "visible";
        getRecipe();
    }, [params]);

    const getRecipe = () => {
        console.log(params);
        const currentRecipe = Recipes.filter((x) => x.id == String(params.id));
        console.log(currentRecipe);
        if (currentRecipe.length > 0) {
            setRecipe(currentRecipe[0]);
        }
    };

    const manipulateMeasurement = (
        amount: number,
        measureType: string
    ): string => {
        let currentAmount = amount;
        let currentMeasureType = measureType;

        if (currentMeasureType == "g" && currentAmount >= 1000) {
            currentAmount *= 0.001;
            currentMeasureType = "kg";
        }

        if (currentMeasureType == "ml" && currentAmount >= 100) {
            currentAmount *= 0.01;
            currentMeasureType = "dl";
        }

        if (currentMeasureType == "dl" && currentAmount >= 10) {
            currentAmount *= 0.1;
            currentMeasureType = "l";
        }

        if (measureType != "") {
            currentAmount = Number(currentAmount.toPrecision(3));
        }

        return `${currentAmount} ${currentMeasureType} `;
    };

    useEffect(() => {
        const currentServings = sessionStorage.getItem("servings");
        if (currentServings == "") {
            sessionStorage.setItem("servings", JSON.stringify(servings));
        } else {
            setServings(JSON.parse(currentServings || "1"));
        }
    }, []);

    return (
        <>
            {recipe ? (
                <>
                    <Navbar />
                    <main className="h-fit w-full bg-cream py-[80px]">
                        <div className="h-fit w-full px-[5vh] flex justify-center ">
                            <div className="relative h-[500px] min-w-[500px] max-w-[700px] w-full rounded-lg left-[120px]">
                                <img
                                    src={recipe?.image}
                                    alt={recipe?.id}
                                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                    draggable={false}
                                />
                            </div>
                            <div className="relative right-[130px]">
                                <div className="flex h-[200px] w-full items-end justify-end relative left-[100px] top-[10px]">
                                    <img
                                        className="absolute inset-0 w-full h-full rounded-lg"
                                        src="/kitties.svg"
                                        alt="cats"
                                        draggable={false}
                                    />
                                </div>
                                <div className="h-[180px] min-w-[650px] bg-cream-light z-50 shadow-sm">
                                    <div className="text-[40px] h-full w-full flex items-center justify-start ">
                                        <div className="font-palatino font-medium px-[40px]">
                                            <p className="break-keep">
                                                {recipe?.title.split("-")[0]}
                                            </p>
                                            <p>{recipe?.title.split("-")[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center relative bottom-[80px]">
                            <div className="bg-cream-light h-fit w-[80%] flex py-10 px-10 rounded-md pb-[60px]">
                                <div className="flex-none w-[30%]">
                                    <Calculator
                                        servings={servings}
                                        setServings={setServings}
                                    />
                                    <div className="bg-black h-[2px] my-5 rounded-md"></div>
                                    <div className="h-full w-full flex items-start justify-center tracking-wider">
                                        <div className="text-center py-1">
                                            <p className="text-[40px] py-1">
                                                INGREDIENTS
                                            </p>
                                            {recipe?.ingredients.map(
                                                (
                                                    ingredients: IngredientsType
                                                ) => (
                                                    <>
                                                        <p className="text-[20px] pt-6 font-semibold">
                                                            {ingredients?.title.toUpperCase()}
                                                        </p>
                                                        {ingredients?.content.map(
                                                            (
                                                                ingredient: IngredientType
                                                            ) => (
                                                                <p className="text-[18px] font-light leading-8 pt-2">
                                                                    {manipulateMeasurement(
                                                                        Number(
                                                                            ingredient?.amount
                                                                        ) *
                                                                        servings,
                                                                        ingredient
                                                                            ?.type
                                                                            .measure
                                                                    )}
                                                                    {
                                                                        ingredient?.title
                                                                    }
                                                                </p>
                                                            )
                                                        )}
                                                    </>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-black w-[2px] mx-10 my-2 rounded-lg"></div>
                                <div className="flex-1 w-[69%]">
                                    <div className="flex justify-start items-center py-4">
                                        <p className="flex-none w-fit text-[50px] tracking-wide h-full ">
                                            DIRECTIONS
                                        </p>
                                        <div className="flex-1  w-[40%] flex justify-end h-full items-center">
                                            <FiClock className="text-[30px]" />
                                            <p className="text-[20px] px-3 font-light">
                                                {recipe?.time} MIN
                                            </p>
                                        </div>
                                    </div>
                                    {recipe?.directions.map(
                                        (directions: DirectionType) => (
                                            <>
                                                <p className="text-[30px] py-5 tracking-wider">
                                                    {directions?.title.toUpperCase()}
                                                </p>
                                                {directions?.content.map(
                                                    (content: string) => (
                                                        <>
                                                            <div className="flex justify-start py-2">
                                                                <img
                                                                    src="/heart.svg"
                                                                    alt="Heart"
                                                                    className="w-[20px] h-[20px] mt-2"
                                                                />
                                                                <p className="pl-4 text-[20px] font-light leading-8">
                                                                    {" "}
                                                                    {content}
                                                                </p>
                                                            </div>
                                                        </>
                                                    )
                                                )}
                                            </>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </>
            ) : (
                <>
                    <Recipe404 />
                </>
            )}
        </>
    );
};

export default Recipe;