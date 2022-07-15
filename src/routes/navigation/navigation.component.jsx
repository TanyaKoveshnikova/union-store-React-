import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import UnionLogo from "../../assets/pngwing.png";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={UnionLogo} alt="union-logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            МАГАЗИН
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              ВЫЙТИ
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              ВОЙТИ
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
