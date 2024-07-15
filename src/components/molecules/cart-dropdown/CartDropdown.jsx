import Button from '../../atoms/Button/Button';
import './cartdropdown.styles.scss';

const CartDropdown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>

            </div>
            <Button>Proceed to Checkout</Button>
        </div>
    )
}

export default CartDropdown;