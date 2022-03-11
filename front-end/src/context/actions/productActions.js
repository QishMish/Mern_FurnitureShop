import {
  FETCH_PRODUCTS,
  CALCULTATE_LENGTH,
  SET_CATEGORIES,
  INTITIAL_FETCH
} from "../constants/productConstants";

export const initialFetch = (products) => {
  return {
    type: INTITIAL_FETCH,
    payload: products,
  };
};
export const fetchProducts = (products) => {
  return {
    type: FETCH_PRODUCTS,
    payload: products,
  };
};
export const calculateProductCount = (products) => {
  return {
    type: CALCULTATE_LENGTH,
    payload: products,
  };
};
export const setProductCategories = (products) => {
  return {
    type: SET_CATEGORIES,
    payload: products,
  };
};
