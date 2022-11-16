import React from "react";
import { Fragment, useContext} from "react";
import { Link, Outlet } from "react-router-dom";
import {UserContext} from "../../contexts/UserContext"
import { ReactComponent as MyLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import {signOutUser} from '../../utils/firebase/Firebase'


const Navigation = () => {
  const { currentUser} = useContext(UserContext)
  
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
