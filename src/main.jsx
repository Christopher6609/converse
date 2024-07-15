import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './components/context/UserContext.jsx';
import { ProductProvider } from './components/context/ProductContext.jsx';
import { CartProvider } from './components/context/CartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
      <ProductProvider>
      <CartProvider>
      <App />
      </CartProvider>
      </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
