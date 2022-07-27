import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
position: absolute;
width: 15rem;
height: 21.25rem;
display: flex;
flex-direction: column;
padding: 1rem;
border: 1px solid black;
background-color: white;
top: 5.625rem;
right: 2.5rem;
z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.div`
  font-size: 1.125rem;
  margin: 3.125rem auto;
`;

export const CartItems = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

