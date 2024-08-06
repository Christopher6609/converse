


import Button from '../../atoms/Button/Button';
import './cartdropdown.styles.scss';
import CartItem from '../cart-item/CartItem';
//import { useContext } from "react";
//import { CartContext } from "../../context/CartContext";
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    //const {cartItems} = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();


  const navigateToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id}>
            <CartItem cartItem={item} />
          </div>
        ))}
      </div>
      <Button onClick={navigateToCheckoutHandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
