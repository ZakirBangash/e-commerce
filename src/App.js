import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routing } from './Components/Routing';
import { ProductProvider } from './Context';
// import { ProductProvider } from './GlobalContex';


function App() {
  return (

      <ProductProvider>
         <Routing />
      </ProductProvider>
  
  );
}

export default App;