import styled from "styled-components";
import { device } from "../../global.styles";

export const ProductCardConteiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 22rem;
  align-items: center;
  position: relative;

  @media ${device.tablet} {
    height: 12.5rem;
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 0.3rem;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 16rem;
    display: none;

    @media ${device.tablet} {
      top: 7rem;
      line-height: 1.125rem;
    }
  }

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;

  .name {
    width: 90%;
    margin-bottom: 0.9rem;
  }

  .price {
    width: 10%;
  }
`;
