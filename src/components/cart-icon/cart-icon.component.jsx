import { useDispatch, useSelector } from "react-redux";
import { ShoppingIcon, CartIconConatiner, ItemCount } from "./cart-icon.styles";
import {
  selectCartCount,
  
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const { isCartOpen } = useSelector((state) => state.cart);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconConatiner onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconConatiner>
  );
};
export default CartIcon;
