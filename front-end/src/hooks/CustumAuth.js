import { useState, useEffect } from "react";
import axios from "axios";
import {
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginFailure,
  loginSucces,
} from "../context/actions/authActions";
import { REGISTER, LOGIN } from "../context/constants/authConstants";
import { useGlobalContext } from "../context/AppContext";
import axiosInstance from "../config/axiosConfig";

export default function CustumAuth(type, endPoint) {
  const { userState, dispatchUser } = useGlobalContext();

  switch (type) {
    case REGISTER:
      const register = async () => {
        try {
          const data = await axiosInstance.get(endPoint);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
    //   register();
      break;
    case LOGIN:
      break;
    default:
      break;
  }
}
