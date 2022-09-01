import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

export default function Navbar() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
