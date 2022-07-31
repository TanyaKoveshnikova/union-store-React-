import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  removeItemToCart,
  addItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import {
  CheckoutItemContainer,
  Quantity,
  ImageContainer,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem: productActivity }) => {
  const { imageUrl, name, price, quantity } = productActivity;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <div className="name">{name}</div>
      <Quantity>
        <span
          className="arrow"
          onClick={() => dispatch(removeItemToCart(cartItems, productActivity))}
        >
          &#60;
        </span>
        <div className="value"> {quantity}</div>
        <span
          className="arrow"
          onClick={() => dispatch(addItemToCart(cartItems, productActivity))}
        >
          &#62;
        </span>
      </Quantity>
      <div className="price">{price * quantity}</div>
      <RemoveButton
        onClick={() => dispatch(clearItemFromCart(cartItems, productActivity))}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
