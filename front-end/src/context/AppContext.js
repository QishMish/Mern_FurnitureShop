import React, { useContext, useState, useEffect, useReducer } from "react";
import CustumHttpGet from "../hooks/CustumHttp";
import { cartReducer } from "./reducers/cartReducer";
import { calculateTotal, calculateSubtotals } from "./actions/cartActions";

const appContext = React.createContext();

const CART_INITIAL_STATE = {
  cartItems: [],
  total: 0,
  amount: 0,
};
export default function AppProvider(props) {
  const { loading, data, error } = CustumHttpGet(
    "http://localhost:8080/products"
  );
  const [cartState, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  const totalCalculation = () => {
    dispatch(calculateTotal());
  };

  const subtotalCalculation = () =>{
    dispatch(calculateSubtotals());
  }
  useEffect(() => {
    subtotalCalculation();
  }, [cartState.amount]);

  useEffect(() => {
    totalCalculation();
  }, [cartState.cartItems]);

  return (
    <appContext.Provider
      value={{
        products: {
          data: data,
          loading: loading,
          error: error,
        },
        cartState: cartState,
        dispatch: dispatch,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(appContext);
};
