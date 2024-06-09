import { useEffect } from "react";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";

interface CalculatorProps {
    servings: number;
    setServings: Function;
}

const Calculator = ({ servings, setServings }: CalculatorProps) => {

    const incrementServings = () => {
        if (servings < 20) {
            setServings(servings + 1)
        }
    }

    const decrementServings = () => {
        if (servings > 1) {
            setServings(servings - 1)
        }
    }

    useEffect(() => {
        sessionStorage.setItem("servings", JSON.stringify(servings));
    }, [servings])

    return (
        <>
            <div className=" bg-cream h-[6%] flex justify-center items-center">
                <div className="flex-none w-[25%] flex justify-center text-[30px]">
                    <FiMinusSquare onClick={() => decrementServings()} className="cursor-pointer" />
                </div>
                <div className="flex-1 w-[50%] flex justify-center text-[20px] font-semibold">
                    <p>{servings} SERVINGS</p>
                </div>
                <div className="w-[25%] flex justify-center text-[30px]">
                    <FiPlusSquare onClick={() => incrementServings()} className="cursor-pointer" />
                </div>
            </div>
        </>
    )
}

export default Calculator