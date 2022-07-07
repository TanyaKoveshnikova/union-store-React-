import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import UnionLogo from "../../assets/pngwing.png";
import "./navigation.styles.scss";

const Navigation = () => {
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
          <Link className="nav-link" to="/sign-in">
          ВОЙТИ
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
