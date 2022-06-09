import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./CartIconStyles";

import React from "react";

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
