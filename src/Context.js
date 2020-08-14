import React,{createContext,useReducer,useState} from 'react';
import {storeProducts,detailProduct} from './Data'
import { act } from 'react-dom/test-utils';


export const GlobalContext = createContext();
const Cart=[ ];

export const ProductProvider = ({children}) => {
 
    
// Use Reducer for state management
    

    let [state, dispatch] = useReducer(reducer, Cart);


    function addToCart(transObj) {
        console.log(transObj.inCart)
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

    switch (action.type) {
        case 'AddToCart': {
             console.log(action.payload.inCart)
             return [...state,action.payload.inCart=true]
        
        }
        // case 'DeleteTransaction':{
        //     const newState =state.filter( trans => trans.id !== action.payload)    
        //     console.log(newState);
        //     return newState


        // }
        
        default:
            return state;

    
}})