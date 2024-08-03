import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { BrowserRouter } from "react-router-dom";
//import { UserProvider } from "./components/context/UserContext.jsx";
//import { CategoriesProvider } from "./components/context/CategoriesContext.jsx";
import { CartProvider } from "./components/context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
