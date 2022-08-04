import { useDispatch } from "react-redux";

import {
  removeItemToCart,
  addItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.reducer";
import {
  CheckoutItemContainer,
  Quantity,
  ImageContainer,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem: productActivity }) => {
  const { imageUrl, name, price, quantity } = productActivity;
  const dispatch = useDispatch();

  const removeItem = () => dispatch(removeItemToCart(productActivity));
  const addItem = () => dispatch(addItemToCart(productActivity));
  const clearItem = () => dispatch(clearItemFromCart(productActivity));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <div className="name">{name}</div>
      <Quantity>
        <span className="arrow" onClick={removeItem}>
          &#60;
        </span>
        <div className="value"> {quantity}</div>
        <span className="arrow" onClick={addItem}>
          &#62;
        </span>
      </Quantity>
      <div className="price">{price * quantity}</div>
      <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
