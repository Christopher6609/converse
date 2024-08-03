import "./productCard.scss";
import Button from "../../atoms/Button/Button";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addProductToCart} buttonType="inverted">
        Add to Cart
      </Button>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};

export default ProductCard;
