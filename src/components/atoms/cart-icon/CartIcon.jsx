import "./cartIcon.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector} from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../../store/cart/cart.selector";
import { setIsCartOpen } from "../../../store/cart/cart.action";

//import { useContext } from "react";
//import { CartContext } from "../../context/CartContext";
//import { ReactComponent as ShoppingIcon}  from "../../../assets/shopping-bag.svg";

const CartIcon = () => {
  //const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
   const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    const toggleCartOpen = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }
    
    return(
        <div className="cart-icon-container" onClick={toggleCartOpen}>
            {/* <ShoppingIcon  className="shopping-icon"/> */}
            <FontAwesomeIcon icon={faCartShopping} className="shopping-icon" />
            <span className="icon-count">{cartCount} </span>
    </div>
  );
};

export default CartIcon;
