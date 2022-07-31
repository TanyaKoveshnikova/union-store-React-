import { useDispatch, useSelector } from "react-redux";

import { Footer, ProductCardConteiner } from "./product-card.styles";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCardConteiner>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="cost">{price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Добавить в корзину
      </Button>
    </ProductCardConteiner>
  );
};

export default ProductCard;
