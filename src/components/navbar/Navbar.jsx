import React from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { selectCurrentUser } from "../../store/user/userSelector";
import { selectIsCartOpen } from "../../store/cart/cartSelector";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

import { useSelector } from "react-redux";

export default function Navbar() {
  const currentUser = useSelector(selectCurrentUser);

  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <div className=" w-full flex justify-between items-center mb-6">
        <div className="flex items-center gap-10">
          <Link className="w-16 p-6" to="/">
            <CrownLogo className="logo" />
          </Link>
          <div className="">
            <Link className="w-16 p-6" to="/">
              Home
            </Link>
            <Link className="p-8 cursor-pointer" to="/shop">
              Shop
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-end">
          {currentUser ? (
            <div className="p-8 cursor-pointer" as="span" onClick={signOutUser}>
              logout
            </div>
          ) : (
            <Link className="p-8 cursor-pointer" to="/auth">
              login
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}
