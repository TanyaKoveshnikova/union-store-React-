import styled from "styled-components";
import { device } from "../../global.styles";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3.125rem auto 0;

  @media ${device.laptopL}{
    width: 90%;
  }

  .checkout-header {
    width: 100%;
    padding: 0.625rem 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 1.875rem;
    margin-left: auto;
    font-size: 2.25rem;
  }

  .empty-message {
    font-size: 1.125rem;
    margin: 3.125rem auto;
  }
`;
