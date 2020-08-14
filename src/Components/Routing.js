import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { ProductList } from "./ProductList";
import { ProductDetail } from "./ProductDetail";
import { ProductHome } from "./ProductHome";

export const Routing = () => {
    return (
        
        <div>
            <NavBar />
            <Routes>
                <Route path="ProductHome" element={<ProductHome />} >
                <Route path="/" element={<ProductList />} />        
                <Route path=":slug" element={<ProductDetail />}  /> 
                </Route>
            </Routes>
            </div>
    
    );
};
