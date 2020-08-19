import React,{createContext,useReducer,useState} from 'react';
import {storeProducts,detailProduct} from './Data'
import { act } from 'react-dom/test-utils';


export const GlobalContext = createContext();
const Cart=[ ];

export const ProductProvider = ({children}) => {
 
    
// Use Reducer for state management
    
    
    let [state, dispatch] = useReducer(reducer, Cart);


    function addToCart(transObj) {
        
        dispatch(
            {
                type: 'AddToCart',
                payload: transObj
                
            }
        );

    }



    return (
      <GlobalContext.Provider value={{
          storeProducts,
          addToCart
      }}>
          
          {children}  

      </GlobalContext.Provider>
    )
}


const reducer = ( (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'AddToCart': {
                    
             return (
                action.payload.inCart=true,
                [...state, action.payload]
             )
        
        }
       
        
        default:
            return state;

    
}})