import React from "react";
import "./styles/Index.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import AppProvider from "./context/AppContext";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <AppRouter />
          {/* <AdminRoute /> */}
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
