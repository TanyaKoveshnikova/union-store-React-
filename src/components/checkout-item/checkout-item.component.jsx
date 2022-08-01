import { useSelector, useDispatch } from "react-redux";

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

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <div className="name">{name}</div>
      <Quantity>
        <span
          className="arrow"
          onClick={() => dispatch(removeItemToCart(productActivity))}
        >
          &#60;
        </span>
        <div className="value"> {quantity}</div>
        <span
          className="arrow"
          onClick={() => dispatch(addItemToCart(productActivity))}
        >
          &#62;
        </span>
      </Quantity>
      <div className="price">{price * quantity}</div>
      <RemoveButton
        onClick={() => dispatch(clearItemFromCart(productActivity))}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
