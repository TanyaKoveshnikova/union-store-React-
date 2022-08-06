import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 4.9rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 6rem;
  padding: 0.8rem;
  padding-top: 1rem;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 0.625rem 0.98rem;
  cursor: pointer;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

// .navigation {

//   .logo-container {
//
//     img {
//       width: 100%;
//       height: 100%;
//     }
//   }

//   .nav-links-container {

//     .nav-link {
//       padding: 0.625rem 0.98rem;
//       cursor: pointer;
//     }
//   }
// }
