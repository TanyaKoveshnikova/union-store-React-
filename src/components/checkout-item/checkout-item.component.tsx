import { FC, memo } from "react";

import { useAppDispatch } from "../../hook";
import {
  removeItemToCart,
  addItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.reducer";
import { CartItem } from "../../store/cart/cart.type";
import {
  CheckoutItemContainer,
  Quantity,
  ImageContainer,
  RemoveButton,
} from "./checkout-item.styles";

export type CheckoutItemParams = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemParams> = memo(
  ({ cartItem: productActivity }) => {
    const { imageUrl, name, price, quantity } = productActivity;
    const dispatch = useAppDispatch();

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
  }
);

export default CheckoutItem;
