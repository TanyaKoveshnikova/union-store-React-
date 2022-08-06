import { FC, memo } from "react";

import "./cart-item.styles.scss";
import { CheckoutItemParams } from "../checkout-item/checkout-item.component";

const CartItemComponent: FC<CheckoutItemParams> = memo(({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="quantity">
          {quantity} × ${price}
        </span>
      </div>
    </div>
  );
});
export default CartItemComponent;
