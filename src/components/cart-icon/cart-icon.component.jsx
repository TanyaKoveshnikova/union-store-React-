import "./cart-icon.styles.scss";
import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
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
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{countcartItems}</span>
    </div>
  );
};
export default CartIcon;
