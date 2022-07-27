import { ShoppingIcon, CartIconConatiner, ItemCount } from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const countProducts = (products) => {
  const initialValue = 0;
  const sumWithInitial = products.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    initialValue
  );

  return sumWithInitial;
};

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const countcartItems = countProducts(cartItems);

  return (
    <CartIconConatiner onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{countcartItems}</ItemCount>
    </CartIconConatiner>
  );
};
export default CartIcon;
