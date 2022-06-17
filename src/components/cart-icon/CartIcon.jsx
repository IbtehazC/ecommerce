import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cartSelector";
import { setIsCartOpen } from "../../store/cart/cartAction";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./CartIconStyles";

import React from "react";

export default function CartIcon() {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
