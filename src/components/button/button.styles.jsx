import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 10.3rem;
  width: auto;
  height: 3.125rem;
  letter-spacing: 0.5px;
  line-height: 3.125rem;
  padding: 0 2.1rem;
  font-size: 0.95rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Gentium Book Plus";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: auto;

  &:hover {
    background-color: rgb(226, 226, 226);
    color: black;
    border: 1px solid rgb(141, 141, 141);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #619bf7;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`;
