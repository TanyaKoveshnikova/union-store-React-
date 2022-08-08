import { Footer, ProductCardConteiner } from "./product-card.styles";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.reducer";
import { useAppDispatch } from "../../hook";
import { CategoryItem } from "../../store/categories/categories.types";

type ProductCardParams = {
  product: CategoryItem;
};

const ProductCard: React.FC<ProductCardParams> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useAppDispatch();
  const addProductToCart = () => dispatch(addItemToCart(product));
  return (
    <ProductCardConteiner>
      <img className="image" src={imageUrl} alt={`${name}`} />
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
