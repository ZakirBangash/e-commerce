import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { ProductList } from "./ProductList";
import { ProductDetail } from "./ProductDetail";
import { ProductHome } from "./ProductHome";
import { Product } from "./Product";
import { Home } from "./Home";
import { Cart } from "./Cart/Cart";

export const Routing = () => {
    return (
        
        <div>
            <NavBar />
            <Routes>
                 <Route path="/" element={<Home />}/>    
                <Route path="ProductHome" element={<ProductHome />} >
                  <Route path="/" element={<ProductList />} />       
                  <Route path=":slug" element={<ProductDetail />}  />
                </Route>
                <Route path="/Cart" element={<Cart />} />
                
            </Routes>
            </div>
    
    );
};
