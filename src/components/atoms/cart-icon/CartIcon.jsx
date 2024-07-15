import "./cartIcon.styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
//import { ReactComponent as ShoppingIcon}  from "../../../assets/shopping-bag.svg";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggleCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
    
    return(
        <div className="cart-icon-container" onClick={toggleCartOpen}>
            {/* <ShoppingIcon  className="shopping-icon"/> */}
            <FontAwesomeIcon icon={faCartShopping} className="shopping-icon" />
            <span className="icon-count"> 0</span>

        </div>
    )
}

export default CartIcon