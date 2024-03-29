import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
