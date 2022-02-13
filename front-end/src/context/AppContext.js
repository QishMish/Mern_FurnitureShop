/** @format */

import React, { useContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import CustumHttpGet from '../hooks/CustumHttp';

const appContext = React.createContext();

export default function AppProvider(props) {
  const { loading, data, error } = CustumHttpGet('http://localhost:8080/');

  useEffect(() => {
  
  }, [loading])
  

  return (
    <appContext.Provider
      value={{
        products: {
          data: data,
          loading: loading,
          error: error,
        },
      }}>
      {props.children}
    </appContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(appContext);
};
