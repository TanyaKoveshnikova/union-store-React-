import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const CartIconConatiner = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 0.625rem;
  font-weight: bold;
  bottom: 0.75rem;
`;
