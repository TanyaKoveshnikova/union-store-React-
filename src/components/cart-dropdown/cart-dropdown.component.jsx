import {CartDropdownContainer,EmptyMessage, CartItems} from "./cart-dropdown.styles";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

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
