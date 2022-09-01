import { createSelector } from "reselect";

const selecCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selecCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selecCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
