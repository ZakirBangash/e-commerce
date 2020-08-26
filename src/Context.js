import React, {
  createContext,
  useReducer,
  useState,
} from "react";
import { storeProducts } from "./Data";

export const GlobalContext = createContext();
const Cart = [];

export const ProductProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, Cart);
  let [cartSubTotal, setSubTotal] = useState(0);
  let [cartTax, setTax] = useState(0);
  let [cartTotal, setTotal] = useState(0);

  const addTotal = () => {
    let subTotal = 0;
    state.map((item) => (subTotal += item.total));

    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    console.log(typeof tax)
    const total = subTotal + tax;
    setSubTotal(subTotal);
    setTax(tax);
    setTotal(total);
  };

  const clearCart = () => {
    dispatch({
      type: "clearCart",
    });
  };

  function addToCart(transObj) {
    dispatch({
      type: "AddToCart",
      payload: transObj,
    });
  }

  function removeFromCart(transObj) {
    dispatch({
      type: "removeFromCart",
      payload: transObj,
    });
  }

  function Increment(transObj) {
    dispatch({
      type: "increment",
      payload: transObj,
    });
  }
  function decrement(transObj) {
    dispatch({
      type: "decrement",
      payload: transObj,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        storeProducts,
        addToCart,
        removeFromCart,
        Increment,
        decrement,
        clearCart,
        Cart: state,
        cartSubTotal,
        cartTax,
        cartTotal,
        addTotal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const reducer = (state, action) => {
console.log(state)
  switch (action.type) {
    case "AddToCart": {
      action.payload.count = 1;
      action.payload.total = action.payload.price * action.payload.count;
      return (action.payload.inCart = true), [...state, action.payload];
    }

    case "removeFromCart": {
      action.payload.count = 0;

      action.payload.inCart = false;
      const newState = state.filter((trans) => trans !== action.payload);
      action.payload.total = 0;
      return newState;
    }

    case "increment": {

      action.payload.count += 1;
      action.payload.total = action.payload.price * action.payload.count;
      return state;
    }

    case "decrement": {
      action.payload.count -= 1;
      action.payload.total = action.payload.price * action.payload.count;
      return state;
    }

    case "clearCart": {
        
        state.filter(item=> item.inCart=false)  
       const newState= state.filter((trans) => trans !== trans );
        return newState;
    }

    default:
      return state;
  }
};
