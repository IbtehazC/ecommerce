import React from "react";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux/es/hooks/useSelector";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { selectCurrentUser } from "../../store/user/userSelector";
import { selectIsCartOpen } from "../../store/cart/cartSelector";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

import {
  LogoContainer,
  NavigationContainer,
  NavLinksContainer,
  NavLink,
} from "./NavbarStyles";

export default function Navbar() {
  const currentUser = useSelector(selectCurrentUser);

  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
}
