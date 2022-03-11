import {
  INTITIAL_FETCH,
  FETCH_PRODUCTS,
  CALCULTATE_LENGTH,
  SET_CATEGORIES,
} from "../constants/productConstants";

export const productsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productsByCategory: action.payload,
      };
    case INTITIAL_FETCH:
      return {
        ...state,
        products: action.payload,
      };
    case CALCULTATE_LENGTH:
      return {
        ...state,
        length: action.payload.length,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      break;
  }
};
