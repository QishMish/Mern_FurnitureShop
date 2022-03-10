import React, { useContext, useState, useEffect, useReducer } from 'react';
// import CustumHttpGet from '../hooks/CustumHttp';
import useFetch, { Provider } from 'use-http';
import { cartReducer } from './reducers/cartReducer';
import { authReducer } from './reducers/authReducer';
import { calculateTotal, calculateSubtotals } from './actions/cartActions';

const appContext = React.createContext();

const cartItemsLS = JSON.parse(
  localStorage.getItem('furniture_shop_products_cart')
);
const userLS = JSON.parse(localStorage.getItem('user'));

const CART_INITIAL_STATE = {
  cartItems: cartItemsLS || [],
  total: 0,
  amount: 0,
};

const USER_INITIAL_STATE = {
  user: userLS || null,
  loading: false,
  error: false,
  errorMessage: '',
};
export default function AppProvider(props) {
  // const { loading, data, error } = CustumHttpGet(
  //   'http://localhost:8080/api/v1/product/'
  // );
  const { loading, error, data = [] } = useFetch('product/', []);

  const [cartState, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
  const [userState, dispatchUser] = useReducer(authReducer, USER_INITIAL_STATE);

  const totalCalculation = () => {
    dispatch(calculateTotal());
  };

  const subtotalCalculation = () => {
    dispatch(calculateSubtotals());
  };


  /**
   *? series of useEffects
   */
  // useEffect(() => {
  //   subtotalCalculation();
  // }, [cartState.amount]);

  // useEffect(() => {
  //   totalCalculation();
  // }, [cartState.cartItems]);

  // useEffect(() => {
  //   localStorage.setItem(
  //     'furniture_shop_products_cart',
  //     JSON.stringify(cartState.cartItems)
  //   );
  // }, [cartState.cartItems]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userState.user));
  }, [userState]);

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
        userState: userState,
        dispatchUser: dispatchUser,
      }}>
      {props.children}
    </appContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(appContext);
};
