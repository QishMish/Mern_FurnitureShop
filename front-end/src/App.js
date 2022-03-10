/** @format */

import React from 'react';
import './styles/Index.css';
import { Provider } from 'use-http';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import AppProvider from './context/AppContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider url='http://localhost:8080/api/v1/'>
          <AppProvider>
            <AppRouter />
          </AppProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
