import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -0.875rem;
  font-size: 0.85rem;
  color: ${mainColor};
`;
export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.3125rem;
  top: 0.625rem;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;
export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1.125rem;
  padding: 0.625rem 0.625rem 0.625rem 0.125rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 1.56rem 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 2.8125rem 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
