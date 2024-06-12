import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import FoodCardList from "./FoodCardList";
import FoodCardType from "../../types/FoodCardTypes";

interface FoodCardMenuProps {
    recipes: FoodCardType[];
    id: string;
}

const FoodCardMenu = ({ recipes, id }: FoodCardMenuProps) => {
    const [leftPosition, setLeftPosition] = useState<boolean>(true);
    const [rightPosition, setRightPosition] = useState<boolean>(false);

    const handleScroll = () => {
        const element = document.getElementById(id)!;
        if (element.scrollLeft == 0) {
            setLeftPosition(true);
        } else {
            setLeftPosition(false);
        }

        if (
            Math.abs(
                element.scrollWidth - (element.scrollLeft + element.clientWidth)
            ) <= 1
        ) {
            setRightPosition(true);
        } else {
            setRightPosition(false);
        }
    };

    const scroll = (scrollOffset: any) => {
        if (document.getElementById(id) !== null) {
            const element = document.getElementById(id)!;
            element.scrollBy({ left: scrollOffset, behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="flex items-center group">
                {!leftPosition && (
                    <div
                        className="absolute px-2 py-2 left-[1%] z-[5] bg-cream group-hover:opacity-100 opacity-0 transition-all rounded-md text-[30px] shadow-md hover:bg-cream-light cursor-pointer"
                        onClick={() => scroll(-500)}
                    >
                        <FiChevronLeft />
                    </div>
                )}
                {!rightPosition && (
                    <div
                        className="absolute px-2 py-2 right-[1%] z-[5] bg-cream group-hover:opacity-100 opacity-0 transition-all rounded-md text-[30px] shadow-md hover:bg-cream-light cursor-pointer"
                        onClick={() => scroll(500)}
                    >
                        <FiChevronRight />
                    </div>
                )}
                <div
                    id={id}
                    className="relative h-fit w-full overflow-hidden overflow-x-scroll scrollbar-hide"
                    onScroll={() => handleScroll()}
                >
                    <div className="inline-block relative left-[5%]">
                        <FoodCardList recipes={recipes} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCardMenu;
