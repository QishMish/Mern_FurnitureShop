import {
  FETCH_PRODUCTS,
  CALCULTATE_LENGTH,
  SET_CATEGORIES,
  INTITIAL_FETCH,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
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
export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
export const updateProduct = (id, product) => {
  return {
    type: UPDATE_PRODUCT,
    payload: {
      id,
      product,
    },
  };
};
export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};
