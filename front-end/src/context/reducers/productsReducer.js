import {
  INTITIAL_FETCH,
  FETCH_PRODUCTS,
  CALCULTATE_LENGTH,
  SET_CATEGORIES,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
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
        length: action.payload.length,
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
    case ADD_PRODUCT:
      let newProducts = [...state.products, action.payload];
      return {
        ...state,
        products: newProducts,
      };
    case UPDATE_PRODUCT:
      let productsToUpdate = [...state.products];
      let updatedProduct = action.payload.product;
      let updatedProducts = productsToUpdate.map((product) => {
        console.log(product);
        console.log(product._id);
        console.log(action.payload.id);
        if (product._id === action.payload.id) {
          console.log(updatedProduct);
          return updatedProduct;
        }
        return product;
      });
      console.log(updatedProducts);
      return {
        ...state,
        products: updatedProducts,
      };
    case DELETE_PRODUCT:
      console.log(action);
      let productsToDel = [...state.products];
      let deletedProductsArr = productsToDel.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        products: deletedProductsArr,
      };
    default:
      break;
  }
};
