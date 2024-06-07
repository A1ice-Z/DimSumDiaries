import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe"

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<h1>404</h1>} />
                <Route path="recipe/:id" element={<Recipe />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
