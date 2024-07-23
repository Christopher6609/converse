import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import CheckItem from "../../components/molecules/checkout-item/CheckItem";

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext);
  

return(
    <div className="checkout-container">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

       {cartItems.length > 0 ? <div>{cartItems.map((cartItem)=>{
            return(
                    <CheckItem key={cartItem.id} cartItem={cartItem}/>
            )
        })}</div> : <div className="h-[10rem] flex items-center justify-center"><span>Cart is empty</span></div>}

        
        <span className="total">Total: ${cartTotal}</span>
    </div>
)
}

export default Checkout;