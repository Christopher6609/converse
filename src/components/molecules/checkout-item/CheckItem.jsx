import "./checkoutItem.styles.scss";
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../../store/cart/cart.selector";
import { reduceCartItem, addItemToCart,clearCartItem } from "../../../store/cart/cart.action";
//import { useContext } from "react";
//import { CartContext } from "../../context/CartContext";


const CheckItem = ({cartItem}) => {
    const {imageUrl ,name, price,quantity} = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    //const {reduceCartItem, addItemToCart, clearCartItem} = useContext(CartContext);
    
    const reduceCartItemHandler = () => dispatch(reduceCartItem(cartItems, cartItem));
    const increaseCartItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const clearItemFromCartHandler = () => dispatch(clearCartItem(cartItems, cartItem));
    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div  onClick={reduceCartItemHandler} className="arrow">
                &#10094;
            </div>
            <span className="value">{quantity}</span>
            <div  onClick={increaseCartItemHandler} className="arrow">
            &#10095;
            </div>
            </span>
            
            
            <span className="price">{price}</span>
            <span onClick={clearItemFromCartHandler} className="remove-button">&#10005;</span>
                   
                </div>
            )
    
}

CheckItem.propTypes = {
    cartItem:PropTypes.shape({
        imageUrl:PropTypes.string,
        name:PropTypes.string,
        price:PropTypes.number,
        quantity:PropTypes.number
    })
}

export default CheckItem;