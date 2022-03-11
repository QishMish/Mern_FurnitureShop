import {
  NEXT_PAGE,
  PREV_PAGE,
  NAVIGATE,
  SET_CATEGORY,
  SET_TOTAL
} from "../constants/productConfigConstants";

export const nextPage = (current) => {
  return {
    type: NEXT_PAGE,
    payload: current,
  };
};
export const prevPage = (current) => {
  return {
    type: PREV_PAGE,
    payload: current,
  };
};
export const navigate = (page) => {
  return {
    type: NAVIGATE,
    payload: page,
  };
};
export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
};
export const setTotal = (total) => {
  return {
    type: SET_TOTAL,
    payload: total,
  };
};