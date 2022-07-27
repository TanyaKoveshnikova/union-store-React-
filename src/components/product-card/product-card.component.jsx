import { Footer, ProductCardConteiner } from "./product-card.styles";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
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
