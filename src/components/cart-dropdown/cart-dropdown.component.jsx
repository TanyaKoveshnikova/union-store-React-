import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    toggleIsCartOpen();
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length === 0 ? (
          <EmptyMessage>Корзина пуста</EmptyMessage>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>ОФОРМИТЬ</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
