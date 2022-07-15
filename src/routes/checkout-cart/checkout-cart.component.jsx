import "./checkout-cart.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutCart = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
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
       {cartTotal=== 0 ? (
          <div className="empty-message">Корзина пуста</div>
        ) : (
          <div className="total">Итого: {cartTotal}</div>
        )}
      
    </div>
  );
};

export default CheckoutCart;
