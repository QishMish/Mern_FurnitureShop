import {
    ADD_ITEM,
    REMOVE_ITEM,
    INCREASE,
    DECREASE,
    CLEAR_CART,
  } from "../constants/cartConstants";
  
  export const cartReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_ITEM:
        // let addedItemCart = state.cart.concat(action.item)
        return {
          ...state,
        };
      case REMOVE_ITEM:
        let newCart = state.cart.filter((item) => item.id !== action.payload);
        return {
          ...state,
          cart: newCart,
        };
      case INCREASE:
        let increasedAmount = state.cart.filter((item) => {
          if (item.id == action.payload) {
            return {
              ...item,
              amount: (item.amount += 1),
            };
          }
          return item;
        });
        return {
          ...state,
          cart: increasedAmount,
        };
      case DECREASE:
        let decreaseAmount = state.cart
          .filter((item) => {
            if (item.id == action.payload) {
              return {
                ...item,
                amount: (item.amount -= 1),
              };
            }
            return item;
          })
          .filter((item) => item.amount !== 0);
        return {
          ...state,
          cart: decreaseAmount,
        };
      case CLEAR_CART:
        return {
          ...state,
          cart: [],
        };
      default:
        break;
    }
    return state;
  };
  