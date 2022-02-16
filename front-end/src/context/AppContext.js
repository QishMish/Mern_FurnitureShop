import React, { useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import CustumHttpGet from "../hooks/CustumHttp";
import { cartReducer } from "./reducers/cartReducer";

const appContext = React.createContext();

const CART_INITIAL_STATE = {
  cartItems: [
    {
      id: "0",
      title: "Aform Barstoll",
      price: "$350.00",
      image:
        "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/product1_2-581x851.jpg",
      amount: 1,
      subTotal:"$350.00"
    },
    {
      id: "2",
      title: "Era Chair low",
      price: "$1,380.00",
      image:
        "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602846_Era_Lounge_Chair_Low_Oak_Fame_68143_0-869x543.jpeg",
      amount: 1,
      subTotal:"$1,380.00"

    },
    {
      id: "3",
      title: "Era Sofa Oak",
      price: "$2,640.00",
      image:
        "https://demo.quemalabs.com/ocin-lite/wp-content/uploads/2016/01/602976_Era_Sofa_Oak_Fame_64167_2-869x543.jpeg",
      amount: 1,
      subTotal:"$2,640.00"
    },
  ],
  total: 0,
  amount: 0,
};

export default function AppProvider(props) {
  const { loading, data, error } = CustumHttpGet("http://localhost:8080/products");
  const [cartState, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  console.log(cartState);

  useEffect(() => {}, [loading]);

  return (
    <appContext.Provider
      value={{
        products: {
          data: data,
          loading: loading,
          error: error,
        },
        cartState: cartState,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(appContext);
};
