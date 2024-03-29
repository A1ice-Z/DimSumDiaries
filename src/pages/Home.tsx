import FoodCard from "../components/FoodCard";

const Home = () => {
    return (
        <>
            <p className="text-black">Stupid Alice</p>
            <FoodCard imageSrc={"https://redhousespice.com/wp-content/uploads/2020/06/Jian-Bing-Chinese-crepe-10-1367x2048.jpg"} altText={"Good Food"} caption={"Jian Bing - 煎饼"}            />

        </>
    );
};

export default Home;
