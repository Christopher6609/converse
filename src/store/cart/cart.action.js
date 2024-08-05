import { CART_ACTION_TYPE } from "./cart.types";
import { createAction } from "../../utils/reducers/reducer.utils";

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean);

const addCartItem = (cartItems, productToAdd) => {
  //condition to check if the items in the cart contains the product to be added into the cart.NB this returns a boolean
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // function to pick the cart item that is the same as the product to be added. Returns the array with an increment in the quantity else return the item
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // returns the array of the items and adds the new product with an initial quantity of one
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const reduceItemFromCart = (cartItems, itemToReduce) => {
  //condition to find item that is to be removed .NB this returns a boolean
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToReduce.id
  );

  // function to filter out the item if item quantity is equal to one
  if (existingItem.quantity == 1) {
    return cartItems.filter((cartItem) => cartItem.id != itemToReduce.id);
  }

  // returns cart item quantity reduced by one
  return cartItems.map((cartItem) =>
    cartItem.id == itemToReduce.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearItemFromCart = (cartItems, itemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id != itemToClear.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
export const reduceCartItem = (cartItems, itemToReduce) => {
  const newCartItems = reduceItemFromCart(cartItems, itemToReduce);
  createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
export const clearCartItem = (cartItems, itemToClear) => {
  const newCartItems = clearItemFromCart(cartItems, itemToClear);
  createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
