import Navbar from "../components/ Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FoodCard from "../components/FoodCard";

const Home = () => {
    return (
        <>
            <Navbar />
            <main className="h-[650px] w-full font-palatino">
                <div className="h-full items-center flex w-full justify-center">
                    <p className="text-[58px] underline"></p>
                    <FoodCard imageSrc={"https://redhousespice.com/wp-content/uploads/2020/06/Jian-Bing-Chinese-crepe-10-1367x2048.jpg"} altText={"Good Food"} caption={"Jian Bing - 煎饼"}            />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
