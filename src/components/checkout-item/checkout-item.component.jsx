import {
  CheckoutItemContainer,
  Quantity,
  ImageContainer,
  RemoveButton,
} from "./checkout-item.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <div className="name">{name}</div>
      <Quantity>
        <span className="arrow" onClick={() => removeItemToCart(cartItem)}>
          &#60;
        </span>
        <div className="value"> {quantity}</div>
        <span className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#62;
        </span>
      </Quantity>
      <div className="price">{price * quantity}</div>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
