import { useEffect, useState } from "react";
import foodCardType from "../../types/types";
import { FiHeart } from "react-icons/fi";

interface FoodCardProps {
    id: string;
    imageSrc: string;
    altText: string;
    caption: string;
}

const FoodCard = ({ id, imageSrc, altText, caption }: FoodCardProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [favorites, setFavorites] = useState<string[]>([]);
    const [isFavorite, setFavorite] = useState<boolean>(false);

    useEffect(() => {
        const currentFavorites = sessionStorage.getItem("favorites");
        console.log(favorites, "From session storage")
        if (currentFavorites == "") {
            sessionStorage.setItem("favorites", JSON.stringify(favorites));
        }
        else {
            setFavorites(JSON.parse(currentFavorites || "[]"));
        }


        if (currentFavorites?.includes(id)) {
            setFavorite(true)
        }
        else {
            setFavorite(false)
        }
    }, [])

    const handleFavorites = () => {
        if (!isFavorite) {
            setFavorites([...favorites, id]);
            sessionStorage.setItem("favorites", JSON.stringify([...favorites, id]))
            setFavorite(true)
        } else {
            setFavorites(favorites.filter((favorite) => favorite != id));
            sessionStorage.setItem("favorites", JSON.stringify(favorites.filter((favorite) => favorite != id)))
            setFavorite(false)
        }
    }

    useEffect(() => {
        console.log(favorites)
    }, [favorites])
    return (
        <div className="w-[150px] h-[150px] rounded-2xl overflow-hidden shadow-lg my-2"
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img className="object-cover w-full h-[105px]" src={imageSrc} alt={altText} />
            <div className="px-6 py-4 bg-cream text-center w-full h-[45px] flex items-center justify-center">
                <div className=" font-bold text-sm mb-2 mt-2">{isHovered ? <FiHeart size={22} color={isFavorite ? 'red' : 'black'} onClick={handleFavorites} className="cursor-pointer" /> : caption}</div>
            </div>
        </div>
    );
};

export default FoodCard;