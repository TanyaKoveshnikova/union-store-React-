import { ShoppingIcon, CartIconConatiner, ItemCount } from "./cart-icon.styles";
import { selectCartCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";
import { useAppDispatch, useAppSelector } from "../../hook";

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(selectCartCount);
  const { isCartOpen } = useAppSelector((state) => state.cart);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconConatiner onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconConatiner>
  );
};
export default CartIcon;
