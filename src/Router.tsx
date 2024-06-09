import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<>
                    <Navbar />
                    <div className="h-[80vh] w-full flex justify-center items-center">
                        <p className="font-semibold text-[25px]">404</p>
                    </div>
                    <Footer />
                </>} />
                <Route path="recipe/:id" element={<Recipe />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
