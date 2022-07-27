import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItem
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartReducer], (cartItem) =>
  cartItem.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
