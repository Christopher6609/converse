import "./checkoutItem.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CheckoutItem = ({cartItem}) => {
    const {imageUrl ,name, price,quantity} = cartItem;

    const {reduceCartItem, addItemToCart, clearCartItem} = useContext(CartContext);

    const reduceCartItemHandler = () => reduceCartItem(cartItem);
    const increaseCartItemHandler = () => addItemToCart(cartItem);
    const clearItemFromCartHandler = () => clearCartItem(cartItem);
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

export default CheckoutItem;