import styled from "styled-components";
import { device } from "../../global.styles";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url("${imageUrl}")`};
`;

export const Body = styled.div`
  height: 5.6rem;
  padding: 0 1.55rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  @media ${device.mobileL} {
    height: 4rem;
  }

  h2 {
    font-weight: bold;
    margin: 0 0.375rem 0;
    font-size: 1.375rem;
    color: #4a4a4a;
    text-transform: uppercase;

    @media ${device.mobileL} {
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      font-size: 1rem;
    }
  }

  p {
    font-weight: lighter;
    font-size: 1rem;

    @media ${device.mobileL} {
      margin: 0;
      font-size: 0.9rem;
      margin-bottom: 0.2rem;
    }
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height:35vh;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 0.46rem 0.98rem;
  overflow: hidden;

  @media ${device.tablet} {
    min-width: 45%;
  }

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }

    &:first-child {
      margin-right: 0.47rem;
    }

    &:last-child {
      margin-left: 0.47rem;
    }
  }
`;
