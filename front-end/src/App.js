import React from "react";
import "./styles/Index.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import AppProvider from "./context/AppContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <AppRouter />
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
