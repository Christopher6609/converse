import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemToCart: () => {},
});

const addCartItem = (cartItems, productToAdd) => {
    //condition to check if the items in the cart contains the product to be added into the cart.NB this returns a boolean 
    const existingItem = cartItems.find((cartItem)=> {
        cartItem.id === productToAdd.id;
    })

    // function to pick the cart item that is the same as the product to be added. Returns the array with an increment in the quantity else return the item
    if(existingItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem )
    }

    // returns the array of the items and adds the new product with an initial quantity of one
    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}