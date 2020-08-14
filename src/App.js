import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routing } from './Components/Routing';
import { ProductProvider } from './Context';
import Modall from './Components/Modal';
// import { ProductProvider } from './GlobalContex';


function App() {
  return (

      <ProductProvider>
         <Routing />
         <Modall />
      </ProductProvider>
  
  );
}

export default App;