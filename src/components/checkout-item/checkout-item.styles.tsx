import styled from "styled-components";

export const Quantity = styled.div`
  display: flex;

  .arrow {
    cursor: pointer;
  }

  .value {
    margin: 0 0.625rem;
  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 6.25rem;
  border-bottom: 1px solid darkgrey;
  padding: 0.9rem 0;
  font-size: 1.25rem;
  align-items: center;

  .name,
  ${Quantity}, 
  .price {
    width: 23%;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 0.9rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 0.75rem;
  cursor: pointer;
`;
