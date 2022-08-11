import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { CheckoutContainer } from "./checkout-cart.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useAppSelector } from "../../hook";
import PaymentForm from "../../components/payment-form/payment-form.component";

const CheckoutCart = () => {
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <CheckoutContainer>
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
      {cartItems.length === 0 ? null : <PaymentForm />}
    </CheckoutContainer>
  );
};

export default CheckoutCart;
