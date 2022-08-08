import { Link } from "react-router-dom";
import styled from "styled-components";

import { device } from "../../global.styles";

export const HeaderContainer = styled.div`
  height: 4.3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  @media ${device.laptop} {
    height: 4.2rem;
    margin-bottom: 0.5rem;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 0.2rem;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${device.laptop} {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.2rem;
  padding: 0.625rem 0.98rem;
  cursor: pointer;

  @media ${device.laptop} {
    font-size: 1.6rem;
  }
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: 0;
`;
