import { useCallback } from "react";

import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hook";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
import Button from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

const CartDropdown = () => {
  const { cartItems, isCartOpen } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const goToCheckoutHandler = useCallback(() => {
    navigate("/checkout");
    toggleIsCartOpen();
  }, []);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length === 0 ? (
          <EmptyMessage>Корзина пуста</EmptyMessage>
        ) : (
          cartItems.map((item) => (
            <CartItemComponent key={item.id} cartItem={item} />
          ))
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>ОФОРМИТЬ</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
