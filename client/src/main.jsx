import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./context/authContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CartProvider>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            pauseOnHover={true}
            closeOnClick={true}
            draggable={true}
          />
          <App />
        </CartProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
