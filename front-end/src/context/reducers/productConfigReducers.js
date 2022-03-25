import {
  NEXT_PAGE,
  PREV_PAGE,
  NAVIGATE,
  SET_CATEGORY,
  SET_TOTAL,
} from "../constants/productConfigConstants";

export const productConfigReducer = (state, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      let nextPage = state.page + 1;
      return {
        ...state,
        page: nextPage,
      };
    case PREV_PAGE:
      let prevPage = state.page - 1;
      return {
        ...state,
        page: prevPage,
      };
    case NAVIGATE:
      return {
        ...state,
        page: action.payload,
      };
    case SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case SET_CATEGORY:
      console.log("calculation")
      return {
        ...state,
        category: action.payload,
        page: 1,
      };
    default:
      break;
  }
};
