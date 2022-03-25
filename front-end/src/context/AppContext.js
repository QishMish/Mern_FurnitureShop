import React, { useContext, useState, useEffect, useReducer } from "react";
// import CustumHttpGet from "../hooks/CustumHttp";
import { cartReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/authReducer";
import { calculateTotal, calculateSubtotals } from "./actions/cartActions";
import useFetch from "use-http";
import axiosInstance from "../config/axiosConfig";
import { productConfigReducer } from "./reducers/productConfigReducers";
import { productsReducer } from "./reducers/productsReducer";
import {
  initialFetch,
  fetchProducts,
  calculateProductCount,
  setProductCategories,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./actions/productActions";
import {
  nextPage,
  prevPage,
  navigate,
  setCategory,
} from "./actions/productConfigActions";

const appContext = React.createContext();

const cartItemsLS = JSON.parse(
  localStorage.getItem("furniture_shop_products_cart")
);
const userLS = JSON.parse(localStorage.getItem("user"));

const CART_INITIAL_STATE = {
  cartItems: cartItemsLS || [],
  total: 0,
  amount: 0,
};

const USER_INITIAL_STATE = {
  user: userLS || null,
  loading: false,
  error: false,
  errorMessage: "",
};

const PRODUCT_INITIAL_CONFIG = {
  page: 1,
  limit: 12,
  category: "all",
  total: 0,
};
const PRODUCT_INITIAL_STATE = {
  products: [],
  productsByCategory: [],
  length: 0,
  categories: [],
};
const PRODUCT_URL = "http://localhost:8080/api/v1/product/";

export default function AppProvider(props) {
  const [cartState, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
  const [userState, dispatchUser] = useReducer(authReducer, USER_INITIAL_STATE);
  const [products, dispatchProducts] = useReducer(
    productsReducer,
    PRODUCT_INITIAL_STATE
  );
  const [productConfig, dispatchProductConfig] = useReducer(
    productConfigReducer,
    PRODUCT_INITIAL_CONFIG
  );
  // const {
  //   loading,
  //   error,
  //   data = [],
  // } = useFetch(
  //   PRODUCT_URL +
  //     `?category=${productConfig.category}&page=${productConfig.page}&limit=${productConfig.limit}`,
  //   [productConfig.category, productConfig.page]
  // );

  const { get, post, put, response, loading, error } = useFetch(PRODUCT_URL);

  const loadProducts = async () => {
    const productResAll = await get();
    const productRes = await get(
      `?category=${productConfig.category}&page=${productConfig.page}&limit=${productConfig.limit}`
    );
    response.ok && dispatchProducts(fetchProducts(productRes));
    response.ok & (products.products.length < 1) &&
      dispatchProducts(initialFetch(productResAll));
  };

  const {
    loading: categoriesLoading,
    error: categoreisErr,
    data: categories = [],
  } = useFetch(PRODUCT_URL + "categories", [products.products.length]);

  useEffect(() => {
    loadProducts();
    console.log(products.products.length);
    console.log("render");
  }, [productConfig.category, productConfig.page]);

  // useEffect(() => {
  //   dispatchProducts(calculateProductCount(data));
  // }, []);

  // useEffect(() => {
  //   dispatchProducts(fetchProducts(data));
  // }, [data.length]);

  useEffect(() => {
    dispatchProducts(setProductCategories(categories));
  }, [categories.length]);

  const totalCalculation = () => {
    dispatch(calculateTotal());
  };
  const nextPageHandler = () => {
    dispatchProductConfig(nextPage());
  };
  const prevPageHandler = () => {
    dispatchProductConfig(prevPage());
  };
  const navigateHandler = (page) => {
    dispatchProductConfig(navigate(page));
  };
  const setCategoryHandler = (category) => {
    dispatchProductConfig(setCategory(category));
  };

  //product GET functions start

  //product GET function end

  //admin panel functions start
  const addProductHandler = (product) => {
    console.log(product);
    dispatchProducts(addProduct(product));
    axiosInstance.post("/product/", product);
  };
  const updateProductHandler = (id, product) => {
    dispatchProducts(updateProduct(id, product));
    axiosInstance.put(`/product/${id}`, product);
  };
  const deleteProductHandler = (id) => {
    console.log(id);
    dispatchProducts(deleteProduct(id));
    axiosInstance.delete(`/product/${id}`);
  };
  //admin panel functions end

  //suptotal calculation
  const subtotalCalculation = () => {
    dispatch(calculateSubtotals());
  };

  //useeffects start
  useEffect(() => {
    subtotalCalculation();
  }, [cartState.amount]);

  useEffect(() => {
    subtotalCalculation();
  }, [cartState.amount]);

  useEffect(() => {
    totalCalculation();
  }, [cartState.cartItems]);

  useEffect(() => {
    localStorage.setItem(
      "furniture_shop_products_cart",
      JSON.stringify(cartState.cartItems)
    );
  }, [cartState.cartItems]);

  useEffect(() => {
    userState.user &&
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: userState.user.token,
          user: userState.user.email,
        })
      );
  }, [userState]);
  //useeffects end
  return (
    <appContext.Provider
      value={{
        // products: {
        //   data: data,
        //   loading: loading,
        //   error: error,
        // },
        cartState: cartState,
        dispatch: dispatch,
        userState: userState,
        dispatchUser: dispatchUser,
        addProductHandler,
        updateProductHandler,
        deleteProductHandler,
        nextPageHandler,
        prevPageHandler,
        navigateHandler,
        setCategoryHandler,
        productConfig,
        products,
        loading,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(appContext);
};
