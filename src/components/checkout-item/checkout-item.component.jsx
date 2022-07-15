import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow" onClick={() => removeItemToCart(cartItem)}>
          &#60;
        </span>
        <div className="value"> {quantity}</div>
        <span className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#62;
        </span>
      </div>
      <div className="price">{price * quantity}</div>
      <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
