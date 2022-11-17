import React from "react";
import { Fragment, useContext} from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext"
import { CartContext } from "../../contexts/CartContext";
import { ReactComponent as MyLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { signOutUser } from '../../utils/firebase/Firebase'
import CartIcon from "../../components/cart-icon/CartIcon";
import CardDropDown from "../../components/card-dropdown/CardDropDown";


const Navigation = () => {
  const { currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
  return (
    <Fragment>
      <div className="main-navigation">
        <Link className="logo-container" to="/">
          <MyLogo />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>{' '}SIGNOUT{' '}</span>
            ) : (<Link className="nav-link" to="/auth">
            SIGN-IN
          </Link>)
          }
          <CartIcon/>
        </div>
       { isCartOpen && <CardDropDown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
