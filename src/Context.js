import React,{createContext,useReducer,useState} from 'react';
import {storeProducts,detailProduct} from './Data'


export const GlobalContext = createContext();


export const ProductProvider = ({children}) => {
 
    console.log(storeProducts[0])
    console.log(typeof(detailProduct))
    console.log(detailProduct)
// Use Reducer for state management
    const [state, setstate] = useState(storeProducts)

    return (
      <GlobalContext.Provider value={{
          storeProducts
      }}>
          
          {children}  

      </GlobalContext.Provider>
    )
}


