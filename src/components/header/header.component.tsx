import { useAppSelector } from "../../hook";

import UnionLogo from "../../assets/pngwing.png";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  HeaderContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
  LogoImg,
} from "./header.styles";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  const { isCartOpen } = useAppSelector((state) => state.cart);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoImg src={UnionLogo} alt="union-logo" />
      </LogoContainer>
      <NavLinksContainer>
        <NavLink to="/shop">МАГАЗИН</NavLink>
        {currentUser ? (
          <NavLink as="span" onClick={signOutUser}>
            ВЫЙТИ
          </NavLink>
        ) : (
          <NavLink to="/sign-in">ВОЙТИ</NavLink>
        )}
        <CartIcon />
      </NavLinksContainer>
      {isCartOpen && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
