import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import "./checkout-cart.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useAppSelector } from "../../hook";

const CheckoutCart = () => {
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Продукт</div>
        <div className="header-block">Описание</div>
        <div className="header-block">Количество</div>
        <div className="header-block">Цена</div>
        <div className="header-block">Убрать</div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      {cartTotal === 0 ? (
        <div className="empty-message">Корзина пуста</div>
      ) : (
        <div className="total">Итого: {cartTotal}</div>
      )}
    </div>
  );
};

export default CheckoutCart;
