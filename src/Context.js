import React,{createContext,useReducer,useState} from 'react';
import {storeProducts,detailProduct} from './Data'
import { act } from 'react-dom/test-utils';


export const GlobalContext = createContext();
const Cart=[ ];

export const ProductProvider = ({children}) => {
 
    
// Use Reducer for state management
    
    
    let [state, dispatch] = useReducer(reducer, Cart);


    function addToCart(transObj) {
        console.log(transObj);
        dispatch(
            {
                type: 'AddToCart',
                payload: transObj
                
            }
        );

    }


    function removeFromCart(transObj) {
        console.log(transObj)
        dispatch(
            {
                type: 'removeFromCart',
                payload: transObj
                
            }
        );

    }

    function Increment(transObj) {
        console.log(transObj);
        dispatch(
            {
                type: 'increment',
                payload: transObj
                
            }
        );

    }




    return (
      <GlobalContext.Provider value={{
          storeProducts,
          addToCart,
          removeFromCart,
          Increment,
          Cart:state
      }}>
          
          {children}  

      </GlobalContext.Provider>
    )
}


const reducer = ( (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'AddToCart': {
            action.payload.count=1;
            action.payload.total = action.payload.price * action.payload.count;
             return (
               
                action.payload.inCart=true,
                [...state, action.payload]
             )
        }

        case 'removeFromCart': {
                 console.log(action.payload)
                action.payload.count=0;
                action.payload.inCart=false;
            const newState =state.filter( trans => trans !== action.payload)    
                console.log(newState)
            return newState;
       
        }

        case 'increment': {
           
            action.payload.count+=1;
            action.payload.total = action.payload.price * action.payload.count;
            return state;
  
   }
        
        default:
            return state;

    
}})