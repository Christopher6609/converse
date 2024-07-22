import { createContext, useState,useEffect } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemToCart: () => {},
    reduceItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount:0,
    cartTotal: 0
});

const addCartItem = (cartItems, productToAdd) => {
    //condition to check if the items in the cart contains the product to be added into the cart.NB this returns a boolean 
    const existingItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id)

    // function to pick the cart item that is the same as the product to be added. Returns the array with an increment in the quantity else return the item
    if(existingItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem )
    }

    // returns the array of the items and adds the new product with an initial quantity of one
    return [...cartItems, {...productToAdd, quantity: 1}];
}
const reduceItemFromCart = (cartItems, itemToReduce) => {
    //condition to find item that is to be removed .NB this returns a boolean 
    const existingItem = cartItems.find((cartItem)=>cartItem.id === itemToReduce.id)

    // function to filter out the item if item quantity is equal to one
    if(existingItem.quantity == 1){
        return cartItems.filter((cartItem) => cartItem.id != itemToReduce.id);
    }

    // returns cart item quantity reduced by one
   return cartItems.map((cartItem) => cartItem.id == itemToReduce.id ? {...cartItem, quantity: cartItem.quantity - 1 }: cartItem);
}

const clearItemFromCart = (cartItems, itemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id != itemToClear.id);
}

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
        console.log(cartItems);
    }
    const reduceCartItem = (itemToReduce) => {
        setCartItems(reduceItemFromCart(cartItems, itemToReduce))
    }
    const clearCartItem = (itemToClear) => {
        setCartItems(clearItemFromCart(cartItems, itemToClear));
    }

useEffect(()=>{
    const cartItemCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity, 0)
    setCartCount(cartItemCount);
},[cartItems])

useEffect(()=>{
    const cartTotal = cartItems.reduce((total,cartItem)=> total + cartItem.quantity * cartItem.price, 0);
    setCartTotal(cartTotal)
},[cartItems])

    const value = {isCartOpen, setIsCartOpen, addItemToCart,cartItems, cartCount, reduceCartItem, clearCartItem, cartTotal};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}