import styled from "styled-components";
import { device } from "../../global.styles";

export const CategoryContainer = styled.h2`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.25rem;
  row-gap: 3.125rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CategoryTitle = styled.div`
  font-size: 2.375rem;
  margin-bottom: 1.56rem;
  text-align: center;
`;
