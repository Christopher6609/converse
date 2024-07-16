import Button from '../../atoms/Button/Button';
import './cartdropdown.styles.scss';
import CartItem from '../cart-item/CartItem';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
               {cartItems.map((item) => {
                return(
                    <CartItem key={item.id} cartItem={item} />
                )
                
               })}
            </div>
            <Button>Go to Checkout</Button>
        </div>
    )
}

export default CartDropdown;