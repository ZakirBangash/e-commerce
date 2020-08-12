import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { ProductList } from "./ProductList";
import { About } from "./About";

export const Routing = () => {
    return (
        
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="about" element={<About />} />
            </Routes>
            </div>
    
    );
};
