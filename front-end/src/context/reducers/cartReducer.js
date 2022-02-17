import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE,
  DECREASE,
  CLEAR_CART,
  CALCULATE_TOTALS,
  CALCULATE_ITEM_SUBTOTALS,
  UPDATE_CART,
} from "../constants/cartConstants";

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const exist = state.cartItems.find(
        (item) => item.id == action.payload.id
      );
      if (exist) {
        let increasedItemCart = state.cartItems.map((item) => {
          if (item.id == action.payload.id) {
            return {
              ...item,
              amount: item.amount + action.payload.amount,
            };
          }
          return item;
        });
        return {
          ...state,
          cartItems: increasedItemCart,
        };
      }
      let addedItemCart = [...state.cartItems, action.payload];
      return {
        ...state,
        cartItems: addedItemCart,
      };
    case REMOVE_ITEM:
      let newCart = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: newCart,
      };
    case INCREASE:
      let increasedAmount = state.cartItems.filter((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            amount: (item.amount += action.payload),
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: increasedAmount,
      };
    case DECREASE:
      let decreaseAmount = state.cartItems
        .filter((item) => {
          if (item.id == action.payload.id) {
            return {
              ...item,
              amount: (item.amount -= action.payload),
            };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return {
        ...state,
        cartItems: decreaseAmount,
      };
    case UPDATE_CART:
      let updatedCart = state.cartItems.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            amount: action.payload.data,
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: updatedCart,
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case CALCULATE_TOTALS:
      const totalAmount = state.cartItems.reduce(
        (previousValue, currentValue) => previousValue + currentValue.amount,
        0
      );
      const totalPrice = state.cartItems.reduce(
        (previousValue, currentValue) => previousValue + currentValue.subTotal,
        0
      );
      return {
        ...state,
        amount: totalAmount,
        total: totalPrice,
      };
    case CALCULATE_ITEM_SUBTOTALS:
      const calculatedSubtotal = state.cartItems.map((item) => {
        return {
          ...item,
          subTotal: parseInt(item.price.substring(1)) * item.amount,
        };
      });
      return {
        ...state,
        cartItems: calculatedSubtotal,
      };
    default:
      return {
        state,
      };
  }
};
