import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment, useContext } from "react";
import UnionLogo from "../../assets/pngwing.png";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
  LogoImg,
} from "./navigation.styles";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Fragment>
      <NavigationContainer>
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
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
