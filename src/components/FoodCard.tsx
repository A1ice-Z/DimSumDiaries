import { useState } from "react";
import { FiHeart } from "react-icons/fi";

interface FoodCardProps {
    imageSrc: string;
    altText: string;
    caption: string;
}

const FoodCard = ({ imageSrc, altText, caption }: FoodCardProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isClicked, setIsClicked] = useState<boolean>(false);


    return (
        <div className="w-[150px] h-[150px] rounded-2xl overflow-hidden shadow-lg my-2"
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img className="object-cover w-full h-[105px]" src={imageSrc} alt={altText} />
            <div className="px-6 py-4 bg-cream text-center w-full h-[45px] flex items-center justify-center">
                <div className=" font-bold text-sm mb-2 mt-2">{isHovered ? <FiHeart size={22} color={isClicked ? 'red' : 'black'} onClick={() => setIsClicked(!isClicked)} className="cursor-pointer" /> : caption}</div>
            </div>
        </div>
    );
};

export default FoodCard;