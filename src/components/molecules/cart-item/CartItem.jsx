

const CartItem = ({cartItem}) => {
const {name, quantity} = cartItem;


    return(
        <div>
            <hi>{name}</hi>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItem;