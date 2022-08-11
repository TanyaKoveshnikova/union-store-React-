import { useState, useEffect, Fragment } from "react";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../hook";

import { clearCart } from "../../store/cart/cart.reducer";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import Modal from "../../components/modal/modal.component";
import {
  CloseModal,
  ContentModal,
  InputContainer,
  ConfirmationCodeContainer,
  ExplanatoryText,
  TextKod,
} from "./styles/payment-form.styles";
import "./styles/payment-input.styles.scss";

const PaymentForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [numCod, setNumCod] = useState("");
  const [numCard, setNumCard] = useState("");
  const [isLoadingButton, setisLoadingButton] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const { currentUser } = useAppSelector((state) => state.user);
  const clearCartFromItems = () => dispatch(clearCart());

  useEffect(() => {
    if (numCod.length >= 3) {
      setisLoadingButton(false);
    } else {
      setisLoadingButton(true);
    }
  }, [numCod, numCard]);

  const handleNumChange = (event) => {
    const limit = 4;
    setNumCod(event.target.value.slice(0, limit));
  };

  const handleNumCardChange = (event) => {
    setNumCard(event.target.value);
  };

  const orderAccept = () => {
    setModalActive(true);
    clearCartFromItems();
  };

  const onLoginPage = () => {
    setModalActive(true);
    navigate("/sign-in");
  };

  return (
    <div>
      <ExplanatoryText>Введите данные карты.</ExplanatoryText>

      <InputContainer>
        <Button
          isLoading={isLoadingButton}
          buttonType={BUTTON_TYPES_CLASSES.inverted}
          onClick={() => setModalActive(true)}
        >
          Оплатить
        </Button>
        {currentUser ? (
          <div onClick={clearCartFromItems}>
            <Modal
              active={modalActive}
              setActive={setModalActive}
              navigateTo="/"
            >
              <CloseModal onClick={orderAccept}>&#10005;</CloseModal>
              <ContentModal>Ваш заказ принят.</ContentModal>
            </Modal>
          </div>
        ) : (
          <Modal active={modalActive} setActive={setModalActive}>
            <Fragment>
              <ContentModal>Пожалуйста айдите в аккаунт.</ContentModal>
              <Button onClick={onLoginPage}>Перейти на страницу входа.</Button>
            </Fragment>
          </Modal>
        )}
        <InputMask
          mask="9999 9999 9999 9999"
          maskChar="_"
          alwaysShowMask="true"
          value={numCard}
          name="numCard"
          onChange={handleNumCardChange}
          required
        />
        <ConfirmationCodeContainer>
          <input
            required
            type="number"
            id="numCod"
            name="numCod"
            value={numCod}
            onChange={handleNumChange}
          />
          <TextKod>CVV/CVC</TextKod>
        </ConfirmationCodeContainer>
      </InputContainer>
    </div>
  );
};
export default PaymentForm;
