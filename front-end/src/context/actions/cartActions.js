import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE,
  DECREASE,
  UPDATE_CART,
  CLEAR_CART,
  CALCULATE_TOTALS,
  CALCULATE_ITEM_SUBTOTALS,
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
export const updateCart = (props) => {
  return {
    type: UPDATE_CART,
    payload: props,
  };
};
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
export const calculateTotal = () => {
  return {
    type: CALCULATE_TOTALS,
  };
};
export const calculateSubtotals = () => {
  return {
    type: CALCULATE_ITEM_SUBTOTALS,
  };
};
