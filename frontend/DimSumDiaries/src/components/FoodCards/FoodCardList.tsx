import FoodCard from "../../components/FoodCards/FoodCard";
import foodCardType from "../../types/FoodCardTypes";

interface FoodCardListProps {
    recipes: foodCardType[]
}

const FoodCardList = ({ recipes }: FoodCardListProps) => {
    return (
        <div className="flex items-start justify-start gap-6">
            {
                recipes.map((card: foodCardType) => (
                    <FoodCard {...card} />
                ))
            }
        </div>
    )
}

export default FoodCardList

