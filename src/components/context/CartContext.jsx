import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { createAction } from "../../utils/reducers/reducer.utils";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  reduceItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const CART_ACTION_TYPE = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

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

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartCount, cartTotal, isCartOpen } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPE.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  //     const [isCartOpen, setIsCartOpen] = useState(false);
  //     const [cartItems, setCartItems] = useState([]);
  //     const [cartCount, setCartCount] = useState(0);
  //     const [cartTotal, setCartTotal] = useState(0);

  //     useEffect(()=>{
  //         const cartItemCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity, 0)
  //         setCartCount(cartItemCount);
  //     },[cartItems])

  //     useEffect(()=>{
  //         const cartTotal = cartItems.reduce((total,cartItem)=> total + cartItem.quantity * cartItem.price, 0);
  //         setCartTotal(cartTotal)
  //     },[cartItems])

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const reduceCartItem = (itemToReduce) => {
    const newCartItems = reduceItemFromCart(cartItems, itemToReduce);
    updateCartItemsReducer(newCartItems);
  };
  const clearCartItem = (itemToClear) => {
    const newCartItems = clearItemFromCart(cartItems, itemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    reduceCartItem,
    clearCartItem,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
