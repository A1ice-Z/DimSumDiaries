import { useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface CalculatorProps {
    servings: number;
    setServings: Function;
}

const Calculator = ({ servings, setServings }: CalculatorProps) => {
    const incrementServings = () => {
        if (servings < 20) {
            setServings(servings + 1);
        }
    };

    const decrementServings = () => {
        if (servings > 1) {
            setServings(servings - 1);
        }
    };

    useEffect(() => {
        sessionStorage.setItem("servings", JSON.stringify(servings));
    }, [servings]);

    return (
        <>
            <div className=" h-[65px] flex justify-center items-center rounded-md text-black tracking-wide">
                <div
                    className="bg-cream flex-none w-[20%] h-full flex justify-center text-[30px] items-center rounded-md cursor-pointer"
                    onClick={() => decrementServings()}
                >
                    <FiMinus />
                </div>
                <div className="flex-1 w-[50%] flex justify-center text-[24px] ">
                    <p>{servings} SERVING(S)</p>
                </div>
                <div
                    className="bg-cream w-[20%] h-full flex justify-center text-[30px] items-center rounded-md cursor-pointer"
                    onClick={() => incrementServings()}
                >
                    <FiPlus />
                </div>
            </div>
        </>
    );
};

export default Calculator;
