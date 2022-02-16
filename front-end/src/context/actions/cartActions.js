import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE,
  DECREASE,
  CLEAR_CART,
} from "../constants/cartConstants";

export const addItem = (props) => {
  return {
    type: ADD_ITEM,
    payload: props,
  };
};
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};
export const increase = (props) => {
  return {
    type: INCREASE,
    payload: props,
  };
};
export const decrease = (props) => {
  return {
    type: DECREASE,
    payload: props,
  };
};
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
