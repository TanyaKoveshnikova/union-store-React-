import styled from "styled-components";
import { device } from "../../global.styles";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.875rem;

  @media ${device.laptop} {
    justify-content: space-around;
  }

  .title {
    font-size: 1.75rem;
    margin-bottom: 1.56rem;
    cursor: pointer;

    @media ${device.laptop} {
      text-align: center;
    }
  }

  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.25rem;

    @media ${device.laptop} {
      grid-template-columns: 1fr 1fr;
      row-gap: 1.5rem;
    }
  }
`;
