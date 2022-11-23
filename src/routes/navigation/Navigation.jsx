import React from "react";
import { Fragment, useContext} from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext"
import { CartContext } from "../../contexts/CartContext";
import { ReactComponent as MyLogo } from '../../assets/crown.svg'
import './navigation.styles.jsx'
import { signOutUser } from '../../utils/firebase/Firebase'
import CartIcon from "../../components/cart-icon/CartIcon";
import CardDropDown from "../../components/card-dropdown/CardDropDown";
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx'


const Navigation = () => {
  const { currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <MyLogo />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              {' '}
              SIGNOUT{' '}
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN-IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CardDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
